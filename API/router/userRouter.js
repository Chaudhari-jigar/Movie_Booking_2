const express = require('express');
const app = express();
const multer = require('multer');
const user = require('../model/user');
const bodyparser = require('body-parser');
var path = require('path');
const bcrypt = require("bcryptjs")
app.use(bodyparser.urlencoded({ extended: true }));
const router = express.Router();

router.post('/adduser', async (req, res) => {
    console.log(req.files);
    const { photo1 } = req.files;
    console.log(photo1.name)
    req.body.password= bcrypt.hashSync(req.body.password,10);
    try {
        // const imagepath = path.join(__dirname, '..', '..','public','images');
        const datenow = Date.now();
        photo1.mv('./public/images/' + datenow + photo1.name)
        req.body.photo = "/images/"+ datenow +photo1.name;
        const movies = new user(req.body);
        movies.save();
        res.send(movies)
    }
    catch (err) {
        console.log(err.message)
        return res.send("err")
    }
});
module.exports = router;