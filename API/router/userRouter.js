const express = require('express');
const app = express();
// const city = require('../model/city');
const user = require('../model/user');
const multer = require('multer')
const bodyparser = require('body-parser');
const router = new express.Router();
const crypto = require('crypto');
app.use(bodyparser.urlencoded({ entended: false }));
const imageuplaod = require('express-fileupload');
router.use(imageuplaod());
var Jimp = require('jimp');

router.get('/getusers', async (req, res) => {
    try {
        const Users = await user.find().populate('state_id').populate('city_id').populate('group_id');
        res.send(Users);
    }
    catch (error) {
        console.log("error");
    }
})

function encrypt(text) {
    var mykey = crypto.createCipher('aes-128-cbc', 'mypassword');
    var mystr = mykey.update(text, 'utf8', 'hex')
    mystr += mykey.final('hex');
    return mystr;
}

router.post('/adduser', async (req, res) => {
    try {
        if (!req.body) {
            res.status(400).send({ message: "Content Can not be empty" });
        }
        var pass = encrypt(req.body.password)
        req.body.password = pass;
        const { photo } = req.files;
        const datenow = Date.now();
        photo.mv('./public/images/' + datenow + photo.name)
        req.body.photo = "/images/" + datenow + photo.name;
        Jimp.read('./public/images/' + datenow + photo.name)
            .then(lenna => {
                return lenna
                    .resize(256, 256) // resize
                    .quality(100) // set JPEG quality
                    .write('./public/images/' + datenow + photo.name); // save
            })
            .catch(err => {
                console.error(err);
            });
        const Users = await new user(req.body);
        Users.save();
        res.send(Users);
    }
    catch (error) {
        console.log('error' + error);
    }
})

router.delete('/deleteuser/:id', async (req, res) => {
    try {
        console.log(req.params.id);
        const Users = await user.findByIdAndDelete({ _id: req.params.id });
        res.send(Users);
    } catch (error) {
        console.log("Deleted error !!");
    }
});

function decrypt(text) {
    var mykey = crypto.createDecipher('aes-128-cbc', 'mypassword');
    var mystr = mykey.update(text, 'hex', 'utf8')
    mystr += mykey.final('utf8');
    return mystr;
}
router.get('/fetchRoleWithPassword/:id/:pass', async (req, res) => {
    try {
        console.log(req.params.pass);
        var user1 = encrypt(req.params.pass);
        req.params.pass = user1;
        const Users = await user.find({ user_name: req.params.id, password: req.params.pass });
        console.log(Users);
        res.send(Users);
    } catch (error) {
        console.log("fetch error !!" + error);
    }
});

// router.put('/updatecities/:id',async(req,res) => {
//     try{
//         const Cities = await city.findByIdAndUpdate({_id:req.params.id},req.body,{new:true}).populate('state_id');
//         // console.log(students);
//        // students.save();
//         res.send(Cities);
//     }catch(error){
//         console.log("updated error !!"+error);
//     }
// });

module.exports = router;

