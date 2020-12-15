const express = require('express');
const app = express();
const jwt = require("jsonwebtoken")
const User = require('../model/user');
const bcrypt = require("bcryptjs")
const secret = "movieSystemToken";
const bodyparser = require('body-parser');
const router = new express.Router();
app.use(bodyparser.urlencoded({extended:false}));

router.post('/login',async (req,res) => {
    try {

        let user = await User.findOne({email:req.body.email,group_id:req.body.group_id}).populate("group_id").populate("state_id").populate("city_id");
        const isValid = bcrypt.compareSync(req.body.password, user.password);
        if(!isValid) {
            user.message = "Unable to login!";
            throw errorObj;
        }

        let token = jwt.sign({ id: user._id }, secret);
        res.send({token: "Bearer "+token,user})
        
    } catch (error) {
        console.log(error.message);
    }
})

module.exports = router;