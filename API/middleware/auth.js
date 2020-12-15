const secret = "movieSystemToken";
const jwt = require("jsonwebtoken");
const User = require("../model/user");

const auth = async (req,res,next) => {
    try {
        const header= req.headers.authorization
        const errorObj = {
            statusCode: 401
        }
        if(!header){
            errorObj.message = "Authorization required!";
            throw errorObj;
        }
        const token = header.replace('Bearer ' ,'');
        const decode = jwt.verify(token, secret);
        console.log("te"+decode.id);
        const user = await User.find({
                _id: decode.id,
                group_id: "5fcc4220e862ea35384c7c8e"
        });
        if(!user) {
            errorObj.message = "Authorization required!";
            throw errorObj;
        }
        req.user = user[0];
        
        next();
    } catch(error) {
        let errorObj = { statusCode: 401 }
        if(error.name == "JsonWebTokenError") {
            errorObj.message = "Token Malformed";
            return next(errorObj);
        }
        next({ statusCode: 401, message: "Authorization required!" });
    }
}

module.exports = auth