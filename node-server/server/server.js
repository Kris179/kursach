require('dotenv').config()

const PORT = process.env.PORT || 8083

const express = require('express'), http = require('http');
const controller = require("../controller/controller");
const Prodcont = require("../controller/prodCont");
const bcrypt = require('bcrypt')

const app = express();
const server = http.createServer(app);
const errorMiddleware = require('../middlewares/error-middleware')

const cors = require('cors');

const cookieParser = require('cookie-parser')
const passport = require("passport");
const knex = require("../DB/db");
const userDTO = require("../dtos/user-dto");
const tokenService = require("../service/token-service");

app.use(express.json())
app.use(cookieParser())
app.use(cors({credentials: true, origin: 'http://localhost:3000'}))
app.use("/api", controller);
app.use("/photo", Prodcont);
app.use(errorMiddleware)

const start = async () => {
    try {
        server.listen(PORT, () => console.log('Server listening on port: ', PORT))
    } catch (e) {
        console.log(e)
    }
}


app.use(require("cookie-parser")());
app.use(require("body-parser").urlencoded({ extended: true }));
app.use(
    require("express-session")({
        secret: "keyboard cat",
        resave: true,
        saveUninitialized: true,
    })
);
app.use(passport.initialize());
app.use(passport.session());

const VKontakteStrategy = require('passport-vkontakte').Strategy;

passport.use(
    new VKontakteStrategy(
        {
            clientID: "51649688",
            clientSecret: "NpkJI5CyOidXb5owoCbC",
            callbackURL: "http://localhost:8083/auth/vkontakte/callback",
            scope: ['email'],
            profileFields: ['email'],
        },
        async function (accessToken, refreshToken, params, profile, done) {
            try {
                const [user] = await knex('Users').select('*').where('UserID', profile.id);
                console.log(profile)

                if (user) {
                    return done(null, profile); // User already exists
                } else {
                    const newUser = {
                        UserID: profile.id,
                        Login: profile.name.givenName,
                        Email: profile.emails[0].value,
                        Activation: true,
                        Admin: false,
                    };
                    const [createdUser] = await knex('Users').insert(newUser).returning('*');
                    return done(null, profile);
                }
            } catch (err) {
                console.log(err);
                return done(err);
            }
        }
    )
);

passport.serializeUser(function (user, done) {
    console.log("SERIALIZE", user);
    done(null, JSON.stringify(user));
});

passport.deserializeUser(function (data, done) {
    console.log("DESERIALIZE", data);
    done(null, JSON.parse(data));
});

app.get("/auth/vkontakte", passport.authenticate("vkontakte"));

app.get(
    "/auth/vkontakte/callback",
    passport.authenticate("vkontakte", {
        successRedirect: "/vkuser", //направить после успеха
        failureRedirect: "http://localhost:3000", //направить после неудачи
    })
);

app.get("/vkuser", async function (req, res) {
    try {
        const hashpass = await bcrypt.hash(req.user.id.toString(), 8);



        const user = await knex('Users').where('UserID', req.user.id).first();
console.log(user)
        if (user && !user.Email) {
            await knex('Users').where('UserID', req.user.id).update('Email', req.user.emails[0].value);
        }

        res.redirect(`http://localhost:3000/vk/${user.UserID}`);
    } catch (err) {
        console.log(err);
        res.status(500).send("Server Error");
    }
});

app.get("/users/:id", async (req, res) => {
    try {
        console.log(req.params.id)
        const users = await knex
            .select('*')
            .from('Users')
            .where('UserID', req.params.id)
console.log('lkjhgfd')
        const userdto = new userDTO(users[0])
        console.log(userdto)
        const tokens = tokenService.generateTokens({...userdto})
        await tokenService.saveToken(userdto.UserID, tokens.refreshToken)

        res.cookie('refreshToken', tokens.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
        res.send({...tokens, user: userdto})

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});

start()

