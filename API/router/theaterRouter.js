const express = require('express');
const app = express();
const tscreen = require('../model/theaterscreen');
const bodyparser = require('body-parser');
const screen = require('./../model/screen');
const movies = require('./../model/movietb');
const router = new express.Router();
const auth = require('./../middleware/auth');
app.use(bodyparser.urlencoded({extended:false}));

router.get('/gettscreen',auth,async(req,res)=>{
    try{
        const Tscreen =await tscreen.find({ user_id: req.user._id }).populate('user_id').populate('movie_id').populate('screen_id');
        if (!Tscreen) {
            throw new Error("No Record Found !!");
        }
        res.send(Tscreen);
    }
    catch(error){
        res.setHeader('content-type', 'application/json');
        res.statusCode = 400;
        res.end(JSON.stringify({ message: error.message }));
    }
})

router.get('/gettscreens',async(req,res)=>{
    try{
        const Tscreen =await tscreen.find({}).populate('user_id').populate('movie_id').populate('screen_id');
        if (!Tscreen) {
            throw new Error("No Record Found !!");
        }
        res.send(Tscreen);
    }
    catch(error){
        res.setHeader('content-type', 'application/json');
        res.statusCode = 400;
        res.end(JSON.stringify({ message: error.message }));
    }
})

router.post('/addtscreen',async(req,res)=>{

    try{
        console.log(req.body);
        if(!req.body){
            console.log(req.body);
            res.status(400).send({message:"Content Can not be empty"});
        }
        const Tscreens =await new tscreen(req.body);
        Tscreens.save();
        res.send(Tscreens);
    }
    catch(error)
    {
        console.log('error'+error);
    }
})

router.delete('/deletetscreen/:id',async(req,res) => {
    try{
        const Tscreens = await tscreen.findByIdAndDelete({_id:req.params.id});
        await res.send(Tscreens);
    }catch(error){
        res.setHeader('Content-type', 'application/json');
        res.statusCode = 400;
        res.end(JSON.stringify({ message: error.message }));
    }
});

router.get('/singletscreen/:id',async(req,res) => {
    try{
        const Tscreens = await tscreen.findById({_id:req.params.id}).populate('screen_id').populate('movie_id').populate('user_id');
        await res.send(Tscreens);
    }catch(error){
        console.log("fetch error1 !!");
    }
});

router.put('/updatetscreen/:id',async(req,res) => {
    try{
        const Tscreen = await tscreen.findByIdAndUpdate({_id:req.params.id},req.body,{new:true}).populate('screen_id').populate('movie_id').populate('user_id');
        await res.send(Tscreen);
    }catch(error){
        console.log("updated error !!"+error);
    }
});

router.get('/fetchDashboradRecord/:user_id', async (req, res) => {
    try {
        let Screen = await screen.find({ user_id: req.params.user_id }).populate('user_id').count();
        let Tscreen = await tscreen.find({user_id:req.params.user_id}).populate('user_id').count();
        let Movies = await movies.find().count();
        res.send({ "screen": Screen, "theaterScreen": Tscreen, "Movies": Movies});
    } catch (err) {
        res.send(err.message)
    }
});

module.exports = router;