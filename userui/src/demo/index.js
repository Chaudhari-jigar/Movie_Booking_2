import React,{useEffect,useState} from 'react';
import './css/Home';
import { Link } from "react-router-dom";
import {fetchmoviedata,updatemoviedata,singlemovieDataFetch,deletemoviedata} from '../store/action/movieAction';
import {getAllTheater} from '../store/action/userAction';
import {Select,Form} from 'antd';
import Moment from 'moment';
// import Logo from './assets/images/logo/logo.png';
import first from './assets/images/ticket/ticket-tab01.png';
import second from "./assets/images/ticket/ticket-tab02.png";
import third from "./assets/images/ticket/ticket-tab03.png";
import cinema from './assets/images/ticket/cinema.png';
import city from './assets/images/ticket/city.png';
import date1 from './assets/images/ticket/date.png';
import sidebar01 from './assets/images/sidebar/icons/sidebar01.png';
import sidebar02 from './assets/images/sidebar/icons/sidebar02.png';
import sidebar03 from './assets/images/sidebar/icons/sidebar03.png';
import tomato from './assets/images/movie/tomato.png';
import cake from './assets/images/movie/cake.png';
import ticket01 from './assets/images/ticket/ticket-bg01.jpg';
import banner01 from './assets/images/sidebar/banner/banner01.jpg';
import backgroundBanner from './assets/images/banner/banner01.jpg';
import banner02 from './assets/images/sidebar/banner/banner02.jpg';
import fantasy from './assets/images/movie_category/fantasymovie.jpeg';
import comedy from './assets/images/movie_category/comedymovie.jpg';
import action from './assets/images/movie_category/actionmovie.jpg';
import horror from './assets/images/movie_category/horrormovie.jpg';
import romance from './assets/images/movie_category/romancemovie.jpg';
import mystry from './assets/images/movie_category/mystrymovie.jpg';
import {connect} from 'react-redux';
const {Option} = Select;
     const Index = (props) =>{
       
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
        const onmovieclick = async (_id) => {
          //await props.singlemovieDataFetch(_id); 
          // console.log(props.singleuser)
          // if(props.singleuser._id==null){
          //   props.history.replace(`/index/singlemovie/${_id}`)
          // }else{
            props.history.replace(`/singlemovie/${_id}`)
          // }
        }
        useEffect(()=>{
          console.log(props.users);
          props.fetchmoviedata();
          props.getAllTheater()
        },[props.fetchmoviedata,props.getAllTheater])
    const renderTableData = () => {
    return props.movies.map((movies, index) => {
      const { _id, moviename,releasedate,movie_category,movie_type,movie_logo,movie_status,booking_status,movie_languages } = movies
      
      // const Difference_In_Time = Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24));
      const start = new Date(new Date().toLocaleString()) //clone
      const end = new Date(releasedate) //clone
      let dayCount = 0
    
      while (end > start) {
        dayCount++
        start.setDate(start.getDate() + 1)
      }
      if(booking_status!=="false")
      return (
        <div className="col-sm-6 col-lg-4">
                        <div className="movie-grid">
                          <div className="movie-thumb c-thumb">
                              <img src={"http://localhost:3001/"+movie_logo} alt="movie" onClick={()=> onmovieclick(_id)}/>
                              <div class="event-date">
                                  <h6 class="date-title"><b>{dayCount}</b></h6>
                                  <span>Left</span>
                              </div>
                          </div>
                          
                          <div className="movie-content bg-one">
                            <h5 className="title m-0">
                              <span style={{color:'white'}} onClick={()=> onmovieclick(_id)}>{moviename} </span>
                            </h5>
                            
                            <ul className="movie-rating-percent">
                              <li>
                                <div className="thumb" style={{color:"#72c3f1"}}>
                                  {/* <img src={tomato} alt="movie" /> */}
                                  Release:- {Moment(releasedate).format("DD-MM-YYYY")} <br></br>
                                  Language:- {movie_languages}
                                </div>
                              </li>
                              <li>
                                <div className="thumb">
                                  <img src={cake} alt="movie" />
                                </div>
                                
                                <span className="content">88%</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
      )
    })
    
  }

      const popularCinema = () => {
          return props.users.map((users1) => {
             const { _id ,cinema_name,city_id} = users1;
             
            return (
                <li>
                  <h6 className="sub-title">
                    <a href="#0">{cinema_name}</a>
                  </h6>
                  <p style={{color:"white"}}>{city_id.city_name} city</p>
                </li>
            )                 
          });
      }
      return (
        <>
        <section class="banner-section" style={{backgroundColor:"#00123266"}}>
        <img src={backgroundBanner} class="banner-bg bg_img bg-fixed"/>
        {/* <div class="banner-bg bg_img bg-fixed" data-background="./assets/images/banner/banner01.jpg"></div> */}
        <div class="container">
            <div class="banner-content">
                <h1 class="title  cd-headline clip"><span class="d-block">book your</span> tickets for 
                    <span class="color-theme cd-words-wrapper p-0 m-0">
                        <b class="is-visible">Movie</b>
                        <b>Event</b>
                        <b>Sport</b>
                    </span>
                </h1>
                <p>Safe, secure, reliable ticketing.Your ticket to live entertainment!</p>
            </div>
        </div>
    </section>
          {/* ==========Banner-Section========== */}
          {/* ==========Ticket-Search========== */}
          <section className="search-ticket-section padding-top pt-lg-0">
            <div className="container">
              <div className="search-tab bg_img" data-background={ticket01}>
                <div className="row align-items-center mb--20">
                  <div className="col-lg-6 mb-20">
                    <div className="search-ticket-header">
                      <h6 className="category">welcome to Movie System </h6>
                      <h3 className="title">what are you looking for</h3>
                    </div>
                  </div>
                  <div className="col-lg-6 mb-20">
                    <ul className="tab-menu ticket-tab-menu">
                      <li className="active">
                        <div className="tab-thumb">
                          <img src={first} alt="ticket" />
                        </div>
                        <span>movie</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="tab-area">
                  <div className="tab-item active">
                    <form className="ticket-search-form">
                      <div className="form-group large">
                        <input type="text" placeholder="Search for Movies" />
                        <button type="submit"><i className="fas fa-search" /></button>
                      </div>
                      <div className="form-group">
                        <div className="thumb">
                          <img src={city} alt="ticket" />
                        </div>
                        <span className="type">city</span>
                        <Select className="select-bar">
                          <Option value="london">London</Option>
                          <Option value="dhaka">dhaka</Option>
                          <Option value="rosario">rosario</Option>
                          <Option value="madrid">madrid</Option>
                          <Option value="koltaka">kolkata</Option>
                          <Option value="rome">rome</Option>
                          <Option value="khoksa">khoksa</Option>
                        </Select>
                      </div>
                      <div className="form-group">
                        <div className="thumb">
                          <img src={date1} alt="ticket" />
                        </div>
                        <span className="type">date</span>
                        <Select className="select-bar">
                          <Option value="26-12-19">23/10/2020</Option>
                          <Option value="26-12-19">24/10/2020</Option>
                          <Option value="26-12-19">25/10/2020</Option>
                          <Option value="26-12-19">26/10/2020</Option>
                        </Select>
                      </div>
                      <div className="form-group">
                        <div className="thumb">
                          <img src={cinema} alt="ticket" />
                        </div>
                        <span className="type">cinema</span>
                        <Select className="select-bar">
                          <Option value="Awaken">Awaken</Option>
                          <Option value="dhaka">dhaka</Option>
                          <Option value="rosario">rosario</Option>
                          <Option value="madrid">madrid</Option>
                          <Option value="koltaka">kolkata</Option>
                          <Option value="rome">rome</Option>
                          <Option value="khoksa">khoksa</Option>
                        </Select>
                      </div>
                    </form>
                  </div>
                  <div className="tab-item">
                    <form className="ticket-search-form">
                      <div className="form-group large">
                        <input type="text" placeholder="Search for Events" />
                        <button type="submit"><i className="fas fa-search" /></button>
                      </div>
                      <div className="form-group">
                        <div className="thumb">
                          <img src={city} alt="ticket" />
                        </div>
                        <span className="type">city</span>
                        <select className="select-bar">
                          <Option value="london">London</Option>
                          <Option value="dhaka">dhaka</Option>
                          <Option value="rosario">rosario</Option>
                          <Option value="madrid">madrid</Option>
                          <Option value="koltaka">kolkata</Option>
                          <Option value="rome">rome</Option>
                          <Option value="khoksa">khoksa</Option>
                        </select>
                      </div>
                      <div className="form-group">
                        <div className="thumb">
                          <img src={date1} alt="ticket" />
                        </div>
                        <span className="type">date</span>
                        <select className="select-bar">
                          <Option value="26-12-19">23/10/2020</Option>
                          <Option value="26-12-19">24/10/2020</Option>
                          <Option value="26-12-19">25/10/2020</Option>
                          <Option value="26-12-19">26/10/2020</Option>
                        </select>
                      </div>
                      <div className="form-group">
                        <div className="thumb">
                          <img src={cinema} alt="ticket" />
                        </div>
                        <span className="type">event</span>
                        <select className="select-bar">
                          <Option value="angular">angular</Option>
                          <Option value="startup">startup</Option>
                          <Option value="rosario">rosario</Option>
                          <Option value="madrid">madrid</Option>
                          <Option value="koltaka">kolkata</Option>
                          <Option value="Last-First">Last-First</Option>
                          <Option value="wish">wish</Option>
                        </select>
                      </div>
                    </form>
                  </div>
                  <div className="tab-item">
                    <form className="ticket-search-form">
                      <div className="form-group large">
                        <input type="text" placeholder="Search fo Sports" />
                        <button type="submit"><i className="fas fa-search" /></button>
                      </div>
                      <div className="form-group">
                        <div className="thumb">
                          <img src={city} alt="ticket" />
                        </div>
                        <span className="type">city</span>
                        <select className="select-bar">
                          <Option value="london">London</Option>
                          <Option value="dhaka">dhaka</Option>
                          <Option value="rosario">rosario</Option>
                          <Option value="madrid">madrid</Option>
                          <Option value="koltaka">kolkata</Option>
                          <Option value="rome">rome</Option>
                          <Option value="khoksa">khoksa</Option>
                        </select>
                      </div>
                      <div className="form-group">
                        <div className="thumb">
                          <img src={date1} alt="ticket" />
                        </div>
                        <span className="type">date</span>
                        <select className="select-bar">
                          <Option value="26-12-19">23/10/2020</Option>
                          <Option value="26-12-19">24/10/2020</Option>
                          <Option value="26-12-19">25/10/2020</Option>
                          <Option value="26-12-19">26/10/2020</Option>
                        </select>
                      </div>
                      <div className="form-group">
                        <div className="thumb">
                          <img src={cinema} alt="ticket" />
                        </div>
                        <span className="type">sports</span>
                        <select className="select-bar">
                          <Option value="football">football</Option>
                          <Option value="cricket">cricket</Option>
                          <Option value="cabadi">cabadi</Option>
                          <Option value="madrid">madrid</Option>
                          <Option value="gadon">gadon</Option>
                          <Option value="rome">rome</Option>
                          <Option value="khoksa">khoksa</Option>
                        </select>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>    
          {/* ==========Ticket-Search========== */}
          {/* ==========Movie-Main-Section========== */}
          <section className="movie-section padding-top padding-bottom bg-two">
            <div className="container">
              <div className="row flex-wrap-reverse justify-content-center">
                <div className="col-lg-3 col-sm-10  mt-50 mt-lg-0">
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
                    <h4 className="title" style={{color:"white",textTransform:"uppercase"}}>Trending Cinema</h4>
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
                <div className="col-lg-9">
                  <div className="article-section padding-bottom">
                    <div className="section-header-1">
                      <h2 className="title" style={{color:"#ffff"}}>&nbsp;All movies</h2>
                      <a className="view-all" href="movie-grid.html">View All&nbsp;</a>
                    </div>
                    <div className="row mb-30-none justify-content-center">
                      {renderTableData()}
                    </div>
                  </div>
                  <div className="article-section padding-bottom">
                    <div className="section-header-1">
                      <h2 className="title" style={{color:"#ffff"}}>&nbsp;Category</h2>
                      <a className="view-all" href="events.html">View All&nbsp;</a>
                    </div>
                    <div className="row mb-30-none justify-content-center">
                      <div className="col-sm-6 col-lg-4">
                        <div className="movie-grid">
                          <div className="movie-thumb c-thumb">
                            <a href="#0">
                              <img src={action} alt="event" />
                            </a>
                            
                          </div>
                          <div className="movie-content bg-one">
                            <h5 className="title m-0">
                              <a href="/categorymovie/Action">Action</a>
                            </h5>
                            
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-lg-4">
                        <div className="event-grid">
                          <div className="movie-thumb c-thumb">
                            <a href="/categorymovie/Fantasy">
                              <img src={fantasy} alt="event" />
                            </a>
                          </div>
                          <div className="movie-content bg-one">
                            <h5 className="title m-0">
                              <a href="/categorymovie/Fantasy">Fantasy</a>
                            </h5>
                            
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-lg-4">
                        <div className="event-grid">
                          <div className="movie-thumb c-thumb">
                            <a href="/categorymovie/Horror">
                              <img src={horror} alt="event" />
                            </a>
                            
                          </div>
                          <div className="movie-content bg-one">
                            <h5 className="title m-0">
                              <a href="/categorymovie/Horror">Horror</a>
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-lg-4">
                        <div className="event-grid">
                          <div className="movie-thumb c-thumb">
                            <a href="/categorymovie/Romance">
                              <img src={romance} alt="event" />
                            </a>
                            
                          </div>
                          <div className="movie-content bg-one">
                            <h5 className="title m-0">
                              <a href="/categorymovie/Romance">Romance</a>
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-lg-4">
                        <div className="event-grid">
                          <div className="movie-thumb c-thumb">
                            <a href="/categorymovie/Comedy">
                              <img src={comedy} alt="event" />
                            </a>
                            
                          </div>
                          <div className="movie-content bg-one">
                            <h5 className="title m-0">
                              <a href="/categorymovie/Comedy">Comedy</a>
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-lg-4">
                        <div className="event-grid">
                          <div className="movie-thumb c-thumb">
                            <a href="/categorymovie/Mystry">
                              <img src={mystry} alt="event" />
                            </a>
                            
                          </div>
                          <div className="movie-content bg-one">
                            <h5 className="title m-0">
                              <a href="/categorymovie/Mystry">Mystry</a>
                            </h5>
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
      users:state.userReducer.users,
      singleuser:state.userReducer.singleuser
    })
    
    const mapDispatchToProps = dispatch =>{
      return{
        fetchmoviedata:()=>dispatch(fetchmoviedata()),
        getAllTheater:()=>dispatch(getAllTheater()),
        deletemoviedata:(_id)=>dispatch(deletemoviedata(_id)),
        updatemoviedata:(postdata,put) => dispatch(updatemoviedata(postdata,put)),
        singlemovieDataFetch:(id)=>dispatch(singlemovieDataFetch(id))
      }
    }

    export default connect(mapStateToProps,mapDispatchToProps)(Index);