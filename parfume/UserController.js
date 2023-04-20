const databaseConfig = require('./knexfile'); //относительный путь к файлу настроек
var knex = require('knex')(databaseConfig);
const express = require('express'); //Импорт модуля express
const app = express(); //объявление express приложения
app.use(express.json())
const port = 8081; //порт, на котором будет работать приложение
const uuid = require('uuid').v4;
app.get("/users", async (req, res) => {
    const UsersList = await knex
    .select("*")
    .from("Users")
    res.json(UsersList);
   });


app.get("/users/:UserID", async (req, res) => {
    const UsersList = await knex
    .select("*")
    .from("Users")
    .where("UserID",req.params.UserID)
    res.json(UsersList);
});


app.post("/users", (req, res) => {
    console.log(req.body)
    knex("Users").insert(
    {Login: req.body.Login,
    Password: req.body.Password,
    Phone: req.body.Phone,
    FIO: req.body.FIO,
    Role: req.body.Role})
    .then(() => {res.json({message: "Успешно добавлен пользователь"});})
    .catch(err => {res.json({message: "Произошла ошибка", error: err});})
});

app.put('/users/:UserID', async (req, res)=> {
    const UserID = req.params.UserID;
    const{Login, Password, Phone, FIO, Role} = req.body
    knex.select('*')
        .from('Users')
        .where('UserID', UserID)
        .update({
            Login: Login, Password: Password, Phone: Phone, FIO: FIO, Role: Role
        })
        .orderBy("id")
    .then(() => {res.json({message: "Успешно обновлен пользователь"});})
    .catch(err => {res.json({message: "Произошла ошибка", error: err});})
});

app.delete("/users/:UserID", (req, res) => {
    console.log(req.params)
    const UserID = req.params.UserID;
    knex("Users")
    .where("UserID", UserID)
    .del()
    .then(() => res.json({message: "Пользователь успешно удалён"}));
});



app.get("/orders", async (req, res) => {
    const OrdersList = await knex
    .select("*")
    .from("Orders")
    res.json(OrdersList);
   });


app.get("/orders/:OrderID", async (req, res) => {
    const OrdersList = await knex
    .select("*")
    .from("Orders")
    .where("OrderID",req.params.OrderID)
    res.json(OrdersList);
});


app.post("/orders", (req, res) => {
    console.log(req.body)
    const id = uuid();
    knex("Orders").insert(
    {UserID: id,
    Date: req.body.Date,
    Price: req.body.Price,})
    .then(() => {res.json({message: "Успешно добавлен заказ"});})
    .catch(err => {res.json({message: "Произошла ошибка", error: err});})
});

app.put('/orders/:OrderID', async (req, res)=> {
    const OrderID = req.params.OrderID;
    const{UserID, Date, Price,} = req.body
    knex.select('*')
        .from('Orders')
        .where('OrderID', OrderID)
        .update({
            UserID: UserID, Date: Date, Price: Price
        })
        .orderBy("id")
    .then(() => {res.json({message: "Успешно обновлен заказ"});})
    .catch(err => {res.json({message: "Произошла ошибка", error: err});})
});

app.delete("/orders/:OrderID", (req, res) => {
    console.log(req.params)
    const OrderID = req.params.OrderID;
    knex("Orders")
    .where("OrderID", OrderID)
    .del()
    .then(() => res.json({message: "Заказ успешно удалён"}));
});



app.listen(port, () => { //Запуск приложения. Веб-сервер начинает прослушивать указанный порт
     console.log(`Example app listening at http://localhost:${port}`)
})