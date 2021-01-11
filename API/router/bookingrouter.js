const express = require("express");
const app = express();
const bookings = require("../model/bookingtb");
const moviebookingtbl = require("../model/movie_booking_tbl");
const paymenttbl = require("../model/paymenttbl");
const theater = require("../model/theaterscreen");
const users = require("../model/user");
const bodyparser = require("body-parser");
const movietb = require("../model/movietb");
const router = new express.Router();
app.use(bodyparser.urlencoded({ entended: false }));

router.get("/getbookings", async (req, res) => {
  try {
    console.log(req.body)
    const bookings1 = await bookings
      .find()
      .populate("movie_id")
      .populate("uesr_id")
      .populate("theater_id");
    res.send(bookings1);
  } catch (error) {
    res.send(error.message);
  }
});

router.post("/addbookings", async (req, res) => {
  try {
    const singleuser = await users
      .findById(req.body.user_id)
      .populate("state_id")
      .populate("city_id")
      .populate("group_id");
    const singlemovie = await movietb.findById(req.body.movie_id).populate();
    const singletheaterscreen = await theater
      .findById(req.body.theater_id)
      .populate("user_id")
      .populate("movie_id")
      .populate("screen_id");
    var s = {
      movie_id: singlemovie,
      user_id: singleuser,
      booking_date: req.body.booking_date,
      booking_time: req.body.booking_time,
      total: req.body.price,
      tscreen_id: singletheaterscreen,
    };
    const book = new bookings(s);
    await book.save();
    var r1 = req.body.rows;
    var c1 = req.body.cols;
    req.body.price = req.body.price / r1.length;
    for (let temp = 0; temp < r1.length; temp++) {
      console.log("sd");
      var d = {
        booking_id: book,
        rows: r1[temp],
        cols: c1[temp],
        price: req.body.price,
        movie_id: singlemovie,
        tscreen_id: singletheaterscreen,
      };
      const moviebook = new moviebookingtbl(d);
      await moviebook.save();
    }


    var payment = {
      payment_status: "Completed",
      payment_mode: "Paypal",
      booking_id: book,
    };
    const pay = new paymenttbl(payment);
    await pay.save();
    res.send({ book, moviebook, pay });
  } catch (error) {
    res.send(error.message);
  }
});

router.get("/getmoviebooking/:id", async (req, res) => {
  try {
    var mbook = await moviebookingtbl
      .find({
        tscreen_id: req.params.id
      })
      .populate("booking_id")
      .populate("movie_id")
      .populate("tscreen_id")
      .populate("screen_id");
    res.send(mbook);
  } catch (error) {
    res.send(error.message);
  }
});

router.get("/getmoviebookingTheater/:id", async (req, res) => {
  try {
    var Tempbooks = new Array();

    var tscreens = await theater.find({ user_id: req.params.id }).populate("tscreen_id");
    var book = await bookings.find({}).populate("movie_id").populate("user_id");
    var a = "asd";
    var b = "asd";
    if(a == b)
    {
      console.log("hello");
    }
        for (let r = 0; r < tscreens.length; r++) {
    for (let n = 0; n < book.length; n++) {
        if (book[n].tscreen_id.toString() == tscreens[r]._id.toString()) {
          console.log("hello");
          Tempbooks.push(book[n]);
        }
      }
    }
    res.send(Tempbooks);
  } catch (error) {
    res.send(error.message);
  }
});

module.exports = router;
