const mongoose = require('mongoose');
const bookings = require('./bookingtb');
const movie= require('./movietb');
const theaterscreen = require("./theaterscreen");
const moviebookingtblschema = mongoose.Schema({
    booking_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:bookings
    },
    rows:{
        type:Number,
    },
    cols:{
        type:Number
    },
    price:{
        type:Number
    },
        movie_id:{
        type : mongoose.Schema.Types.ObjectId,
        ref: movie
    },
    tscreen_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:theaterscreen
    }
})

const moviebookingtbl = mongoose.model("movie_booking_tbl",moviebookingtblschema);
module.exports = moviebookingtbl;