import React,{useState, useEffect} from 'react';
// import { logout} from '../../store/action/userAction';
import { Link } from 'react-router-dom';
// import {connect} from 'react-redux';
// import Logo from '../../Movie_logo/logo1.png'
import 'antd/dist/antd.css';
// import {changepassword} from '../../store/action/userAction';
import './css/Home';
import Logo from './assets/images/logo/logo.png';
import newslater from './assets/images/newslater/newslater-bg01.jpg';
import footerLogo from './assets/images/footer/footer-logo.png';

const SiderDemo = (props) => {
    return (
      <>
     <div>
         <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <title>Boleto  - Online Ticket Booking </title>
          {/* ==========Preloader========== */}
          {/* <div className="preloader">
            <div className="preloader-inner">
              <div className="preloader-icon">
                <span />
                <span />
              </div>
            </div>
          </div> */}
          {/* ==========Preloader========== */}
          {/* ==========Overlay========== */}
          <div className="overlay" />
          <a href="#0" className="scrollToTop">
            <i className="fas fa-angle-up" />
          </a>
          {/* ==========Overlay========== */}
          {/* ==========Header-Section========== */}
          <header className="header-section">
            <div className="container">
              <div className="header-wrapper">
                <div className="logo">
                  <a href="index-2.html">
                    <img src={Logo} alt="logo" />
                  </a>
                </div>
                <ul className="menu">
                  <li>
                    <Link to="/index" className="active">Home</Link>
                  </li>
                  <li>
                    <a href="#0">movies</a>
                    <ul className="submenu">
                      <li>
                        <a href="movie-grid.html">Movie Grid</a>
                      </li>
                      <li>
                        <a href="movie-list.html">Movie List</a>
                      </li>
                      <li>
                        <a href="movie-details.html">Movie Details</a>
                      </li>
                      <li>
                        <a href="movie-details-2.html">Movie Details 2</a>
                      </li>
                      <li>
                        <a href="movie-ticket-plan.html">Movie Ticket Plan</a>
                      </li>
                      <li>
                        <a href="movie-seat-plan.html">Movie Seat Plan</a>
                      </li>
                      <li>
                        <a href="movie-checkout.html">Movie Checkout</a>
                      </li>
                      <li>
                        <a href="popcorn.html">Movie Food</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#0">events</a>
                    <ul className="submenu">
                      <li>
                        <a href="events.html">Events</a>
                      </li>
                      <li>
                        <a href="event-details.html">Event Details</a>
                      </li>
                      <li>
                        <a href="event-speaker.html">Event Speaker</a>
                      </li>
                      <li>
                        <a href="event-ticket.html">Event Ticket</a>
                      </li>
                      <li>
                        <a href="event-checkout.html">Event Checkout</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#0">sports</a>
                    <ul className="submenu">
                      <li>
                        <a href="sports.html">Sports</a>
                      </li>
                      <li>
                        <a href="sport-details.html">Sport Details</a>
                      </li>
                      <li>
                        <a href="sports-ticket.html">Sport Ticket</a>
                      </li>
                      <li>
                        <a href="sports-checkout.html">Sport Checkout</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#0">pages</a>
                    <ul className="submenu">
                      <li>
                        <a href="about.html">About Us</a>
                      </li>
                      <li>
                        <a href="apps-download.html">Apps Download</a>
                      </li>
                      <li>
                        <a href="sign-in.html">Sign In</a>
                      </li>
                      <li>
                        <a href="sign-up.html">Sign Up</a>
                      </li>
                      <li>
                        <a href="404.html">404</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#0">blog</a>
                    <ul className="submenu">
                      <li>
                        <a href="blog.html">Blog</a>
                      </li>
                      <li>
                        <a href="blog-details.html">Blog Single</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="contact.html">contact</a>
                  </li>
                  <li className="header-button pr-0">
                    <a href="sign-up.html">join us</a>
                  </li>
                </ul>
                <div className="header-bar d-lg-none">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </div>
          </header>
            {props.content}
          {/* </Header>           */}
          <footer className="footer-section">
            <div className="newslater-section padding-bottom">
              <div className="container">
                <div className="newslater-container bg_img" data-background={newslater}>
                  <div className="newslater-wrapper">
                    <h5 className="cate">subscribe to Boleto </h5>
                    <h3 className="title">to get exclusive benifits</h3>
                    <form className="newslater-form">
                      <input type="text" placeholder="Your Email Address" />
                      <button type="submit">subscribe</button>
                    </form>
                    <p>We respect your privacy, so we never share your info</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="footer-top">
                <div className="logo">
                  <a href="index-1.html">
                    <img src={footerLogo} alt="footer" />
                  </a>
                </div>
                <ul className="social-icons">
                  <li>
                    <a href="#0">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="#0" className="active">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <i className="fab fa-pinterest-p" />
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <i className="fab fa-google" />
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-bottom">
                <div className="footer-bottom-area">
                  <div className="left">
                    <p>Copyright © 2020.All Rights Reserved By <a href="#0">Boleto </a></p>
                  </div>
                  <ul className="links">
                    <li>
                      <a href="#0">About</a>
                    </li>
                    <li>
                      <a href="#0">Terms Of Use</a>
                    </li>
                    <li>
                      <a href="#0">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#0">FAQ</a>
                    </li>
                    <li>
                      <a href="#0">Feedback</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
     </div>   
     </>
    );
}
export default (SiderDemo);