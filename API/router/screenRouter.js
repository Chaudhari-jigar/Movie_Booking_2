const express = require('express');
const app = express();
const screen = require('../model/screen');
const bodyparser = require('body-parser');
const router = new express.Router();
app.use(bodyparser.urlencoded({ extended: false }));

router.get('/getScreen', async (req, res) => {
    try {
        const Screens = await screen.find({});
        if (!Screens) {
            throw new Error("No Record Found !!");
        }
        res.send(Screens);
    }
    catch (err) {
        res.setHeader('content-type', 'application/json');
        res.statusCode = 400;
        res.end(JSON.stringify({ message: err.message }));
    }
})

router.post('/addscreen', async (req, res) => {
    try {
        const Screens = await new screen(req.body);
        if (!Screens) {
            throw new Error("Content Is Not Found !!");
        }
        Screens.save();
        res.send(Screens);
    }
    catch (err) {
        res.setHeader('Content-type', 'application/json');
        res.statusCode = 400;
        res.end(JSON.stringify({ message: err.message }));
    }
})

router.delete('/deletescreen/:id', async (req, res) => {
    try {
        const Screens = await screen.findByIdAndDelete({ _id: req.params.id });
        if (!Screens) {
            throw new Error("No Record Found !!");
        }
        res.send(Screens);
    } catch (err) {
        res.setHeader('Content-type', 'application/json');
        res.statusCode = 400;
        res.end(JSON.stringify({ message: err.message }));
    }
});

router.get('/singlescreen/:id', async (req, res) => {
    try {
        const Screens = await screen.findOne({ _id: req.params.id });
        if (!Screens) {
            throw new Error("No Record Found !!");
        }
        res.send(Screens);
    }
    catch (err) {
        res.setHeader('content-type', 'application/json');
        res.statusCode = 400;
        res.end(JSON.stringify({ message: err.message }));
    }
})

router.put('/updatescreen/:id', async (req, res) => {
    try {
        const Screens = await screen.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true });
        // if (!Screens) {
        //     throw new Error("No Record Found !!");
        // }
        res.send(Screens);
    } catch (err) {
        console.log(err.message);
        res.setHeader('Content-type', 'application/json');
        res.statusCode = 400;
        res.end(JSON.stringify({ message: err.message }));
    }
});

module.exports = router;