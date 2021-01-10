import React, { useEffect, useState } from 'react';
import './css/Home';
import { fetchmoviedata, updatemoviedata, singlemovieDataFetch, deletemoviedata } from '../store/action/movieAction';
import { Select, Form } from 'antd';
import { getAllTheater } from '../store/action/userAction';
import Moment from 'moment';
// import Logo from './assets/images/logo/logo.png';
import first from './assets/images/ticket/ticket-tab01.png';
import second from "./assets/images/ticket/ticket-tab02.png";
import third from "./assets/images/ticket/ticket-tab03.png";
import cinema from './assets/images/ticket/cinema.png';
import city from './assets/images/ticket/city.png';
import date1 from './assets/images/ticket/date.png';
import offer1 from './assets/images/sidebar/offer01.png';
import offer2 from './assets/images/sidebar/offer02.png'
import offer3 from './assets/images/sidebar/offer03.png'
import sidebar01 from './assets/images/sidebar/icons/sidebar01.png';
import sidebar02 from './assets/images/sidebar/icons/sidebar02.png';
import sidebar03 from './assets/images/sidebar/icons/sidebar03.png';
import tomato from './assets/images/movie/tomato.png';
import cake from './assets/images/movie/cake.png';
import heart from './assets/images/icons/heart.png';
import book from './assets/images/icons/book.png';
import playbutton from './assets/images/icons/play-button.png';
import ticket01 from './assets/images/ticket/ticket-bg01.jpg';
import newslater from './assets/images/newslater/newslater-bg01.jpg';
import banner01 from './assets/images/sidebar/banner/banner01.jpg';
import backgroundBanner from './assets/images/banner/banner01.jpg';
import banner02 from './assets/images/sidebar/banner/banner02.jpg';
import movie01 from './assets/images/movie/movie01.jpg';
import movie02 from './assets/images/movie/movie02.jpg';
import movie03 from './assets/images/movie/movie03.jpg';
import event01 from './assets/images/event/event01.jpg';
import event02 from './assets/images/event/event02.jpg';
import event03 from './assets/images/event/event03.jpg';
import sports01 from './assets/images/sports/sports01.jpg';
import sports02 from './assets/images/sports/sports02.jpg';
import sports03 from './assets/images/sports/sports03.jpg';
import videobtn from './assets/images/movie/video-button.png';
import fantasy from './assets/images/movie_category/fantasymovie.jpeg';
import comedy from './assets/images/movie_category/comedymovie.jpg';
import action from './assets/images/movie_category/actionmovie.jpg';
import horror from './assets/images/movie_category/horrormovie.jpg';
import romance from './assets/images/movie_category/romancemovie.jpg';
import mystry from './assets/images/movie_category/mystrymovie.jpg';
// import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import demo from '.';
const { Option } = Select;
const SingleMovie = (props) => {

    const { form } = Form.useForm();
    const [obj, setMyObj1] = useState({
        _id: "",
        moviename: "",
        releasedate: "",
        movie_category: "",
        director_name: "",
        Actors_name: "",
        movie_description: "",
        movie_type: "",
        movie_logo: "",
        movie_status: "",
        booking_status: ""
    })

    useEffect(() => {
        console.log(props.getAllTheater())
        props.getAllTheater()
        props.fetchmoviedata();
        console.log(props.match.params.movie_id);
    }, [props.fetchmoviedata, props.getAllTheater])
    const onmovieclick = async (_id) => {
        await props.singlemovieDataFetch(_id);
        props.history.replace('/singlemovie')
    }

    const popularCinema = () => {
        return props.users.map((users1) => {
            const { _id, cinema_name, city_id } = users1;

            return (
                <li>
                    <h6 className="sub-title">
                        <a href="#0">{cinema_name}</a>
                    </h6>
                    <p style={{ color: "white" }}>{city_id.city_name} city</p>
                </li>
            )
        });
    }

    const renderTableData = () => {
        return props.movies.map((movies, index) => {
            const { _id, moviename, releasedate, movie_category, movie_type, movie_logo, movie_status, booking_status } = movies
            if (movie_type == props.match.params.category) {
                return (
                    <div class="movie-list">
                        <div class="movie-thumb">

                            <img src={"http://localhost:3001" + movie_logo} style={{ cursor: 'pointer' }} alt="movie" onClick={() => onmovieclick(_id)} />

                        </div>
                        <div class="movie-content bg-one">
                            <h5 class="title">
                                <a href="#" onClick={() => onmovieclick(_id)}>{moviename}</a>
                            </h5>
                            <div class="movie-tags" style={{ color: "#72c3f1" }}>
                                <a href="#0" style={{ fontSize: "16px" }}>{movie_type}</a>
                            </div>
                            <div class="release" style={{ color: "#72c3f1" }}>
                                <span style={{ fontSize: "16px" }}> Release Date:- {Moment(releasedate).format("dddd, DD MMM, yyyy")}</span><br></br>
                                <span style={{ fontSize: "16px" }}>  </span>
                            </div>
                            <ul class="movie-rating-percent">
                                <li>
                                    <div class="thumb">
                                        <img src={tomato} alt="movie" />
                                    </div>
                                    <span class="content" style={{ fontSize: "16px", color: "white" }}>Booking Status:- {booking_status == "true" ? <span style={{ color: "#30f90c" }}>Available</span> : <span style={{ color: "#f12b2b" }}>Not Available</span>}</span>
                                </li>
                                <li>
                                    <div class="thumb">
                                        <img src={cake} alt="movie" />
                                    </div>
                                    <span class="content">88%</span>
                                </li>
                            </ul>
                            <div class="book-area">
                                <div class="book-ticket">
                                    <div class="react-item">
                                        <a href="#0">
                                            <div class="thumb">
                                                <img src={heart} alt="icons" />
                                            </div>
                                        </a>
                                    </div>
                                    <div class="react-item mr-auto">
                                        <a href="#0">
                                            <div class="thumb">
                                                <img src={book} alt="icons" />
                                            </div>
                                        </a>
                                    </div>
                                    <div class="react-item">
                                        <a href="#0" class="popup-video">
                                            {booking_status == "true" ? <span><a href={"/singlemovietheater/" + _id} class="custom-button">book tickets</a></span> : <span><button class="custom-button" onClick={() => alert("Temporarily not available booking status Please Waiting .....")}>book tickets</button></span>}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        })
    }
    return (
        <>
            <section class="movie-section padding-top padding-bottom">
                <div class="container">
                    <div class="row flex-wrap-reverse justify-content-center">
                        <div class="col-sm-10 col-md-8 col-lg-3">
                            <div className="widget-1 widget-facility">
                                <div className="widget-1-body">
                                    <ul>
                                        <li>
                                            <a href="#0">
                                                <span className="img"><img src={sidebar01} alt="sidebar" /></span>
                                                <span className="cate">24X7 Care</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#0">
                                                <span className="img"><img src={sidebar02} alt="sidebar" /></span>
                                                <span className="cate">100% Assurance</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#0">
                                                <span className="img"><img src={sidebar03} alt="sidebar" /></span>
                                                <span className="cate">Our Promise</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="widget-1 widget-banner">
                                <div className="widget-1-body">
                                    <a href="#0">
                                        <img src={banner01} alt="banner" />
                                    </a>
                                </div>
                            </div>
                            <div className="widget-1 widget-trending-search">
                                <h4 className="title" style={{ color: "white", textTransform: "uppercase" }}>Trending Cinema</h4>
                                <div className="widget-1-body">
                                    <ul>
                                        {popularCinema()}
                                    </ul>
                                </div>
                            </div>
                            <div className="widget-1 widget-banner">
                                <div className="widget-1-body">
                                    <a href="#0">
                                        <img src={banner02} alt="banner" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-9 mb-50 mb-lg-0">
                            <div class="filter-tab tab">

                                <div class="tab-area">
                                    <div class="tab-item">
                                        <div class="row mb-10 justify-content-center">


                                        </div>
                                    </div>
                                    <div class="tab-item active">
                                        <div class="movie-area mb-10">
                                            {renderTableData()}
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );

}
const mapStateToProps = (state) => ({
    err: state.movieReducer.error,
    Loading: state.movieReducer.loading,
    movies: state.movieReducer.movies,
    singlemovie: state.movieReducer.singlemovie,
    users: state.userReducer.users
})

const mapDispatchToProps = dispatch => {
    return {
        fetchmoviedata: () => dispatch(fetchmoviedata()),
        getAllTheater: () => dispatch(getAllTheater()),
        deletemoviedata: (_id) => dispatch(deletemoviedata(_id)),
        updatemoviedata: (postdata, put) => dispatch(updatemoviedata(postdata, put)),
        singlemovieDataFetch: (id) => dispatch(singlemovieDataFetch(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleMovie);