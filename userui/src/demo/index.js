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
import footerLogo from './assets/images/footer/footer-logo.png';
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

        useEffect(()=>{
          props.fetchmoviedata();
        },[props.fetchmoviedata])
const renderTableData = () => {
    return props.movies.map((movies, index) => {
      const { _id, moviename,releasedate,movie_category,movie_type,movie_logo,movie_status,booking_status } = movies
      return (
        <div className="col-sm-6 col-lg-4">
                        <div className="movie-grid">
                          <div className="movie-thumb c-thumb">
                            <a href="#0">
                              <img src={"http://localhost:3001/"+movie_logo} alt="movie"/>
                            </a>
                          </div>
                          <div className="movie-content bg-one">
                            <h5 className="title m-0">
                              <a href="#0">{moviename}</a>
                            </h5>
                            <ul className="movie-rating-percent">
                              <li>
                                <div className="thumb">
                                  <img src={tomato} alt="movie" />
                                </div>
                                <span className="content">88%</span>
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
                      <h6 className="category">welcome to Boleto </h6>
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
                      <li>
                        <div className="tab-thumb">
                          <img src={second} alt="ticket" />
                        </div>
                        <span>events</span>
                      </li>
                      <li>
                        <div className="tab-thumb">
                          <img src={third} alt="ticket" />
                        </div>
                        <span>sports</span>
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
                    <h3 className="title">Trending Searches</h3>
                    <div className="widget-1-body">
                      <ul>
                        <li>
                          <h6 className="sub-title">
                            <a href="#0">mars</a>
                          </h6>
                          <p>Movies</p>
                        </li>
                        <li>
                          <h6 className="sub-title">
                            <a href="#0">alone</a>
                          </h6>
                          <p>Movies</p>
                        </li>
                        <li>
                          <h6 className="sub-title">
                            <a href="#0">music event</a>
                          </h6>
                          <p>event</p>
                        </li>
                        <li>
                          <h6 className="sub-title">
                            <a href="#0">NBA Games 2020</a>
                          </h6>
                          <p>Sports</p>
                        </li>
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
                      <h2 className="title">movies</h2>
                      <a className="view-all" href="movie-grid.html">View All</a>
                    </div>
                    <div className="row mb-30-none justify-content-center">
                      {renderTableData()}
                    </div>
                  </div>
                  <div className="article-section padding-bottom">
                    <div className="section-header-1">
                      <h2 className="title">events</h2>
                      <a className="view-all" href="events.html">View All</a>
                    </div>
                    <div className="row mb-30-none justify-content-center">
                      <div className="col-sm-6 col-lg-4">
                        <div className="event-grid">
                          <div className="movie-thumb c-thumb">
                            <a href="#0">
                              <img src={event01} alt="event" />
                            </a>
                            <div className="event-date">
                              <h6 className="date-title">28</h6>
                              <span>Dec</span>
                            </div>
                          </div>
                          <div className="movie-content bg-one">
                            <h5 className="title m-0">
                              <a href="#0">Digital Economy Conference 2020</a>
                            </h5>
                            <div className="movie-rating-percent">
                              <span>327 Montague Street</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-lg-4">
                        <div className="event-grid">
                          <div className="movie-thumb c-thumb">
                            <a href="#0">
                              <img src={event02} alt="event" />
                            </a>
                            <div className="event-date">
                              <h6 className="date-title">28</h6>
                              <span>Dec</span>
                            </div>
                          </div>
                          <div className="movie-content bg-one">
                            <h5 className="title m-0">
                              <a href="#0">web design conference 2020</a>
                            </h5>
                            <div className="movie-rating-percent">
                              <span>327 Montague Street</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-lg-4">
                        <div className="event-grid">
                          <div className="movie-thumb c-thumb">
                            <a href="#0">
                              <img src={event03} alt="event" />
                            </a>
                            <div className="event-date">
                              <h6 className="date-title">28</h6>
                              <span>Dec</span>
                            </div>
                          </div>
                          <div className="movie-content bg-one">
                            <h5 className="title m-0">
                              <a href="#0">digital thinkers meetup</a>
                            </h5>
                            <div className="movie-rating-percent">
                              <span>327 Montague Street</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="article-section">
                    <div className="section-header-1">
                      <h2 className="title">sports</h2>
                      <a className="view-all" href="sports.html">View All</a>
                    </div>
                    <div className="row mb-30-none justify-content-center">
                      <div className="col-sm-6 col-lg-4">
                        <div className="sports-grid">
                          <div className="movie-thumb c-thumb">
                            <a href="#0">
                              <img src={sports01} alt="sports" />
                            </a>
                            <div className="event-date">
                              <h6 className="date-title">28</h6>
                              <span>Dec</span>
                            </div>
                          </div>
                          <div className="movie-content bg-one">
                            <h5 className="title m-0">
                              <a href="#0">football league tournament</a>
                            </h5>
                            <div className="movie-rating-percent">
                              <span>327 Montague Street</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-lg-4">
                        <div className="sports-grid">
                          <div className="movie-thumb c-thumb">
                            <a href="#0">
                              <img src={sports02} alt="sports" />
                            </a>
                            <div className="event-date">
                              <h6 className="date-title">28</h6>
                              <span>Dec</span>
                            </div>
                          </div>
                          <div className="movie-content bg-one">
                            <h5 className="title m-0">
                              <a href="#0">world cricket league 2020</a>
                            </h5>
                            <div className="movie-rating-percent">
                              <span>327 Montague Street</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-lg-4">
                        <div className="sports-grid">
                          <div className="movie-thumb c-thumb">
                            <a href="#0">
                              <img src={sports03} alt="sports" />
                            </a>
                            <div className="event-date">
                              <h6 className="date-title">28</h6>
                              <span>Dec</span>
                            </div>
                          </div>
                          <div className="movie-content bg-one">
                            <h5 className="title m-0">
                              <a href="#0">basket ball tournament 2020</a>
                            </h5>
                            <div className="movie-rating-percent">
                              <span>327 Montague Street</span>
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

    export default connect(mapStateToProps,mapDispatchToProps)(Index);