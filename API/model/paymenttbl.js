const mongoose = require('mongoose');
const bookings = require('./bookingtb');

const paymentschema = mongoose.Schema({
    payment_mode:{
        type:String
    },
    payment_status:{
        type:String
    },
    booking_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:bookings
    }
})

const paymenttbl = mongoose.model("paymenttbls",paymentschema);
module.exports = paymenttbl;