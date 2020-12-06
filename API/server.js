const express = require('express');
const app = express(); 
const cors = require('cors');
require('./model/mongoose');
const stateRouter = require('./router/stateRouter');
const cityRouter = require('./router/cityRouter');
const groupRouter = require('./router/groupRouter');
const userRouter = require('./router/userRouter');
app.use(express.json());
app.use(stateRouter);
app.use(cityRouter);
app.use(groupRouter);
app.use(userRouter);
app.use(cors());

app.listen(3001,() =>{
    console.log("Server is running 3001");
});