import React,{useEffect, useState} from 'react';
import './css/Home';
import {Select} from 'antd';
import { fetchmoviedata, updatemoviedata, singlemovieDataFetch, deletemoviedata } from '../store/action/movieAction';
import { singletscreenrecord } from "../store/action/theaterscreenAction";
import { singlescreenrecord } from '../store/action/screenAction';
import { PayPalButton } from "react-paypal-button-v2";
import { propTypes } from 'react-bootstrap/esm/Image';
import { connect } from 'react-redux';

const {Option} = Select;
     const Index = (props) =>{
        // function sleep(ms) {
        //     return new Promise(resolve => setTimeout(resolve, ms));
        //   }
        const [movie,setmovie] = useState({
            moviename:"",
            movie_language:""
        })
        useEffect(async() => {
            props.singletscreenrecord(props.match.params.movie);
            //  await sleep(2000);
            console.log(props.singletscreen._id)
            if(props.singletscreen._id)
            {
                console.log(props.singletscreen._id)
                setmovie({
                    moviename:props.singletscreen.movie_id.moviename,
                    movie_language:props.singletscreen.movie_id.movie_language
                })
            }

            console.log(props.match.params.movie);
            console.log(props.singletscreen._id);
        },[props.singletscreenrecord,props.singletscreen])
         
     const seatsasd = () =>{
         console.log(props.match.params.seats);
        //  var a = new Array();

        //  for (let i = 0; i < array.length; i++) {
        //      const element = array[i];
             
        //  }
        //  a = props.match.params.seats;
        // a.forEach(function(vals){return <h1>{"["+vals+"]"}</h1>})
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
                    <a href="movie-ticket-plan.html" class="custom-button back-button">
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
                                <span class="info">qwe</span>
                            </li>
                            <li>
                                {/* <h6 class="subtitle"><span>City Walk</span><span>02</span></h6> */}
                                <div class="info"><span>10 SEP TUE, 11:00 PM</span> </div>
                            </li>
                            <li>
                                <h6 class="subtitle mb-0"><span>Your Seats</span><span></span></h6><br/>
                                <h6 style={{color:'white'}}>{seatsasd()}</h6>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <span class="info"><span>price</span><span>&#8377;{props.match.params.price}</span></span>
                                <span class="info"><span>vat</span><span>$15</span></span>
                            </li>
                        </ul>
                    </div>
                    <div class="proceed-area  text-center">
                        <h6 class="subtitle"><span style={{color:"white",fontFamily:"auto",textTransform:"uppercase"}}>Amount Payable</span><span style={{color:"white",fontFamily:"auto",textTransform:"uppercase"}} >&#8377;{props.match.params.price}</span></h6>
                        {/* <a href="#0" class="custom-button back-button">proceed</a> */}
                        <PayPalButton 
                                 class="custom-button back-button"
                                amount={props.match.params.price}
                                // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                                onSuccess={(details, data) => {
                                alert("Transaction completed by " + details.payer.name.given_name);
                                    
                                // OPTIONAL: Call your server to save the transaction
                                return fetch("/paypal-transaction-complete", {
                                    method: "post",
                                    body: JSON.stringify({
                                    orderID: data.orderID
                                    })
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
   
    
    singletscreen: state.theaterscreenReducer.sing
})

const mapDispatchToProps = dispatch => {
    return {
        
        singletscreenrecord: (id) => dispatch(singletscreenrecord(id))
        
    }
}
    export default connect(mapStateToProps,mapDispatchToProps)(Index);