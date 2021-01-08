import React,{useEffect,useState} from 'react';
import './css/Home';
import {fetchmoviedata,updatemoviedata,singlemovieDataFetch,deletemoviedata} from '../store/action/movieAction';
import { gettscreen,singletscreenrecord } from "../store/action/theaterscreenAction";
import {Select,Form} from 'antd';
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
import ticket01 from './assets/images/ticket/ticket-bg01.jpg';
import experi from './assets/images/ticket/exp.png';
import newslater from './assets/images/newslater/newslater-bg01.jpg';
import banner01 from './assets/images/sidebar/banner/banner01.jpg';
import backgroundBanner from './assets/images/banner/banner01.jpg';
import banner02 from './assets/images/sidebar/banner/banner01.jpg';
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
import Helmet from 'react-helmet';
import {connect} from 'react-redux';
import demo from '.';
const {Option} = Select;
     const SingleMovie = (props) =>{
        
        const {form} =Form.useForm();
        const [obj,setMyObj1]= useState({
            _id: "",
            user_id: "",
            movie_id: "",
            screen_id:"",
            screen_time:"",
            start_date:"",
            end_date:"",
            end_time:"",
            price:""
        })

        useEffect(()=>{
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
        },[props.fetchmoviedata,props.gettscreen])
        const renderTableData1 = (ids)=>
        {
            return props.tscreens
            .filter( screen => screen.user_id._id == ids )
            .map( ({ screen_time },index)=> (
                    
                        <div class="item" key={index}>
                            {screen_time}
                         </div>
            ))
        }
        var mlogo = "";
        var mname = "";
        const renderTableData = ()=>
        {
            var a = new Array();
            console.log(props.gettscreen)
            return(props.tscreens.map((tscreens,index)=>{
                const {_id,user_id,movie_id,screen_id,screen_time,start_date,end_date,end_time,price} = tscreens
                console.log(user_id);
                console.log(a);
                let content = "";

                if(!a.includes(user_id._id))
                {
                    if(props.match.params.mid == movie_id._id)
                    {
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
        return(
            <>
        <section class="window-warning inActive">
        <div class="lay"></div>
        <div class="warning-item">
            <h6 class="subtitle">Welcome! </h6>
            <h4 class="title">Select Your Seats</h4>
            <div class="thumb">
                <img src="assets/images/movie/seat-plan.png" alt="movie"/>
            </div>
            <a href="movie-seat-plan.html" class="custom-button seatPlanButton">Seat Plans<i class="fas fa-angle-right"></i></a>
        </div>
    </section>
    
    <section class="details-banner hero-area bg_img" data-background="assets/images/banner/banner03.jpg">
        <div class="container">
            <div class="details-banner-wrapper">
                <div class="details-banner-content">
                    <h3 class="title">{mname}</h3>
                    <div class="tags">
                        <a href="#0">English</a>
                        <a href="#0">Hindi</a>
                        <a href="#0">Telegu</a>
                        <a href="#0">Tamil</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
   
    <section class="book-section bg-one">
        <div class="container">
            <form class="ticket-search-form two">
                <div class="form-group">
                    <div class="thumb">
                        <img src={city} alt="ticket"/>
                    </div>
                    <span class="type">city</span>
                    <select class="select-bar">
                        <option value="london">London</option>
                        <option value="dhaka">dhaka</option>
                        <option value="rosario">rosario</option>
                        <option value="madrid">madrid</option>
                        <option value="koltaka">kolkata</option>
                        <option value="rome">rome</option>
                        <option value="khoksa">khoksa</option>
                    </select>
                </div>
                <div class="form-group">
                    <div class="thumb">
                        <img src={date1} alt="ticket"/>
                    </div>
                    <span class="type">date</span>
                    <select class="select-bar">
                        <option value="26-12-19">23/10/2020</option>
                        <option value="26-12-19">24/10/2020</option>
                        <option value="26-12-19">25/10/2020</option>
                        <option value="26-12-19">26/10/2020</option>
                    </select>
                </div>
                <div class="form-group">
                    <div class="thumb">
                        <img src={cinema} alt="ticket"/>
                    </div>
                    <span class="type">cinema</span>
                    <select class="select-bar">
                        <option value="Awaken">Awaken</option>
                        <option value="Venus">Venus</option>
                        <option value="wanted">wanted</option>
                        <option value="joker">joker</option>
                        <option value="fid">fid</option>
                        <option value="kidio">kidio</option>
                        <option value="mottus">mottus</option>
                    </select>
                </div>
                <div class="form-group">
                    <div class="thumb">
                        <img src={experi} alt="ticket"/>
                    </div>
                    <span class="type">Experience</span>
                    <select class="select-bar">
                        <option value="English-2D">English-2D</option>
                        <option value="English-3D">English-3D</option>
                        <option value="Hindi-2D">Hindi-2D</option>
                        <option value="Hindi-3D">Hindi-3D</option>
                        <option value="Telegu-2D">Telegu-2D</option>
                        <option value="Telegu-3D">Telegu-3D</option>
                    </select>
                </div>
            </form>
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
                                <img src={"http://localhost:3001"+mlogo} alt="banner"/>
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
    const mapStateToProps =  (state) => ({
        err:state.movieReducer.error,
        Loading:state.movieReducer.loading,
        movies:state.movieReducer.movies,
        singlemovie:state.movieReducer.singlemovie,
        tscreens:state.theaterscreenReducer.tscreens,
        singletscreen: state.theaterscreenReducer.singletscreen
      })
      
      const mapDispatchToProps = dispatch =>{
        return{
          fetchmoviedata:()=>dispatch(fetchmoviedata()),
          deletemoviedata:(_id)=>dispatch(deletemoviedata(_id)),
          updatemoviedata:(postdata,put) => dispatch(updatemoviedata(postdata,put)),
          singlemovieDataFetch:(id)=>dispatch(singlemovieDataFetch(id)),
          singletscreenrecord: (id) => dispatch(singletscreenrecord(id)),
          gettscreen: ()=>dispatch(gettscreen())
        }
      }
      
      export default connect(mapStateToProps,mapDispatchToProps)(SingleMovie);