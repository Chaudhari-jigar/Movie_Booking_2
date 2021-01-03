import React,{useEffect,useState} from 'react';
import './css/Home';
import {fetchmoviedata,updatemoviedata,singlemovieDataFetch,deletemoviedata} from '../store/action/movieAction';
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
          _id:"",
          moviename:"",
          releasedate:"",
          movie_category:"",
          director_name:"",
          Actors_name:"",
          movie_description:"",
          movie_type:"",
          movie_logo:"",
          movie_status:"",
          booking_status:""
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
          

          console.log(props.match.params.movie_id);
        },[props.fetchmoviedata])
        
        return(
            <>
            
            <section class="details-banner bg_img" data-background="assets/images/banner/banner03.jpg">
        <div class="container">
            <div class="details-banner-wrapper">
                <div class="details-banner-thumb">
                    <img src={"http://localhost:3001"+props.singlemovie.movie_logo} alt="movie"/>
                    <span class="video-popup">
                        <img src={videobtn} alt="movie"/>
                    </span>
                </div>
                <div class="details-banner-content offset-lg-3">
                    <h3 class="title" style={{color:"#ffff"}}>{props.singlemovie.moviename}</h3>
                    <div class="tags">
                        <a href="#0" >Director:-  {props.singlemovie.director_name}</a><br/>
                        <a href="#0">Casts:-  {props.singlemovie.Actors_name}</a>
                    </div>
                    <a href="#0" class="button">{props.singlemovie.movie_type}</a>
                    <div class="social-and-duration">
                        <div class="duration-area">
                            <div class="item">
                                <i class="fas fa-calendar-alt"></i><span>{props.singlemovie.releasedate}</span>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>

        </div>
    </section>
   
    <section class="book-section bg-one">
        <div class="container">
            <div class="book-wrapper offset-lg-3">
                <div class="left-side">
                    <div class="item">
                        <div class="item-header">
                            <div class="thumb">
                                <img src={tomato} alt="movie"/>
                            </div>
                            <div class="counter-area">
                                <span class="counter-item odometer" data-odometer-final="88">0</span>
                            </div>
                        </div>
                        <p>tomatometer</p>
                    </div>
                    <div class="item">
                        <div class="item-header">
                            <div class="thumb">
                                <img src={cake} alt="movie"/>
                            </div>
                            <div class="counter-area">
                                <span class="counter-item odometer" data-odometer-final="88">0</span>
                            </div>
                        </div>
                        <p>audience Score</p>
                    </div>
                    <div class="item">
                        <div class="item-header">
                            <h5 class="title">4.5</h5>
                            <div class="rated">
                                <i class="fas fa-heart"></i>
                                <i class="fas fa-heart"></i>
                                <i class="fas fa-heart"></i>
                                <i class="fas fa-heart"></i>
                                <i class="fas fa-heart"></i>
                            </div>
                        </div>
                        <p>Users Rating</p>
                    </div>
                    <div class="item">
                        <div class="item-header">
                            <div class="rated rate-it">
                                <i class="fas fa-heart"></i>
                                <i class="fas fa-heart"></i>
                                <i class="fas fa-heart"></i>
                                <i class="fas fa-heart"></i>
                                <i class="fas fa-heart"></i>
                            </div>
                            <h5 class="title">0.0</h5>
                        </div>
                        <p><a href="#0">Rate It</a></p>
                    </div>
                </div>
                <a href="#0" class="custom-button">book tickets</a>
            </div>
        </div>
    </section>
  
    <section class="movie-details-section padding-top padding-bottom">
        <div class="container">
            <div class="row justify-content-center flex-wrap-reverse mb--50">
                <div class="col-lg-3 col-sm-10 col-md-6 mb-50">
                    <div class="widget-1 widget-tags">
                        <ul>
                            <li>
                                <a href="#0"><span>Grade {props.singlemovie.movie_category}</span></a>
                            </li>
                        </ul>
                    </div>
                    <div class="widget-1 widget-offer">
                        <h3 class="title">Applicable offer</h3>
                        <div class="offer-body">
                            <div class="offer-item">
                                <div class="thumb">
                                    <img src={offer1} alt="sidebar"/>
                                </div>
                                <div class="content">
                                    <h6>
                                        <a href="#0">Amazon Pay Cashback Offer</a>
                                    </h6>
                                    <p>Win Cashback Upto Rs 300*</p>
                                </div>
                            </div>
                            <div class="offer-item">
                                <div class="thumb">
                                    <img src={offer2} alt="sidebar"/>
                                </div>
                                <div class="content">
                                    <h6>
                                        <a href="#0">PayPal Offer</a>
                                    </h6>
                                    <p>Transact first time with Paypal and
                                        get 100% cashback up to Rs. 500</p>
                                </div>
                            </div>
                            <div class="offer-item">
                                <div class="thumb">
                                    <img src={offer3} alt="sidebar"/>
                                </div>
                                <div class="content">
                                    <h6>
                                        <a href="#0">HDFC Bank Offer</a>
                                    </h6>
                                    <p>Get 15% discount up to INR 100* 
                                        and INR 50* off on F&B T&C apply</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="widget-1 widget-banner">
                        <div class="widget-1-body">
                            <a href="#0">
                                <img src={banner01} alt="banner"/>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-9 mb-50">
                    <div class="movie-details">
                    <div class="tab summery-review">
                            <ul class="tab-menu">
                                <li class="active">
                                    Description
                                </li>
                            </ul>
                            <div class="tab-area">
                                <div class="tab-item active">
                                    <div class="item">
                                       
                                        <p style={{color:"#ffff"}}>{props.singlemovie.movie_description}</p>
                                    </div>
                                    
                                    
                                </div>
                                <div class="tab-item">
                                    <div class="movie-review-item">
                                        <div class="author">
                                            <div class="thumb">
                                                <a href="#0">
                                                    <img src="assets/images/cast/cast02.jpg" alt="cast"/>
                                                </a>
                                            </div>
                                            <div class="movie-review-info">
                                                <span class="reply-date">13 Days Ago</span>
                                                <h6 class="subtitle"><a href="#0">minkuk seo</a></h6>
                                                <span><i class="fas fa-check"></i> verified review</span>
                                            </div>
                                        </div>
                                        <div class="movie-review-content">
                                            <div class="review">
                                                <i class="flaticon-favorite-heart-button"></i>
                                                <i class="flaticon-favorite-heart-button"></i>
                                                <i class="flaticon-favorite-heart-button"></i>
                                                <i class="flaticon-favorite-heart-button"></i>
                                                <i class="flaticon-favorite-heart-button"></i>
                                            </div>
                                            <h6 class="cont-title">Awesome Movie</h6>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer volutpat enim non ante egestas vehicula. Suspendisse potenti. Fusce malesuada fringilla lectus venenatis porttitor. </p>
                                            <div class="review-meta">
                                                <a href="#0">
                                                    <i class="flaticon-hand"></i><span>8</span>
                                                </a>
                                                <a href="#0" class="dislike">
                                                    <i class="flaticon-dont-like-symbol"></i><span>0</span>
                                                </a>
                                                <a href="#0">
                                                    Report Abuse
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="movie-review-item">
                                        <div class="author">
                                            <div class="thumb">
                                                <a href="#0">
                                                    <img src="assets/images/cast/cast04.jpg" alt="cast"/>
                                                </a>
                                            </div>
                                            <div class="movie-review-info">
                                                <span class="reply-date">13 Days Ago</span>
                                                <h6 class="subtitle"><a href="#0">rudra rai</a></h6>
                                                <span><i class="fas fa-check"></i> verified review</span>
                                            </div>
                                        </div>
                                        <div class="movie-review-content">
                                            <div class="review">
                                                <i class="flaticon-favorite-heart-button"></i>
                                                <i class="flaticon-favorite-heart-button"></i>
                                                <i class="flaticon-favorite-heart-button"></i>
                                                <i class="flaticon-favorite-heart-button"></i>
                                                <i class="flaticon-favorite-heart-button"></i>
                                            </div>
                                            <h6 class="cont-title">Awesome Movie</h6>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer volutpat enim non ante egestas vehicula. Suspendisse potenti. Fusce malesuada fringilla lectus venenatis porttitor. </p>
                                            <div class="review-meta">
                                                <a href="#0">
                                                    <i class="flaticon-hand"></i><span>8</span>
                                                </a>
                                                <a href="#0" class="dislike">
                                                    <i class="flaticon-dont-like-symbol"></i><span>0</span>
                                                </a>
                                                <a href="#0">
                                                    Report Abuse
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="movie-review-item">
                                        <div class="author">
                                            <div class="thumb">
                                                <a href="#0">
                                                    <img src="assets/images/cast/cast01.jpg" alt="cast"/>
                                                </a>
                                            </div>
                                            <div class="movie-review-info">
                                                <span class="reply-date">13 Days Ago</span>
                                                <h6 class="subtitle"><a href="#0">rafuj</a></h6>
                                                <span><i class="fas fa-check"></i> verified review</span>
                                            </div>
                                        </div>
                                        <div class="movie-review-content">
                                            <div class="review">
                                                <i class="flaticon-favorite-heart-button"></i>
                                                <i class="flaticon-favorite-heart-button"></i>
                                                <i class="flaticon-favorite-heart-button"></i>
                                                <i class="flaticon-favorite-heart-button"></i>
                                                <i class="flaticon-favorite-heart-button"></i>
                                            </div>
                                            <h6 class="cont-title">Awesome Movie</h6>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer volutpat enim non ante egestas vehicula. Suspendisse potenti. Fusce malesuada fringilla lectus venenatis porttitor. </p>
                                            <div class="review-meta">
                                                <a href="#0">
                                                    <i class="flaticon-hand"></i><span>8</span>
                                                </a>
                                                <a href="#0" class="dislike">
                                                    <i class="flaticon-dont-like-symbol"></i><span>0</span>
                                                </a>
                                                <a href="#0">
                                                    Report Abuse
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="movie-review-item">
                                        <div class="author">
                                            <div class="thumb">
                                                <a href="#0">
                                                    <img src="assets/images/cast/cast03.jpg" alt="cast"/>
                                                </a>
                                            </div>
                                            <div class="movie-review-info">
                                                <span class="reply-date">13 Days Ago</span>
                                                <h6 class="subtitle"><a href="#0">bela bose</a></h6>
                                                <span><i class="fas fa-check"></i> verified review</span>
                                            </div>
                                        </div>
                                        <div class="movie-review-content">
                                            <div class="review">
                                                <i class="flaticon-favorite-heart-button"></i>
                                                <i class="flaticon-favorite-heart-button"></i>
                                                <i class="flaticon-favorite-heart-button"></i>
                                                <i class="flaticon-favorite-heart-button"></i>
                                                <i class="flaticon-favorite-heart-button"></i>
                                            </div>
                                            <h6 class="cont-title">Awesome Movie</h6>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer volutpat enim non ante egestas vehicula. Suspendisse potenti. Fusce malesuada fringilla lectus venenatis porttitor. </p>
                                            <div class="review-meta">
                                                <a href="#0">
                                                    <i class="flaticon-hand"></i><span>8</span>
                                                </a>
                                                <a href="#0" class="dislike">
                                                    <i class="flaticon-dont-like-symbol"></i><span>0</span>
                                                </a>
                                                <a href="#0">
                                                    Report Abuse
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="load-more text-center">
                                        <a href="#0" class="custom-button transparent">load more</a>
                                    </div>
                                </div>
                            </div>
                        <br/><br/>
                        <div className="article-section padding-bottom">
                        <div className="section-header-1">
                      <h2 className="title" style={{color:"#ffff"}}>&nbsp;Photos</h2>
                      
                    </div>
                    <div className="row mb-30-none justify-content-center">
                      <div className="col-sm-6 col-lg-4">
                        <div className="movie-grid">
                          <div className="movie-thumb c-thumb">
                            <a href="#0">
                              <img src={action} alt="event" />
                            </a>
                            
                          </div>
                          
                        </div>
                      </div>
                      <div className="col-sm-6 col-lg-4">
                        <div className="event-grid">
                          <div className="movie-thumb c-thumb">
                            <a href="#0">
                              <img src={fantasy} alt="event" />
                            </a>
                          </div>
                          <div className="movie-content bg-one">
                            <h5 className="title m-0">
                              <a href="#0">Fantasy</a>
                            </h5>
                            
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-lg-4">
                        <div className="event-grid">
                          <div className="movie-thumb c-thumb">
                            <a href="#0">
                              <img src={horror} alt="event" />
                            </a>
                            
                          </div>
                          <div className="movie-content bg-one">
                            <h5 className="title m-0">
                              <a href="#0">Horror</a>
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-lg-4">
                        <div className="event-grid">
                          <div className="movie-thumb c-thumb">
                            <a href="#0">
                              <img src={romance} alt="event" />
                            </a>
                            
                          </div>
                          <div className="movie-content bg-one">
                            <h5 className="title m-0">
                              <a href="#0">Romance</a>
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-lg-4">
                        <div className="event-grid">
                          <div className="movie-thumb c-thumb">
                            <a href="#0">
                              <img src={comedy} alt="event" />
                            </a>
                            
                          </div>
                          <div className="movie-content bg-one">
                            <h5 className="title m-0">
                              <a href="#0">Comedy</a>
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-lg-4">
                        <div className="event-grid">
                          <div className="movie-thumb c-thumb">
                            <a href="#0">
                              <img src={mystry} alt="event" />
                            </a>
                            
                          </div>
                          <div className="movie-content bg-one">
                            <h5 className="title m-0">
                              <a href="#0">Mystry</a>
                            </h5>
                          </div>
                        </div>
                      </div>
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
    const mapStateToProps =  (state) => ({
        err:state.movieReducer.error,
        Loading:state.movieReducer.loading,
        movies:state.movieReducer.movies,
        singlemovie:state.movieReducer.singlemovie,
      })
      
      const mapDispatchToProps = dispatch =>{
        return{
          fetchmoviedata:()=>dispatch(fetchmoviedata()),
          deletemoviedata:(_id)=>dispatch(deletemoviedata(_id)),
          updatemoviedata:(postdata,put) => dispatch(updatemoviedata(postdata,put)),
          singlemovieDataFetch:(id)=>dispatch(singlemovieDataFetch(id))
        }
      }
      
      export default connect(mapStateToProps,mapDispatchToProps)(SingleMovie);