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
import heart from './assets/images/icons/heart.png';
import book from './assets/images/icons/book.png';
import playbutton from './assets/images/icons/play-button.png';
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
        const onmovieclick = async (_id) => {
            await props.singlemovieDataFetch(_id); 
            props.history.replace('/singlemovie')
          }
        const renderTableData = () => {
            return props.movies.map((movies, index) => {
              const { _id, moviename,releasedate,movie_category,movie_type,movie_logo,movie_status,booking_status } = movies
              if(movie_type == props.match.params.category)
              {
              return (
                <div class="movie-list">
                                        <div class="movie-thumb">
                                            
                                                <img  src={"http://localhost:3001"+movie_logo} style={{cursor:'pointer'}} alt="movie" onClick={()=> onmovieclick(_id)}/>
                                            
                                        </div>
                                        <div class="movie-content bg-one">
                                            <h5 class="title">
                                                <a href="#" onClick={()=> onmovieclick(_id)}>{moviename}</a>
                                            </h5>
                                            <div class="movie-tags">
                                                <a href="#0">{movie_type}</a>
                                            </div>
                                            <div class="release">
                                                <span>Release Date : </span> <a href="#0">{releasedate}</a>
                                            </div>
                                            <ul class="movie-rating-percent">
                                                <li>
                                                    <div class="thumb">
                                                        <img src={tomato} alt="movie"/>
                                                    </div>
                                                    <span class="content">88%</span>
                                                </li>
                                                <li>
                                                    <div class="thumb">
                                                        <img src={cake} alt="movie"/>
                                                    </div>
                                                    <span class="content">88%</span>
                                                </li>
                                            </ul>
                                            <div class="book-area">
                                                <div class="book-ticket">
                                                    <div class="react-item">
                                                        <a href="#0">
                                                            <div class="thumb">
                                                                <img src={heart} alt="icons"/>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div class="react-item mr-auto">
                                                        <a href="#0">
                                                            <div class="thumb">
                                                                <img src={book} alt="icons"/>
                                                            </div>
                                                            <span>book ticket</span>
                                                        </a>
                                                    </div>
                                                    <div class="react-item">
                                                        <a href="#0" class="popup-video">
                                                            <div class="thumb">
                                                                <img src={playbutton} alt="icons"/>
                                                            </div>
                                                            <span>watch trailer</span>
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
        return(
            <>
      <section class="movie-section padding-top padding-bottom">
        <div class="container">
            <div class="row flex-wrap-reverse justify-content-center">
                <div class="col-sm-10 col-md-8 col-lg-3">
                    <div class="widget-1 widget-banner">
                        <div class="widget-1-body">
                            <a href="#0">
                                <img src={banner01} alt="banner"/>
                            </a>
                        </div>
                    </div>
                    <div class="widget-1 widget-check">
                        <div class="widget-header">
                            <h5 class="m-title">Filter By</h5> <a href="#0" class="clear-check">Clear All</a>
                        </div>
                        <div class="widget-1-body">
                            <h6 class="subtitle">Language</h6>
                            <div class="check-area">
                                <div class="form-group">
                                    <input type="checkbox" name="lang" id="lang1"/><label for="lang1">Tamil</label>
                                </div>
                                <div class="form-group">
                                    <input type="checkbox" name="lang" id="lang2"/><label for="lang2">Telegu</label>
                                </div>
                                <div class="form-group">
                                    <input type="checkbox" name="lang" id="lang3"/><label for="lang3">Hindi</label>
                                </div>
                                <div class="form-group">
                                    <input type="checkbox" name="lang" id="lang4"/><label for="lang4">English</label>
                                </div>
                                <div class="form-group">
                                    <input type="checkbox" name="lang" id="lang5"/><label for="lang5">Multiple Language</label>
                                </div>
                                <div class="form-group">
                                    <input type="checkbox" name="lang" id="lang6"/><label for="lang6">Gujrati</label>
                                </div>
                                <div class="form-group">
                                    <input type="checkbox" name="lang" id="lang7"/><label for="lang7">Bangla</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="widget-1 widget-check">
                        <div class="widget-1-body">
                            <h6 class="subtitle">experience</h6>
                            <div class="check-area">
                                <div class="form-group">
                                    <input type="checkbox" name="mode" id="mode1"/><label for="mode1">2d</label>
                                </div>
                                <div class="form-group">
                                    <input type="checkbox" name="mode" id="mode2"/><label for="mode2">3d</label>
                                </div>
                            </div>
                            <div class="add-check-area">
                                <a href="#0">view more <i class="plus"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="widget-1 widget-check">
                        <div class="widget-1-body">
                            <h6 class="subtitle">genre</h6>
                            <div class="check-area">
                                <div class="form-group">
                                    <input type="checkbox" name="genre" id="genre1"/><label for="genre1">thriller</label>
                                </div>
                                <div class="form-group">
                                    <input type="checkbox" name="genre" id="genre2"/><label for="genre2">horror</label>
                                </div>
                                <div class="form-group">
                                    <input type="checkbox" name="genre" id="genre3"/><label for="genre3">drama</label>
                                </div>
                                <div class="form-group">
                                    <input type="checkbox" name="genre" id="genre4"/><label for="genre4">romance</label>
                                </div>
                                <div class="form-group">
                                    <input type="checkbox" name="genre" id="genre5"/><label for="genre5">action</label>
                                </div>
                                <div class="form-group">
                                    <input type="checkbox" name="genre" id="genre6"/><label for="genre6">comedy</label>
                                </div>
                                <div class="form-group">
                                    <input type="checkbox" name="genre" id="genre7"/><label for="genre7">romantic</label>
                                </div>
                                <div class="form-group">
                                    <input type="checkbox" name="genre" id="genre8"/><label for="genre8">animation</label>
                                </div>
                                <div class="form-group">
                                    <input type="checkbox" name="genre" id="genre9"/><label for="genre9">sci-fi</label>
                                </div>
                                <div class="form-group">
                                    <input type="checkbox" name="genre" id="genre10"/><label for="genre10">adventure</label>
                                </div>
                            </div>
                            <div class="add-check-area">
                                <a href="#0">view more <i class="plus"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="widget-1 widget-banner">
                        <div class="widget-1-body">
                            <a href="#0">
                                <img src={banner02} alt="banner"/>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-9 mb-50 mb-lg-0">
                    <div class="filter-tab tab">
                        <div class="filter-area">
                            <div class="filter-main">
                                <div class="left">
                                    <div class="item">
                                        <span class="show">Show :</span>
                                        <select class="select-bar">
                                            <option value="12">12</option>
                                            <option value="15">15</option>
                                            <option value="18">18</option>
                                            <option value="21">21</option>
                                            <option value="24">24</option>
                                            <option value="27">27</option>
                                            <option value="30">30</option>
                                        </select>
                                    </div>
                                    <div class="item">
                                        <span class="show">Sort By :</span>
                                        <select class="select-bar">
                                            <option value="showing">now showing</option>
                                            <option value="exclusive">exclusive</option>
                                            <option value="trending">trending</option>
                                            <option value="most-view">most view</option>
                                        </select>
                                    </div>
                                </div>
                                <ul class="grid-button tab-menu">
                                    <li>
                                        <i class="fas fa-th"></i>
                                    </li>                            
                                    <li class="active">
                                        <i class="fas fa-bars"></i>
                                    </li>                            
                                </ul>
                            </div>
                        </div>
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
                        <div class="pagination-area text-center">
                            <a href="#0"><i class="fas fa-angle-double-left"></i><span>Prev</span></a>
                            <a href="#0">1</a>
                            <a href="#0">2</a>
                            <a href="#0" class="active">3</a>
                            <a href="#0">4</a>
                            <a href="#0">5</a>
                            <a href="#0"><span>Next</span><i class="fas fa-angle-double-right"></i></a>
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