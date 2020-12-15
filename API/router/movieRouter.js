const express = require('express');
const app = express();
const multer = require('multer');
const movie = require('../model/movietb');
const bodyparser = require('body-parser');
var path = require('path');
app.use(bodyparser.urlencoded({ extended: true }));
const router = express.Router();

router.get('/getmovie', async (req, res) => {
    try {
        const movies = await movie.find({});
        res.send(movies);
    } catch (error) {
        console.log(error);
    }
});

router.get('/getsinglemovie/:id', async (req, res) => {
    try {
        const movies = await movie.find({ _id: req.params.id });
        res.send(movies);
    } catch (error) {
        console.log(error);
    }
});

router.delete('/deletemovie/:id', async (req, res) => {
    try {
        const movies = await movie.findByIdAndDelete({ _id: req.params.id });

        res.send(movies);
    } catch (error) {
        console.log(error);
    }
});


router.post('/addmovie', async (req, res) => {
    console.log(req.files);
    console.log(req.body.moviename);
    const { movie_logo } = req.files;
    console.log(movie_logo.name)

    try {
        // const imagepath = path.join(__dirname, '..', '..','public','images');
        const datenow = Date.now();
        movie_logo.mv('./public/images/' + datenow + movie_logo.name)
        req.body.movie_logo = "/images/"+ datenow +movie_logo.name;
        const movies = new movie(req.body);
        movies.save();
        res.send(movies)
    }
    catch (err) {
        console.log(err.message)
        return res.send("err")
    }
});
module.exports = router;