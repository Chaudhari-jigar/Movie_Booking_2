const express = require('express');
const app = express();
const jwt = require("jsonwebtoken")
const User = require('../model/user');
const bcrypt = require("bcryptjs")
const secret = "movieSystemToken";
const bodyparser = require('body-parser');
const router = new express.Router();
app.use(bodyparser.urlencoded({extended:false}));

router.get('/login/:email/:password',async (req,res,next) => {
    try {
        let user = await User.findOne({email:req.params.email}).populate("group_id").populate("state_id").populate("city_id");
        console.log(req.params.password+" sd "+ user.password)
        const isValid = bcrypt.compareSync(req.params.password, user.password);
        console.log(isValid);
        if(!isValid) {
            throw new Error('BROKEN')
        }else{
            let token = jwt.sign({ id: user._id }, secret);
            res.send({token: "Bearer "+token,user})
        }        
    } catch (err) {
        next(err)
    }
})

module.exports = router;