import React, { useEffect, useState } from 'react';
import './css/Home';
import { fetchmoviedata, updatemoviedata, singlemovieDataFetch, deletemoviedata } from '../store/action/movieAction';
import { gettscreen, singletscreenrecord } from "../store/action/theaterscreenAction";
import { getmbooking } from "../store/action/bookingAction";
import { Select, Form } from 'antd';
import { connect } from 'react-redux';
const SingleMovie = (props) => {

    const { form } = Form.useForm();
    const [obj, setMyObj1] = useState({
        _id: "",
        user_id: "",
        movie_id: "",
        screen_id: "",
        screen_time: "",
        start_date: "",
        end_date: "",
        end_time: "",
        price: ""
    })

    useEffect(() => {
        console.log(props.singlemovie)
        // props.singlemovie
        // let tempobj = [...obj];
        // tempdobj[movie_category]= props.s
        // let [obj,setObj] = useState({
        //     _id:props.singlemovie.
        // });
        props.fetchmoviedata();
        props.gettscreen();
        console.log(props.gettscreen)
    }, [props.fetchmoviedata, props.gettscreen])

    const renderTableData1 = (ids) => {
        console.log(props.tscreens);
        return props.tscreens
            .filter(screen => screen.user_id._id == ids)
            .map(({ _id,screen_time,user_id,screen_id }, index) => (<div class="item" key={index} onClick={() => renderSeatBook(user_id._id,screen_id._id,_id)}>
                    {screen_time}
                </div>
            ))
    }

    const renderSeatBook = (user_id,screen_id,_id) =>{
        console.log(screen_id);
        props.getmbooking(_id);
        props.history.replace(`/movie-seat-plan/${user_id}/${screen_id}/${_id}`);
    }

    var mlogo = "";
    var mname = "";
    const renderTableData = () => {
        var a = new Array();
        console.log(props.gettscreen)
        return (props.tscreens.map((tscreens, index) => {
            const { _id, user_id, movie_id, screen_id, screen_time, start_date, end_date, end_time, price } = tscreens
            console.log(user_id);
            console.log(a);
            let content = "";

            if (!a.includes(user_id._id)) {
                if (props.match.params.mid == movie_id._id) {
                    mlogo = movie_id.movie_logo
                    mname = movie_id.moviename
                    console.log(a);
                    a.push(user_id._id)

                    content = (
                        <li>
                            <div class="movie-name">
                                <div class="icons">
                                    <i class="far fa-heart"></i>
                                    <i class="fas fa-heart"></i>
                                </div>
                                <a href="#0" class="name">{user_id.user_name}</a>
                                <div class="location-icon">
                                    <i class="fas fa-map-marker-alt"></i>
                                </div>
                            </div>
                            <div class="movie-schedule">
                                {renderTableData1(user_id._id)}
                            </div>
                        </li>
                    )
                }
            }
            return content
        }))

    }
    return (
        <>
             <section class="details-banner hero-area bg_img seat-plan-banner" data-background="assets/images/banner/banner04.jpg">
        <div class="container">
            <div class="details-banner-wrapper">
                <div class="details-banner-content style-two">
                    <h3 class="title" style={{color:"white",fontFamily:"auto",textTransform:"uppercase"}}>Time Slot</h3>
                    <div class="tags" style={{color:"white",fontFamily:"auto",textTransform:"uppercase"}}>
                        <a href="#0">Surat City</a>
                        <a href="#0">English - 2D</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

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

            <div class="ticket-plan-section padding-bottom padding-top">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-9 mb-5 mb-lg-0">
                            <ul class="seat-plan-wrapper bg-five">
                                {renderTableData()}
                            </ul>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-10">
                            <div class="widget-1 widget-banner">
                                <div class="widget-1-body">
                                    <a href="#0">
                                        <img src={"http://localhost:3001" + mlogo} alt="banner" />
                                        <h1>{mname}</h1>
                                    </a>
                                </div>
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
    singlemovie: state.movieReducer.singlemovie,
    tscreens: state.theaterscreenReducer.tscreens,
    singletscreen: state.theaterscreenReducer.singletscreen
})

const mapDispatchToProps = dispatch => {
    return {
        fetchmoviedata: () => dispatch(fetchmoviedata()),
        deletemoviedata: (_id) => dispatch(deletemoviedata(_id)),
        updatemoviedata: (postdata, put) => dispatch(updatemoviedata(postdata, put)),
        singlemovieDataFetch: (id) => dispatch(singlemovieDataFetch(id)),
        singletscreenrecord: (id) => dispatch(singletscreenrecord(id)),
        gettscreen: () => dispatch(gettscreen()),
        getmbooking:(id)=>dispatch(getmbooking(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleMovie);