const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/movie_system",{
   useNewUrlParser:false,
   useUnifiedTopology:true,
   useFindAndModify:false
});