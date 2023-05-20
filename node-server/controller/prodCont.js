const path = require("path");
const express = require("express");
const fileUploads = require("express-fileupload");
const uuid = require("uuid").v4

const knex = require("../DB/db");
const ApiError = require("../exeptions/api-error");
const bcrypt = require("bcrypt");
const userDTO = require("../dtos/user-dto");
const tokenService = require("../service/token-service");
const router = express.Router();

router.post("/upload",
    fileUploads({tempFileDir: true}),
    async(req, res) => {

        console.log(req.files)
        if(!req.files.file){
            res.send({success: false});
            return;
        }

        const photoId=uuid()+ ".jpg";
        const photoPath = path.join(
            __dirname,
            "..",
            "/img",
            photoId
        );
        req.files.file.mv(photoPath);

        const type = req.files.file.mimetype;

        await knex('Photos').insert(
            {
                photoId: photoId,
                Path: photoPath,
                type: type
            }
        )
        res.send({success: true, photoId})


})


router.get("/:fileId", async (req, res) => {
    const fileId = req.params.fileId;
    const file = await knex.select("*").from("Photos").where("ID", fileId);

    if (!file || file.length === 0) {
        res.sendStatus(404);
        return;
    }

    console.log(file[0].type);

    res.setHeader("Content-Type", file[0].type);
    res.sendFile(file[0].Path);
});

module.exports = router;

