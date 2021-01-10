import React, { useEffect } from 'react';
import './css/Home';
import { connect } from 'react-redux';
import { Select } from 'antd';
import { fetchmoviedata, updatemoviedata, singlemovieDataFetch, deletemoviedata } from '../store/action/movieAction';
import { singletscreenrecord } from "../store/action/theaterscreenAction";
import { singlescreenrecord } from '../store/action/screenAction';
import screen_thumb from './assets/images/movie/screen-thumb.png';
import seat01 from "./assets/images/movie/seat01.png";
import seat02 from "./assets/images/movie/seat02.png";
import seat01_booked from "./assets/images/movie/seat01-booked.png";
import {
    Form,
} from 'antd';

const { Option } = Select;


const Movie_seat_Plan = (props) => {
    let seats = new Array();
    // let matrix = new Array().fill(0).map(() => new Array().fill(0));
    let b = 0;
    useEffect(() => {
        console.log(props.match.params.screenid);
        props.singlescreenrecord(props.match.params.screenid)
        props.singlemovieDataFetch(props.match.params.id);
        props.singletscreenrecord(props.match.params.id);
        props.fetchmoviedata();
    }, [props.fetchmoviedata, props.singlemovieDataFetch, props.singlescreenrecord,props.singletscreenrecord])
    const changeMethod = (e, cols) => {
     
        console.log(e);
        console.log(cols);
        if(document.getElementById(`asd/${e}/${cols}`).getAttribute('src') == seat01_booked)
        {
            document.getElementById(`asd/${e}/${cols}`).setAttribute('src', seat01);
            
            // seats.push([e,cols])
            seats.pop([e,cols])
            b = b - props.singletscreen.price;
            document.getElementById("pri").innerHTML = b;
            // matrix[0][0].pop(e,cols);
            document.getElementById("sets").innerHTML = seats;
        }
        else
        {
            
        document.getElementById(`asd/${e}/${cols}`).setAttribute('src', seat01_booked)
        seats.push([e,cols]);
        b = b + props.singletscreen.price;
        // matrix.push(e,cols);
        document.getElementById("sets").innerHTML = seats;
        document.getElementById("pri").innerHTML = b;
        console.log(seats);
        }
    }
    const onebyoneseat = (i, cols) => {
        console.log(i);
        let content1 = [];
        for (let j = 0; j < cols; j++) {
            // console.log(i);
            content1.push(
                <ul class="seat--area">
                    <li class="front-seat">
                        <ul>
                            <li class="single-seat">
                                <img src={seat01} onClick={() => changeMethod(i, j+1)} id={`asd/${i}/${j+1}`} alt="seat" />
                                {/* <input type="hidden" name='asd1' value={i+1} style={{color:"white"}}></input> */}
                                <span class="sit-num" style={{ color: "white" }}>{j + 1}</span>
                            </li>
                        </ul>
                    </li>
                </ul>
            );
        }
        return content1;
    }
    const seatingArrangement = (rows, cols) => {
        let content = [];
        for (let i = 0; i < rows; i++) {
            content.push(
                <ul class="seat-area">
                    <li class="seat-line">
                        <span style={{ color: "white" }}>A</span>
                        {onebyoneseat(i + 1, cols)}
                        <span style={{ color: "white" }}>A</span>
                    </li>
                </ul>

            );
        }
        return content;
    }
    const AllSeatAvailable = () => {
        const { _id, rows, cols } = props.singlescreen;
        return (
            seatingArrangement(rows, cols)
        )
    }
    const checkout = ()=>{
        console.log(b);
        console.log(seats);
        props.history.replace("/checkout/"+b+"/"+seats+"/"+props.singletscreen._id);
    }
    return (
        <>
            <section class="details-banner hero-area bg_img seat-plan-banner" data-background="assets/images/banner/banner04.jpg">
                <div class="container">
                    <div class="details-banner-wrapper">
                        <div class="details-banner-content style-two">
                            <h3 class="title" style={{ color: "white", fontFamily: "auto", textTransform: "uppercase" }}>Theater Name</h3>
                            <div class="tags" style={{ color: "white", fontFamily: "auto", textTransform: "uppercase" }}>
                                <a href="#0">Surat City</a>
                                <a href="#0">Movie Name</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ==========Banner-Section========== -->

    <!-- ==========Page-Title========== --> */}
            <section class="page-title bg-one" style={{ color: "white", fontFamily: "auto", textTransform: "uppercase" }}>
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
                        <div class="item" style={{ color: "white", fontFamily: "auto", textTransform: "uppercase" }}>
                            <h5 class="title" style={{ color: "white", fontFamily: "auto", textTransform: "uppercase" }}>05:00</h5>
                            <p>Mins Left</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ==========Page-Title========== -->

    <!-- ==========Movie-Section========== --> */}
            <div class="seat-plan-section padding-bottom padding-top">
                <div class="container">
                    <div class="screen-area">
                        <h4 class="screen" style={{ color: "white", fontFamily: "auto", textTransform: "uppercase" }}>screen</h4>
                        <div class="screen-thumb">
                            <img src={screen_thumb} alt="movie" />
                        </div>
                        <h5 class="subtitle">silver plus</h5>
                        <Form name="AddForm">
                            <div class="screen-wrapper">

                                {AllSeatAvailable()}
                            </div>
                        </Form>

                    </div>
                    <div class="proceed-book bg_img" data-background="assets/images/movie/movie-bg-proceed.jpg">
                        <div class="proceed-to-book">
                            <div class="book-item">
                                <span>You have Choosed Seat</span>
                                <h3 class="title" id="sets"></h3>
                            </div>
                            <div class="book-item">
                                <span>total price</span>
                                <h3 class="title" id="pri"></h3>
                            </div>
                            <div class="book-item">
                                <span style={{cursor:'pointer'}} class="custom-button" onClick={()=>checkout()}>Check-Out</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

const mapStateToProps = (state) => ({
    err: state.movieReducer.error,
    Loading: state.movieReducer.loading,
    movies: state.movieReducer.movies,
    singlescreen: state.screenReducer.singlescreen,
    singlemovie: state.movieReducer.singlemovie,
    singletscreen: state.theaterscreenReducer.singletscreen
})

const mapDispatchToProps = dispatch => {
    return {
        fetchmoviedata: () => dispatch(fetchmoviedata()),
        singlescreenrecord: (id) => dispatch(singlescreenrecord(id)),
        deletemoviedata: (_id) => dispatch(deletemoviedata(_id)),
        updatemoviedata: (postdata, put) => dispatch(updatemoviedata(postdata, put)),
        singletscreenrecord: (id) => dispatch(singletscreenrecord(id)),
        singlemovieDataFetch: (id) => dispatch(singlemovieDataFetch(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie_seat_Plan);