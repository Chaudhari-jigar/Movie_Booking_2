const express = require('express');
const app = express(); 
const cors = require('cors');
require('./model/mongoose');
const stateRouter = require('./router/stateRouter');
const cityRouter = require('./router/cityRouter');
app.use(express.json());
app.use(stateRouter);
app.use(cityRouter);
app.use(cors());

app.listen(3001,() =>{
    console.log("Server is running 3001");
});