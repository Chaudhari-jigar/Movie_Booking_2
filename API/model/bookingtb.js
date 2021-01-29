const mongoose = require("mongoose");
const movie= require('./movietb');
const theaterscreen = require("./theaterscreen");
const users= require('./user');
const booking_schema = new mongoose.Schema({
    movie_id:{
        type : mongoose.Schema.Types.ObjectId,
        ref: movie
    },
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref:users
    },
    booking_date:{
        type:String,
    },
    booking_time:{
        type:String
    },
    total:{
        type:Number
    },
    tscreen_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:theaterscreen
    }
})
const bookingtb = mongoose.model("bookingtb",booking_schema);
module.exports = bookingtb;