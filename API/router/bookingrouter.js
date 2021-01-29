const express = require("express");
const app = express();
const bookings = require("../model/bookingtb");
const moviebookingtbl = require("../model/movie_booking_tbl");
const paymenttbl = require("../model/paymenttbl");
const theater = require("../model/theaterscreen");
const screen = require("../model/screen");
const users = require("../model/user");
const bodyparser = require("body-parser");
const movietb = require("../model/movietb");
var nodemailer = require("nodemailer");

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
    var p = req.body.price;
    var lk = "";
    var se = "";
    req.body.price = req.body.price / r1.length;
    for (let temp = 0; temp < r1.length; temp++) {
      switch (r1[temp]) {
        case 1:
          se = "A"
          break;
        case 2:
          se = "B"
          break;
        case 3:
          se = "C"
          break;
        case 4:
          se = "D"
          break;
        case 5:
          se = "E"
          break;
        case 6:
          se = "F"
          break;
        case 7:
          se = "G"
          break;
        case 8:
          se = "H"
          break;
        case 9:
          se = "I"
          break;
        case 10:
          se = "J"
          break;
      }
      lk = lk + ("[" + se + "," + c1[temp] + "]");
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
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "dp297609@gmail.com",
        pass: "dhaval1216",
      },
    });

    var html = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

  <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
  <head>
  <!--[if gte mso 9]><xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml><![endif]-->
  <meta content="text/html; charset=utf-8" http-equiv="Content-Type"/>
  <meta content="width=device-width" name="viewport"/>
  <!--[if !mso]><!-->
  <meta content="IE=edge" http-equiv="X-UA-Compatible"/>
  <!--<![endif]-->
  <title></title>
  <!--[if !mso]><!-->
  <link href="https://fonts.googleapis.com/css?family=Merriweather" rel="stylesheet" type="text/css"/>
  <link href="https://fonts.googleapis.com/css?family=Droid+Serif" rel="stylesheet" type="text/css"/>
  <link href="https://fonts.googleapis.com/css?family=Bitter" rel="stylesheet" type="text/css"/>
  <!--<![endif]-->
  <style type="text/css">
      body {
        margin: 0;
        padding: 0;
      }
  
      table,
      td,
      tr {
        vertical-align: top;
        border-collapse: collapse;
      }
  
      * {
        line-height: inherit;
      }
  
      a[x-apple-data-detectors=true] {
        color: inherit !important;
        text-decoration: none !important;
      }
    </style>
  <style id="media-query" type="text/css">
      @media (max-width: 700px) {
  
        .block-grid,
        .col {
          min-width: 320px !important;
          max-width: 100% !important;
          display: block !important;
        }
  
        .block-grid {
          width: 100% !important;
        }
  
        .col {
          width: 100% !important;
        }
  
        .col_cont {
          margin: 0 auto;
        }
  
        img.fullwidth,
        img.fullwidthOnMobile {
          max-width: 100% !important;
        }
  
        .no-stack .col {
          min-width: 0 !important;
          display: table-cell !important;
        }
  
        .no-stack.two-up .col {
          width: 50% !important;
        }
  
        .no-stack .col.num2 {
          width: 16.6% !important;
        }
  
        .no-stack .col.num3 {
          width: 25% !important;
        }
  
        .no-stack .col.num4 {
          width: 33% !important;
        }
  
        .no-stack .col.num5 {
          width: 41.6% !important;
        }
  
        .no-stack .col.num6 {
          width: 50% !important;
        }
  
        .no-stack .col.num7 {
          width: 58.3% !important;
        }
  
        .no-stack .col.num8 {
          width: 66.6% !important;
        }
  
        .no-stack .col.num9 {
          width: 75% !important;
        }
  
        .no-stack .col.num10 {
          width: 83.3% !important;
        }
  
        .video-block {
          max-width: none !important;
        }
  
        .mobile_hide {
          min-height: 0px;
          max-height: 0px;
          max-width: 0px;
          display: none;
          overflow: hidden;
          font-size: 0px;
        }
  
        .desktop_hide {
          display: block !important;
          max-height: none !important;
        }
      }
    </style>
  </head>
  <body class="clean-body" style="margin: 0; padding: 0; -webkit-text-size-adjust: 100%; background-color: #5f6571;">
  <!--[if IE]><div class="ie-browser"><![endif]-->
  <table bgcolor="#5f6571" cellpadding="0" cellspacing="0" class="nl-container" role="presentation" style="table-layout: fixed; vertical-align: top; min-width: 320px; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #5f6571; width: 100%;" valign="top" width="100%">
  <tbody>
  <tr style="vertical-align: top;" valign="top">
  <td style="word-break: break-word; vertical-align: top;" valign="top">
  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color:#5f6571"><![endif]-->
  <div style="background-color:transparent;">
  <div class="block-grid" style="min-width: 320px; max-width: 680px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: #ffc600;">
  <div style="border-collapse: collapse;display: table;width: 100%;background-color:#ffc600;">
  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:680px"><tr class="layout-full-width" style="background-color:#ffc600"><![endif]-->
  <!--[if (mso)|(IE)]><td align="center" width="680" style="background-color:#ffc600;width:680px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:0px;"><![endif]-->
  <div class="col num12" style="min-width: 320px; max-width: 680px; display: table-cell; vertical-align: top; width: 680px;">
  <div class="col_cont" style="width:100% !important;">
  <!--[if (!mso)&(!IE)]><!-->
  <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:0px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;">
  <!--<![endif]-->
  <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 15px; padding-left: 15px; padding-top: 15px; padding-bottom: 15px; font-family: Georgia, serif"><![endif]-->
  <div style="color:#000000;font-family:Merriwheater, Georgia, serif;line-height:1.2;padding-top:15px;padding-right:15px;padding-bottom:15px;padding-left:15px;">
  <div style="line-height: 1.2; font-size: 12px; color: #000000; font-family: Merriwheater, Georgia, serif; mso-line-height-alt: 14px;">
  <p style="font-size: 14px; line-height: 1.2; word-break: break-word; text-align: center; mso-line-height-alt: 17px; margin: 0;"><strong>Greatings From BoleTo</strong></p>
  </div>
  </div>
  <!--[if mso]></td></tr></table><![endif]-->
  <!--[if (!mso)&(!IE)]><!-->
  </div>
  <!--<![endif]-->
  </div>
  </div>
  <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
  <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
  </div>
  </div>
  </div>
  <div style="background-color:transparent;">
  <div class="block-grid" style="min-width: 320px; max-width: 680px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: #26282c;">
  <div style="border-collapse: collapse;display: table;width: 100%;background-color:#26282c;">
  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:680px"><tr class="layout-full-width" style="background-color:#26282c"><![endif]-->
  <!--[if (mso)|(IE)]><td align="center" width="680" style="background-color:#26282c;width:680px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:0px;"><![endif]-->
  <div class="col num12" style="min-width: 320px; max-width: 680px; display: table-cell; vertical-align: top; width: 680px;">
  <div class="col_cont" style="width:100% !important;">
  <!--[if (!mso)&(!IE)]><!-->
  <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:0px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;">
  <!--<![endif]-->
  <table border="0" cellpadding="0" cellspacing="0" class="divider" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top" width="100%">
  <tbody>
  <tr style="vertical-align: top;" valign="top">
  <td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px;" valign="top">
  <table align="center" border="0" cellpadding="0" cellspacing="0" class="divider_content" height="55" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid transparent; height: 55px; width: 100%;" valign="top" width="100%">
  <tbody>
  <tr style="vertical-align: top;" valign="top">
  <td height="55" style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top"><span></span></td>
  </tr>
  </tbody>
  </table>
  </td>
  </tr>
  </tbody>
  </table>
  <div align="center" class="img-container center autowidth" style="padding-right: 0px;padding-left: 0px;">
  <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr style="line-height:0px"><td style="padding-right: 0px;padding-left: 0px;" align="center"><![endif]--><img align="center" alt="Logo" border="0" class="center autowidth" src="https://firebasestorage.googleapis.com/v0/b/prime-burner-278916.appspot.com/o/logo.png?alt=media&token=18e58020-92db-4654-8257-a1de0a46c292" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; width: 100%; max-width: 166px; display: block;" title="Logo" width="166"/>
  <!--[if mso]></td></tr></table><![endif]-->
  </div>
  <table border="0" cellpadding="0" cellspacing="0" class="divider" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top" width="100%">
  <tbody>
  <tr style="vertical-align: top;" valign="top">
  <td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px;" valign="top">
  <table align="center" border="0" cellpadding="0" cellspacing="0" class="divider_content" height="55" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid transparent; height: 55px; width: 100%;" valign="top" width="100%">
  <tbody>
  <tr style="vertical-align: top;" valign="top">
  <td height="55" style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top"><span></span></td>
  </tr>
  </tbody>
  </table>
  </td>
  </tr>
  </tbody>
  </table>
  <div align="center" class="img-container center autowidth" style="padding-right: 0px;padding-left: 0px;">
  <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr style="line-height:0px"><td style="padding-right: 0px;padding-left: 0px;" align="center"><![endif]--><img align="center" alt="Thank You. Here is your receipt." border="0" class="center autowidth" src="https://firebasestorage.googleapis.com/v0/b/prime-burner-278916.appspot.com/o/1609673666292movie06.jpg?alt=media&token=669e3f0d-9eeb-482c-8c9f-bc83d260a1f1" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; width: 100%; max-width: 255px; display: block;" title="Thank You. Here is your receipt." width="255"/>
  
  <!--[if mso]></td></tr></table><![endif]-->
  </div>
  <table border="0" cellpadding="0" cellspacing="0" class="divider" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top" width="100%">
  <tbody>
  <tr style="vertical-align: top;" valign="top">
  <td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px;" valign="top">
  <table align="center" border="0" cellpadding="0" cellspacing="0" class="divider_content" height="40" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid transparent; height: 40px; width: 100%;" valign="top" width="100%">
  <tbody>
  <tr style="vertical-align: top;" valign="top">
  <td height="40" style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top"><span></span></td>
  </tr>
  </tbody>
  </table>
  </td>
  </tr>
  </tbody>
  </table>
  <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 0px; padding-bottom: 10px; font-family: Georgia, serif"><![endif]-->
  <div style="color:#ffc600;font-family:Merriwheater, Georgia, serif;line-height:1.2;padding-top:0px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
  <div style="line-height: 1.2; font-size: 12px; color: #ffc600; font-family: Merriwheater, Georgia, serif; mso-line-height-alt: 14px;">
  <p style="font-size: 20px; line-height: 1.2; word-break: break-word; text-align: center; mso-line-height-alt: 24px; margin: 0;"><span style="font-size: 20px;">Enjoying movie </span></p>
  </div>
  </div>
  <!--[if mso]></td></tr></table><![endif]-->
  <div align="center" class="button-container" style="padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
  <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-spacing: 0; border-collapse: collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;"><tr><td style="padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px" align="center"><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="http://www.example.com" style="height:31.5pt; width:155.25pt; v-text-anchor:middle;" arcsize="10%" stroke="false" fillcolor="#ffc600"><w:anchorlock/><v:textbox inset="0,0,0,0"><center style="color:#000000; font-family:Georgia, serif; font-size:16px"><![endif]--><button onClick="javascript:window.print();" style="-webkit-text-size-adjust: none; text-decoration: none; display: inline-block; color: #000000; background-color: #ffc600; border-radius: 4px; -webkit-border-radius: 4px; -moz-border-radius: 4px; width: auto; width: auto; border-top: 1px solid #ffc600; border-right: 1px solid #ffc600; border-bottom: 1px solid #ffc600; border-left: 1px solid #ffc600; padding-top: 5px; padding-bottom: 5px; font-family: Merriwheater, Georgia, serif; text-align: center; mso-border-alt: none; word-break: keep-all;" target="_blank"><span style="padding-left:25px;padding-right:30px;font-size:16px;display:inline-block;"><span style="font-size: 16px; line-height: 2; word-break: break-word; mso-line-height-alt: 32px;">Download Ticket</span></span></button>
  <!--[if mso]></center></v:textbox></v:roundrect></td></tr></table><![endif]-->
  </div>
  <!--[if (!mso)&(!IE)]><!-->
  </div>
  <!--<![endif]-->
  </div>
  </div>
  <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
  <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
  </div>
  </div>
  </div>
  <div style="background-color:transparent;">
  <div class="block-grid four-up no-stack" style="min-width: 320px; max-width: 680px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: #ffc600;">
  <div style="border-collapse: collapse;display: table;width: 100%;background-color:#ffc600;">
  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:680px"><tr class="layout-full-width" style="background-color:#ffc600"><![endif]-->
  <!--[if (mso)|(IE)]><td align="center" width="170" style="background-color:#ffc600;width:170px; border-top: 0px solid transparent; border-left: 0px solid #26282C; border-bottom: 0px solid transparent; border-right: 0px solid #26282C;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
  <div class="col num3" style="display: table-cell; vertical-align: top; max-width: 320px; min-width: 168px; width: 170px;">
  <div class="col_cont" style="width:100% !important;">
  <!--[if (!mso)&(!IE)]><!-->
  <div style="border-top:0px solid transparent; border-left:0px solid #26282C; border-bottom:0px solid transparent; border-right:0px solid #26282C; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
  <!--<![endif]-->
  <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top: 10px; padding-bottom: 10px; font-family: Georgia, serif"><![endif]-->
  <div style="color:#555555;font-family:Merriwheater, Georgia, serif;line-height:1.2;padding-top:10px;padding-right:0px;padding-bottom:10px;padding-left:0px;">
  <div style="font-size: 12px; line-height: 1.2; color: #555555; font-family: Merriwheater, Georgia, serif; mso-line-height-alt: 14px;">
  <p style="font-size: 14px; line-height: 1.2; word-break: break-word; text-align: left; mso-line-height-alt: 17px; margin: 0;"><strong><span style="font-size: 16px;">Movie</span></strong></p>
  </div>
  </div>
  <!--[if mso]></td></tr></table><![endif]-->
  <!--[if (!mso)&(!IE)]><!-->
  </div>
  <!--<![endif]-->
  </div>
  </div>
  <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
  <!--[if (mso)|(IE)]></td><td align="center" width="170" style="background-color:#ffc600;width:170px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 1px solid #E3B305;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
  <div class="col num3" style="display: table-cell; vertical-align: top; max-width: 320px; min-width: 168px; width: 169px;">
  <div class="col_cont" style="width:100% !important;">
  <!--[if (!mso)&(!IE)]><!-->
  <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:1px solid #E3B305; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
  <!--<![endif]-->
  <table border="0" cellpadding="0" cellspacing="0" class="divider" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top" width="100%">
  <tbody>
  <tr style="vertical-align: top;" valign="top">
  <td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px;" valign="top">
  <table align="center" border="0" cellpadding="0" cellspacing="0" class="divider_content" height="15" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid transparent; height: 15px; width: 100%;" valign="top" width="100%">
  <tbody>
  <tr style="vertical-align: top;" valign="top">
  <td height="15" style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top"><span></span></td>
  </tr>
  </tbody>
  </table>
  </td>
  </tr>
  </tbody>
  </table>
  <!--[if (!mso)&(!IE)]><!-->
  </div>
  <!--<![endif]-->
  </div>
  </div>
  <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
  <!--[if (mso)|(IE)]></td><td align="center" width="170" style="background-color:#ffc600;width:170px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
  <div class="col num3" style="display: table-cell; vertical-align: top; max-width: 320px; min-width: 168px; width: 170px;">
  <div class="col_cont" style="width:100% !important;">
  <!--[if (!mso)&(!IE)]><!-->
  <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
  <!--<![endif]-->
  <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top: 10px; padding-bottom: 10px; font-family: Georgia, serif"><![endif]-->
  <div style="color:#555555;font-family:Merriwheater, Georgia, serif;line-height:1.2;padding-top:10px;padding-right:0px;padding-bottom:10px;padding-left:0px;">
  <div style="font-size: 12px; line-height: 1.2; color: #555555; font-family: Merriwheater, Georgia, serif; mso-line-height-alt: 14px;">
  <p style="font-size: 14px; line-height: 1.2; text-align: center; word-break: break-word; mso-line-height-alt: 17px; margin: 0;"><strong><span style="font-size: 16px;">Tickets</span></strong></p>
  </div>
  </div>
  <!--[if mso]></td></tr></table><![endif]-->
  <!--[if (!mso)&(!IE)]><!-->
  </div>
  <!--<![endif]-->
  </div>
  </div>
  <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
  <!--[if (mso)|(IE)]></td><td align="center" width="170" style="background-color:#ffc600;width:170px; border-top: 0px solid transparent; border-left: 1px solid #E3B305; border-bottom: 0px solid transparent; border-right: 0px solid #26282C;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
  <div class="col num3" style="display: table-cell; vertical-align: top; max-width: 320px; min-width: 168px; width: 169px;">
  <div class="col_cont" style="width:100% !important;">
  <!--[if (!mso)&(!IE)]><!-->
  <div style="border-top:0px solid transparent; border-left:1px solid #E3B305; border-bottom:0px solid transparent; border-right:0px solid #26282C; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
  <!--<![endif]-->
  <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top: 10px; padding-bottom: 10px; font-family: Georgia, serif"><![endif]-->
  <div style="color:#555555;font-family:Merriwheater, Georgia, serif;line-height:1.2;padding-top:10px;padding-right:0px;padding-bottom:10px;padding-left:0px;">
  <div style="font-size: 12px; line-height: 1.2; color: #555555; font-family: Merriwheater, Georgia, serif; mso-line-height-alt: 14px;">
  <p style="font-size: 14px; line-height: 1.2; word-break: break-word; text-align: center; mso-line-height-alt: 17px; margin: 0;"><strong><span style="font-size: 16px;">Price</span></strong></p>
  </div>
  </div>
  <!--[if mso]></td></tr></table><![endif]-->
  <!--[if (!mso)&(!IE)]><!-->
  </div>
  <!--<![endif]-->
  </div>
  </div>
  <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
  <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
  </div>
  </div>
  </div>
  <div style="background-color:transparent;">
  <div class="block-grid" style="min-width: 320px; max-width: 680px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: #3e434d;">
  <div style="border-collapse: collapse;display: table;width: 100%;background-color:#3e434d;">
  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:680px"><tr class="layout-full-width" style="background-color:#3e434d"><![endif]-->
  <!--[if (mso)|(IE)]><td align="center" width="680" style="background-color:#3e434d;width:680px; border-top: 0px solid transparent; border-left: 0px solid #26282C; border-bottom: 0px solid transparent; border-right: 0px solid #26282C;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:0px;"><![endif]-->
  <div class="col num12" style="min-width: 320px; max-width: 680px; display: table-cell; vertical-align: top; width: 680px;">
  <div class="col_cont" style="width:100% !important;">
  <!--[if (!mso)&(!IE)]><!-->
  <div style="border-top:0px solid transparent; border-left:0px solid #26282C; border-bottom:0px solid transparent; border-right:0px solid #26282C; padding-top:0px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;">
  <!--<![endif]-->
  <table border="0" cellpadding="0" cellspacing="0" class="divider" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top" width="100%">
  <tbody>
  <tr style="vertical-align: top;" valign="top">
  <td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 5px; padding-right: 5px; padding-bottom: 5px; padding-left: 5px;" valign="top">
  <table align="center" border="0" cellpadding="0" cellspacing="0" class="divider_content" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 2px solid #5F6571; width: 100%;" valign="top" width="100%">
  <tbody>
  <tr style="vertical-align: top;" valign="top">
  <td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top"><span></span></td>
  </tr>
  </tbody>
  </table>
  </td>
  </tr>
  </tbody>
  </table>
  <!--[if (!mso)&(!IE)]><!-->
  </div>
  <!--<![endif]-->
  </div>
  </div>
  <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
  <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
  </div>
  </div>
  </div>
  <div style="background-color:transparent;">
  <div class="block-grid four-up no-stack" style="min-width: 320px; max-width: 680px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: #3e434d;">
  <div style="border-collapse: collapse;display: table;width: 100%;background-color:#3e434d;">
  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:680px"><tr class="layout-full-width" style="background-color:#3e434d"><![endif]-->
  <!--[if (mso)|(IE)]><td align="center" width="170" style="background-color:#3e434d;width:170px; border-top: 0px solid transparent; border-left: 0px solid #26282C; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
  <div class="col num3" style="display: table-cell; vertical-align: top; max-width: 320px; min-width: 168px; width: 170px;">
  <div class="col_cont" style="width:100% !important;">
  <!--[if (!mso)&(!IE)]><!-->
  <div style="border-top:0px solid transparent; border-left:0px solid #26282C; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
  <!--<![endif]-->
  <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top: 25px; padding-bottom: 30px; font-family: serif"><![endif]-->
  <div style="color:#555555;font-family:'Merriwheater', 'Georgia', serif;line-height:1.2;padding-top:25px;padding-right:0px;padding-bottom:30px;padding-left:0px;">
  <div style="font-size: 12px; line-height: 1.2; font-family: 'Merriwheater', 'Georgia', serif; color: #555555; mso-line-height-alt: 14px;">
  <p style="font-size: 16px; line-height: 1.2; word-break: break-word; font-family: Merriwheater, Georgia, serif; mso-line-height-alt: 19px; margin: 0;"><span style="color: #ffffff; font-size: 16px;">`+ singlemovie.moviename + `</span><br/><span style="color: #ffffff; font-size: 16px;">Time:-` + singletheaterscreen.screen_time + `</span><br/><span style="color: #ffffff; font-size: 16px;">Date:-` + singletheaterscreen.start_date + `</span><br/><span style="color: #ffffff; font-size: 16px;">Seats:-` + lk + `</span></p>
  </div>
  </div>
  <!--[if mso]></td></tr></table><![endif]-->
  <!--[if (!mso)&(!IE)]><!-->
  </div>
  <!--<![endif]-->
  </div>
  </div>
  <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
  <!--[if (mso)|(IE)]></td><td align="center" width="170" style="background-color:#3e434d;width:170px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
  <div class="col num3" style="display: table-cell; vertical-align: top; max-width: 320px; min-width: 168px; width: 170px;">
  <div class="col_cont" style="width:100% !important;">
  <!--[if (!mso)&(!IE)]><!-->
  <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
  <!--<![endif]-->
  <table border="0" cellpadding="0" cellspacing="0" class="divider" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top" width="100%">
  <tbody>
  <tr style="vertical-align: top;" valign="top">
  <td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px;" valign="top">
  <table align="center" border="0" cellpadding="0" cellspacing="0" class="divider_content" height="40" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid transparent; height: 40px; width: 100%;" valign="top" width="100%">
  <tbody>
  <tr style="vertical-align: top;" valign="top">
  <td height="40" style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top"><span></span></td>
  </tr>
  </tbody>
  </table>
  </td>
  </tr>
  </tbody>
  </table>
  <!--[if (!mso)&(!IE)]><!-->
  </div>
  <!--<![endif]-->
  </div>
  </div>
  <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
  <!--[if (mso)|(IE)]></td><td align="center" width="170" style="background-color:#3e434d;width:170px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
  <div class="col num3" style="display: table-cell; vertical-align: top; max-width: 320px; min-width: 168px; width: 170px;">
  <div class="col_cont" style="width:100% !important;">
  <!--[if (!mso)&(!IE)]><!-->
  <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
  <!--<![endif]-->
  <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top: 30px; padding-bottom: 30px; font-family: Georgia, serif"><![endif]-->
  <div style="color:#555555;font-family:Merriwheater, Georgia, serif;line-height:1.2;padding-top:30px;padding-right:0px;padding-bottom:30px;padding-left:0px;">
  <div style="font-size: 12px; line-height: 1.2; color: #555555; font-family: Merriwheater, Georgia, serif; mso-line-height-alt: 14px;">
  <p style="font-size: 16px; line-height: 1.2; word-break: break-word; text-align: center; mso-line-height-alt: 19px; margin: 0;"><span style="color: #ffffff; font-size: 16px;">`+ r1.length + `</span></p>
  </div>
  </div>
  <!--[if mso]></td></tr></table><![endif]-->
  <!--[if (!mso)&(!IE)]><!-->
  </div>
  <!--<![endif]-->
  </div>
  </div>
  <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
  <!--[if (mso)|(IE)]></td><td align="center" width="170" style="background-color:#3e434d;width:170px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid #26282C;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
  <div class="col num3" style="display: table-cell; vertical-align: top; max-width: 320px; min-width: 168px; width: 170px;">
  <div class="col_cont" style="width:100% !important;">
  <!--[if (!mso)&(!IE)]><!-->
  <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid #26282C; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
  <!--<![endif]-->
  <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top: 30px; padding-bottom: 30px; font-family: Georgia, serif"><![endif]-->
  <div style="color:#555555;font-family:Merriwheater, Georgia, serif;line-height:1.2;padding-top:30px;padding-right:0px;padding-bottom:30px;padding-left:0px;">
  <div style="font-size: 12px; line-height: 1.2; color: #555555; font-family: Merriwheater, Georgia, serif; mso-line-height-alt: 14px;">
  <p style="font-size: 16px; line-height: 1.2; word-break: break-word; text-align: center; mso-line-height-alt: 19px; margin: 0;"><span style="color: #ffffff; font-size: 16px;">&#8377;`+ p + `</span></p>
  </div>
  </div>
  <!--[if mso]></td></tr></table><![endif]-->
  <!--[if (!mso)&(!IE)]><!-->
  </div>
  <!--<![endif]-->
  </div>
  </div>
  <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
  <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
  </div>
  </div>
  </div>
  <div style="background-color:transparent;">
  <div class="block-grid" style="min-width: 320px; max-width: 680px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: #3e434d;">
  <div style="border-collapse: collapse;display: table;width: 100%;background-color:#3e434d;">
  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:680px"><tr class="layout-full-width" style="background-color:#3e434d"><![endif]-->
  <!--[if (mso)|(IE)]><td align="center" width="680" style="background-color:#3e434d;width:680px; border-top: 0px solid transparent; border-left: 0px solid #26282C; border-bottom: 0px solid transparent; border-right: 0px solid #26282C;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:0px;"><![endif]-->
  <div class="col num12" style="min-width: 320px; max-width: 680px; display: table-cell; vertical-align: top; width: 680px;">
  <div class="col_cont" style="width:100% !important;">
  <!--[if (!mso)&(!IE)]><!-->
  <div style="border-top:0px solid transparent; border-left:0px solid #26282C; border-bottom:0px solid transparent; border-right:0px solid #26282C; padding-top:0px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;">
  <!--<![endif]-->
  <table border="0" cellpadding="0" cellspacing="0" class="divider" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top" width="100%">
  <tbody>
  <tr style="vertical-align: top;" valign="top">
  <td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 5px; padding-right: 5px; padding-bottom: 5px; padding-left: 5px;" valign="top">
  <table align="center" border="0" cellpadding="0" cellspacing="0" class="divider_content" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 2px solid #5F6571; width: 100%;" valign="top" width="100%">
  <tbody>
  <tr style="vertical-align: top;" valign="top">
  <td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top"><span></span></td>
  </tr>
  </tbody>
  </table>
  </td>
  </tr>
  </tbody>
  </table>
  <!--[if (!mso)&(!IE)]><!-->
  </div>
  <!--<![endif]-->
  </div>
  </div>
  <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
  <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
  </div>
  </div>
  </div>
  <div style="background-color:transparent;">
  <div class="block-grid" style="min-width: 320px; max-width: 680px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: #26282c;">
  <div style="border-collapse: collapse;display: table;width: 100%;background-color:#26282c;">
  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:680px"><tr class="layout-full-width" style="background-color:#26282c"><![endif]-->
  <!--[if (mso)|(IE)]><td align="center" width="680" style="background-color:#26282c;width:680px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:0px;"><![endif]-->
  <div class="col num12" style="min-width: 320px; max-width: 680px; display: table-cell; vertical-align: top; width: 680px;">
  <div class="col_cont" style="width:100% !important;">
  <!--[if (!mso)&(!IE)]><!-->
  <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:0px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;">
  <!--<![endif]-->
  <table cellpadding="0" cellspacing="0" class="social_icons" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt;" valign="top" width="100%">
  <tbody>
  <tr style="vertical-align: top;" valign="top">
  <td style="word-break: break-word; vertical-align: top; padding-top: 15px; padding-right: 15px; padding-bottom: 15px; padding-left: 15px;" valign="top">
  <table align="center" cellpadding="0" cellspacing="0" class="social_table" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-tspace: 0; mso-table-rspace: 0; mso-table-bspace: 0; mso-table-lspace: 0;" valign="top">
  <tbody>
  <tr align="center" style="vertical-align: top; display: inline-block; text-align: center;" valign="top">
  <td style="word-break: break-word; vertical-align: top; padding-bottom: 0; padding-right: 7.5px; padding-left: 7.5px;" valign="top"><a href="https://www.facebook.com/" target="_blank"><img alt="Facebook" height="32" src="https://firebasestorage.googleapis.com/v0/b/prime-burner-278916.appspot.com/o/facebook2x.png?alt=media&token=cc837126-030d-4151-a88c-25bb449e3711" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; display: block;" title="facebook" width="32"/></a></td>
  <td style="word-break: break-word; vertical-align: top; padding-bottom: 0; padding-right: 7.5px; padding-left: 7.5px;" valign="top"><a href="https://www.twitter.com/" target="_blank"><img alt="Twitter" height="32" src="https://firebasestorage.googleapis.com/v0/b/prime-burner-278916.appspot.com/o/twitter2x.png?alt=media&token=cbae340e-75b8-4a66-ac16-f3c9cb21612e" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; display: block;" title="twitter" width="32"/></a></td>
  <td style="word-break: break-word; vertical-align: top; padding-bottom: 0; padding-right: 7.5px; padding-left: 7.5px;" valign="top"><a href="https://www.linkedin.com/" target="_blank"><img alt="Linkedin" height="32" src="https://firebasestorage.googleapis.com/v0/b/prime-burner-278916.appspot.com/o/linkedin2x.png?alt=media&token=96bb5abd-0e6d-4f2a-aa3b-cca2ebe792d6" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; display: block;" title="linkedin" width="32"/></a></td>
  <td style="word-break: break-word; vertical-align: top; padding-bottom: 0; padding-right: 7.5px; padding-left: 7.5px;" valign="top"><a href="https://www.instagram.com/" target="_blank"><img alt="Instagram" height="32" src="https://firebasestorage.googleapis.com/v0/b/prime-burner-278916.appspot.com/o/instagram2x.png?alt=media&token=691348bb-9dab-4af3-adfe-d26ea57b943f" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; display: block;" title="instagram" width="32"/></a></td>
  </tr>
  </tbody>
  </table>
  </td>
  </tr>
  </tbody>
  </table>
  <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 5px; padding-left: 5px; padding-top: 5px; padding-bottom: 5px; font-family: Georgia, serif"><![endif]-->
  <div style="color:#393d47;font-family:Merriwheater, Georgia, serif;line-height:1.2;padding-top:5px;padding-right:5px;padding-bottom:5px;padding-left:5px;">
  <div style="line-height: 1.2; font-size: 12px; color: #393d47; font-family: Merriwheater, Georgia, serif; mso-line-height-alt: 14px;">
  <p style="font-size: 14px; line-height: 1.2; word-break: break-word; text-align: center; mso-line-height-alt: 17px; margin: 0;"><span style="color: #b6becf;">© 2020 Bole-TO | All rights reserved.</span></p>
  </div>
  </div>
  <!--[if mso]></td></tr></table><![endif]-->
  <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 5px; padding-left: 5px; padding-top: 5px; padding-bottom: 5px; font-family: Georgia, serif"><![endif]-->
  <div style="color:#393d47;font-family:Merriwheater, Georgia, serif;line-height:1.2;padding-top:5px;padding-right:5px;padding-bottom:5px;padding-left:5px;">
  <div style="line-height: 1.2; font-size: 12px; color: #393d47; font-family: Merriwheater, Georgia, serif; mso-line-height-alt: 14px;">
  <p style="font-size: 14px; line-height: 1.2; word-break: break-word; text-align: center; mso-line-height-alt: 17px; margin: 0;"><span style="color: #b6becf;">Surat-395004 Gujarat</span></p>
  </div>
  </div>
  <!--[if mso]></td></tr></table><![endif]-->
  <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 20px; padding-left: 20px; padding-top: 20px; padding-bottom: 20px; font-family: Georgia, serif"><![endif]-->
  <div style="color:#C0C0C0;font-family:Merriwheater, Georgia, serif;line-height:1.2;padding-top:20px;padding-right:20px;padding-bottom:20px;padding-left:20px;">
  <div style="color: #C0C0C0; font-size: 12px; line-height: 1.2; font-family: Merriwheater, Georgia, serif; mso-line-height-alt: 14px;">
  <p style="font-size: 12px; line-height: 1.2; text-align: center; word-break: break-word; mso-line-height-alt: 14px; margin: 0;"><span style="color: #b6becf;">Changed your mind? You can <span style="font-size: 12px;"><a href="http://www.example.com" rel="noopener" style="text-decoration: underline; color: #b6becf;" target="_blank">unsubscribe</a></span> at any time.</span></p>
  </div>
  </div>
  <!--[if mso]></td></tr></table><![endif]-->
  <table border="0" cellpadding="0" cellspacing="0" class="divider" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top" width="100%">
  <tbody>
  <tr style="vertical-align: top;" valign="top">
  <td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px;" valign="top">
  <table align="center" border="0" cellpadding="0" cellspacing="0" class="divider_content" height="60" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid transparent; height: 60px; width: 100%;" valign="top" width="100%">
  <tbody>
  <tr style="vertical-align: top;" valign="top">
  <td height="60" style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top"><span></span></td>
  </tr>
  </tbody>
  </table>
  </td>
  </tr>
  </tbody>
  </table>
  <!--[if (!mso)&(!IE)]><!-->
  </div>
  <!--<![endif]-->
  </div>
  </div>
  <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
  <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
  </div>
  </div>
  </div>
  <div style="background-color:transparent;">
  <div class="block-grid" style="min-width: 320px; max-width: 680px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: #231f20;">
  <div style="border-collapse: collapse;display: table;width: 100%;background-color:#231f20;">
  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:680px"><tr class="layout-full-width" style="background-color:#231f20"><![endif]-->
  <!--[if (mso)|(IE)]><td align="center" width="680" style="background-color:#231f20;width:680px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
  <div class="col num12" style="min-width: 320px; max-width: 680px; display: table-cell; vertical-align: top; width: 680px;">
  <div class="col_cont" style="width:100% !important;">
  <!--[if (!mso)&(!IE)]><!-->
  <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
  <!--<![endif]-->
  <div style="font-size:16px;text-align:center;font-family:Merriwheater, Georgia, serif">
  <div height="40"> </div>
  </div>
  <!--[if (!mso)&(!IE)]><!-->
  </div>
  <!--<![endif]-->
  </div>
  </div>
  <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
  <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
  </div>
  </div>
  </div>
  <div style="background-color:transparent;">
  <div class="block-grid two-up no-stack" style="min-width: 320px; max-width: 680px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: transparent;">
  <div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:680px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
  <!--[if (mso)|(IE)]><td align="center" width="340" style="background-color:transparent;width:340px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:10px; padding-bottom:10px;"><![endif]-->
  <div class="col num6" style="display: table-cell; vertical-align: top; max-width: 320px; min-width: 336px; width: 340px;">
  <div class="col_cont" style="width:100% !important;">
  <!--[if (!mso)&(!IE)]><!-->
  <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:10px; padding-bottom:10px; padding-right: 0px; padding-left: 0px;">
  <!--<![endif]-->
  <div align="right" class="img-container right fixedwidth" style="padding-right: 5px;padding-left: 0px;">
  <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr style="line-height:0px"><td style="padding-right: 5px;padding-left: 0px;" align="right"><![endif]--><a href="https://designedwithbee.com/" style="outline:none" tabindex="-1" target="_blank"> <img align="right" alt="BEEFree.io" border="0" class="right fixedwidth" src="https://firebasestorage.googleapis.com/v0/b/prime-burner-278916.appspot.com/o/bee.png?alt=media&token=7fa40885-a456-475e-8a80-5e54437156b9" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; width: 100%; max-width: 50px; float: none; display: block;" title="BEEFree.io" width="50"/></a>
  <!--[if mso]></td></tr></table><![endif]-->
  </div>
  <!--[if (!mso)&(!IE)]><!-->
  </div>
  <!--<![endif]-->
  </div>
  </div>
  <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
  <!--[if (mso)|(IE)]></td><td align="center" width="340" style="background-color:transparent;width:340px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:10px; padding-bottom:10px;"><![endif]-->
  <div class="col num6" style="display: table-cell; vertical-align: top; max-width: 320px; min-width: 336px; width: 340px;">
  <div class="col_cont" style="width:100% !important;">
  <!--[if (!mso)&(!IE)]><!-->
  <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:10px; padding-bottom:10px; padding-right: 0px; padding-left: 0px;">
  <!--<![endif]-->
  <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 4px; padding-left: 4px; padding-top: 4px; padding-bottom: 4px; font-family: Tahoma, Verdana, sans-serif"><![endif]-->
  <div style="color:#9d9d9d;font-family:'Lato', Tahoma, Verdana, Segoe, sans-serif;line-height:1.2;padding-top:4px;padding-right:4px;padding-bottom:4px;padding-left:4px;">
  <div style="line-height: 1.2; font-size: 12px; font-family: 'Lato', Tahoma, Verdana, Segoe, sans-serif; color: #9d9d9d; mso-line-height-alt: 14px;">
  <p style="font-size: 14px; line-height: 1.2; word-break: break-word; font-family: Lato, Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 17px; margin: 0;"><a href="https://designedwithbee.com/" rel="noopener" style="text-decoration: none; color: #9d9d9d;" target="_blank" title="Made with BEE"><span style="font-size: 12px;">Made with <strong>BEE</strong></span></a></p>
  </div>
  </div>

  </div>
  <!--<![endif]-->
  </div>
  </div>
  
  </div>
  </div>
  </div>
  <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
  </td>
  </tr>
  </tbody>
  </table>
  <!--[if (IE)]></div><![endif]-->
  </body>
  </html>`;
    var mailOptions = {
      from: "otomecacar@gmail.com",
      to: singleuser.email,
      subject: "Bole-To Bookings",
      html: html,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
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

router.get("/getmoviebookings", async (req, res) => {
  try {
    var mbook = await moviebookingtbl
      .find({

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

router.get("/getmoviebookingTheater/:id/:screen_id", async (req, res) => {
  try {
    var Tempbooks = new Array();
    var screens = await screen.findOne({ _id: req.params.screen_id });
    var tscreens = await theater.find({ user_id: req.params.id }).populate("tscreen_id");
    var book = await bookings.find({}).populate("movie_id").populate("user_id");

    for (let r = 0; r < tscreens.length; r++) {
      for (let n = 0; n < book.length; n++) {
        if (tscreens[r].screen_id.toString() == screens._id.toString()) {
          if (book[n].tscreen_id.toString() == tscreens[r]._id.toString()) {
            Tempbooks.push(book[n]);
          }
        }
      }
    }
    res.send(Tempbooks);
  } catch (error) {
    res.send(error.message);
  }
});



module.exports = router;
