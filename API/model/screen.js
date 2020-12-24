const mongoose = require("mongoose");
const state = require("./state");
const Screen_Schema = new mongoose.Schema({
    screen_name: {
        type: String,
        require: true
    },
    rows: {
        type: String,
        require: true
    },
    cols: {
        type: String,
        require: true
    }

})

const screen = mongoose.model("screen", Screen_Schema)
module.exports = screen;