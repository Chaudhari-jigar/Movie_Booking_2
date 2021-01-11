import React,{useEffect, useState} from 'react';
import './css/Home';
import {Select} from 'antd';
import { fetchmoviedata, updatemoviedata, singlemovieDataFetch, deletemoviedata } from '../store/action/movieAction';
import { singletscreenrecord } from "../store/action/theaterscreenAction";
import { singlescreenrecord } from '../store/action/screenAction';
import { addbooking,getbooking } from "../store/action/bookingAction";
import { PayPalButton } from "react-paypal-button-v2";
import { propTypes } from 'react-bootstrap/esm/Image';
import {login,autoCheckLogin} from '../store/action/userAction';
import { connect } from 'react-redux';
import { Moment} from 'moment';
const {Option} = Select;
     const Index = (props) =>{
        // function sleep(ms) {
        //     return new Promise(resolve => setTimeout(resolve, ms));
        //   }
        function formatAMPM(date) {
            var hours = date.getHours();
            var minutes = date.getMinutes();
            var ampm = hours >= 12 ? 'pm' : 'am';
            hours = hours % 12;
            hours = hours ? hours : 12; // the hour '0' should be '12'
            minutes = minutes < 10 ? '0'+minutes : minutes;
            var strTime = hours + ':' + minutes + ' ' + ampm;
            return strTime;
          }
        const [movie,setmovie] = useState({
            moviename:"",
            movie_language:"",
            movie_date:"",
            movie_time:""
        })
        useEffect(async() => {
            // var today = new Date();
            // var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            console.log(new Date().toJSON().slice(0,10).split('-').reverse().join('-'));
            console.log(formatAMPM(new Date));
            // console.log(Moment(date1.getTime()).format("LT"));
            props.singletscreenrecord(props.match.params.movie);
            //  await sleep(2000);
            console.log(props.singletscreen._id)
            if(props.singletscreen._id)
            {
                console.log(props.singletscreen._id)
                setmovie({
                    moviename:props.singletscreen.movie_id.moviename,
                    movie_language:props.singletscreen.movie_id.movie_languages,
                    movie_date:props.singletscreen.start_date,
                    movie_time:props.singletscreen.screen_time
                })
            }

            console.log(props.match.params.movie);
            console.log(props.singletscreen._id);
        },[props.singletscreenrecord])
        
        const backtoMovieSeat = () => {
            props.history.replace(`/movie-seat-plan/${props.match.params.mid}/${props.match.params.userid}/${props.match.params.screenid}/${props.match.params.id}`);
            // props.history.replace(`movie-seat-plan/5fd82a7e3514ba0688833bc0/5fded54a43ced62cf42c1d6c/5ff27c67eaf0e51930bd1591/5ff27cabeaf0e51930bd1592`);
        }

     const seatsasd = () =>{
         var g="";
         var n="";
         for(let v=0;v<temprows.length;v++)
        {
            switch(temprows[v])
            {
                case 1:
                    n='A'
                    break;
                case 2:
                    n='B'
                    break;
                case 3:
                    n='C'
                    break;
                case 4:
                    n='D'
                    break;
                case 5:
                    n='E'
                    break;
                case 6:
                    n='F'
                    break;
                case 7:
                    n='G'
                    break;
                case 8:
                    n='H'
                    break;
                case 9:
                    n='I'
                    break;
                case 10:
                    n='J'
                    break;
            }
            g += "[";
            g += (n+"-"+[tempcols[v]]);
            g += "]"
        }
        return g;
     }
     var temprows=new Array();
     var tempcols=new Array();
     var kl=0;
     var numStr = props.match.params.seats;
     var nums = Array.from(numStr.split(','),Number);
     console.log(nums);
     var a = nums.length
     for(let pk=0; pk<a; pk++){
         if(kl==0){
             tempcols.push(nums.pop());
             kl=1;
         }else{
             temprows.push(nums.pop());
             kl=0;
         }
     }
     const bookmovie =async () => {
      
            console.log(temprows);
            console.log(tempcols);
            // Imortant Code
            const data = {
                movie_id:props.singletscreen.movie_id,
                theater_id:props.singletscreen._id,
                user_id:props.singleuser._id,
                price:props.match.params.price,
                booking_date:new Date().toJSON().slice(0,10).split('-').reverse().join('-'),
                booking_time:formatAMPM(new Date),
                rows:temprows,
                cols:tempcols
            }
           await props.addbooking(data);
           props.history.replace("/");
     }
      return (
        <>
        <section class="details-banner hero-area bg_img seat-plan-banner" data-background="assets/images/banner/banner04.jpg">
        <div class="container">
            <div class="details-banner-wrapper">
                <div class="details-banner-content style-two">
                    <h3 class="title" style={{color:"white",fontFamily:"auto",textTransform:"uppercase"}}>CheckOut</h3>
                    <div class="tags" style={{color:"white",fontFamily:"auto",textTransform:"uppercase"}}>
                        <a href="#0">Surat City</a>
                        <a href="#0">English - 2D</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- ==========Banner-Section========== -->

    <!-- ==========Page-Title========== --> */}
    <section class="page-title bg-one" style={{color:"white",fontFamily:"auto",textTransform:"uppercase"}}>
        <div class="container">
            <div class="page-title-area">
                <div class="item md-order-1">
                    <a href="" class="custom-button back-button" onClick={() => backtoMovieSeat()}>
                        <i class="flaticon-double-right-arrows-angles"></i>back
                    </a>
                </div>
                <div class="item date-item">
                    <span class="date">MON, SEP 09 2020</span>
                    <select class="select-bar">
                        <option value="sc1">09:40</option>
                        <option value="sc2">13:45</option>
                        <option value="sc3">15:45</option>
                        <option value="sc4">19:50</option>
                    </select>
                </div>
                <div class="item">
                    <h5 class="title">05:00</h5>
                    <p>Mins Left</p>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- ==========Page-Title========== -->

    <!-- ==========Movie-Section========== --> */}
    <div class="movie-facility padding-bottom padding-top" style={{color:"white",fontFamily:"auto",textTransform:"uppercase",backgroundColor:"#001232"}}>
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                    <div class="checkout-widget d-flex flex-wrap align-items-center justify-cotent-between" style={{color:"white",fontFamily:"auto",textTransform:"uppercase"}}>
                        <div class="title-area">
                            <h5 class="title" style={{color:"white",fontFamily:"auto",textTransform:"uppercase"}}>Already a Boleto  Member?</h5>
                            <p style={{color:"white",fontFamily:"auto",textTransform:"uppercase"}}>Sign in to earn points and make booking easier!</p>
                        </div>
                        <a href="#0" class="sign-in-area">
                            <i class="fas fa-user"></i><span>Sign in</span>
                        </a>
                    </div>
                    <div class="checkout-widget checkout-contact">
                        <h5 class="title" style={{color:"white",fontFamily:"auto",textTransform:"uppercase"}}>Share your Contact  Details </h5>
                        <form class="checkout-contact-form">
                            <div class="form-group">
                                <input type="text" placeholder="Full Name" />
                            </div>
                            <div class="form-group">
                                <input type="text" placeholder="Enter your Mail" />
                            </div>
                            <div class="form-group">
                                <input type="text" placeholder="Enter your Phone Number " />
                            </div>
                            <div class="form-group">
                                <input type="submit" value="Continue" class="custom-button" />
                            </div>
                        </form>
                    </div>
                    <div class="checkout-widget checkout-contact">
                        <h5 class="title" style={{color:"white",fontFamily:"auto",textTransform:"uppercase"}}>Promo Code </h5>
                        <form class="checkout-contact-form">
                            <div class="form-group">
                                <input type="text" placeholder="Please enter promo code" />
                            </div>
                            <div class="form-group">
                                <input type="submit" value="Verify" class="custom-button" />
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="booking-summery bg-one">
                        <h4 class="title" style={{color:"white",fontFamily:"auto",textTransform:"uppercase"}}>booking summery</h4>
                        <ul>
                            <li>
                                <h6 class="subtitle" style={{color:"white",fontFamily:"auto"}}>{movie.moviename}</h6>
                                <span class="info">{"Language:-"+movie.movie_language}</span>
                            </li>
                            <li>
                                {/* <h6 class="subtitle"><span>City Walk</span><span>02</span></h6> */}
                                <div class="info"><span>{"Movie Date:-"+movie.movie_date}</span> </div>
                                <div class="info"><span>{"Movie Time:-"+movie.movie_time}</span> </div>
                            </li>
                            <li>
                                <h6 class="subtitle mb-0"><span >Your Seats</span><span></span></h6><br/>
                                <h6 style={{color:'white'}}>{seatsasd()}</h6>
                                <h6 style={{color:'white'}}>{"Total Tickets = "+temprows.length}</h6>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <span class="info"><span>price</span><span>&#8377;{props.match.params.price}</span></span>
                                
                            </li>
                        </ul>
                    </div>
                    <div class="proceed-area  text-center">
                        <h6 class="subtitle"><span style={{color:"white",fontFamily:"auto",textTransform:"uppercase"}}>Amount Payable</span><span style={{color:"white",fontFamily:"auto",textTransform:"uppercase"}} >&#8377;{props.match.params.price}</span></h6>
                        {/* <a href="#0" class="custom-button back-button">proceed</a> */}
                        <PayPalButton
                  class="custom-button back-button"
                  amount={(props.match.params.price)}
                  // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                  onSuccess={(details, data) => {
                    alert(
                      "Transaction completed by " +
                        details.payer.name.given_name
                    );
                    {
                      bookmovie();
                    }
                    // OPTIONAL: Call your server to save the transaction
                    return fetch("/paypal-transaction-complete", {
                      method: "post",
                      body: JSON.stringify({
                        orderID: data.orderID,
                      }),
                    });
                  }}
                />
                    </div>
                </div>
            </div>
        </div>
    </div>
          </>
      );
    }
const mapStateToProps = (state) => ({
    singletscreen: state.theaterscreenReducer.sing,
    bookings:state.bookingReducer.bookings,
    singleuser:state.userReducer.singleuser,
})

const mapDispatchToProps = dispatch => {
    return {
        
    autoCheckLogin:()=>dispatch(autoCheckLogin()),
        singletscreenrecord: (id) => dispatch(singletscreenrecord(id)),
        addbooking:(postdata)=>dispatch(addbooking(postdata)),
        
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Index);
