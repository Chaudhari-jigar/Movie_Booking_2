import React,{useEffect} from 'react';
import './css/Home';
import {Select} from 'antd';
// import Logo from './assets/images/logo/logo.png';
import gallery01 from './assets/images/gallery/gallery01.jpg';
import gallery02 from './assets/images/gallery/gallery02.jpg';
import gallery03 from './assets/images/gallery/gallery03.jpg';
import gallery04 from './assets/images/gallery/gallery04.jpg';
import gallery05 from './assets/images/gallery/gallery05.jpg';
import gallery06 from './assets/images/gallery/gallery06.jpg';
import gallery07 from './assets/images/gallery/gallery07.jpg';
import gallery08 from './assets/images/gallery/gallery08.jpg';
import gallery09 from './assets/images/gallery/gallery09.jpg';
import gallery10 from './assets/images/gallery/gallery10.jpg';
import about01 from './assets/images/about/about01.png';


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
import icon1 from './assets/images/philosophy/icon1.png';
import icon2 from './assets/images/philosophy/icon2.png';
import icon3 from './assets/images/philosophy/icon3.png';
import footerLogo from './assets/images/footer/footer-logo.png';

const {Option} = Select;
     const AboutUs = () =>{
      return (
        <>
      <section class="main-page-header speaker-banner bg_img" data-background="assets/images/banner/banner07.jpg">
        <div class="container">
            <div class="speaker-banner-content">
                <h2 class="title">about us</h2>
                <ul class="breadcrumb">
                    <li>
                        <a href="index-2.html">
                            Home
                        </a>
                    </li>
                    <li>
                        about us
                    </li>
                </ul>
            </div>
        </div>
    </section>
    {/* <!-- ==========Banner-Section========== -->
    
    <!-- ==========Speaker-Single========== --> */}
    <section class="about-section padding-top padding-bottom">
        <div class="container">
            <div class="row justify-content-between">
                <div class="col-lg-6">
                    <div class="event-about-content">
                        <div class="section-header-3 left-style m-0">
                            <span class="cate">we are Boleto </span>
                            <h2 class="title">Get to know us</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            </p>
                            <a href="#0" class="custom-button">book tickets</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-5 d-none d-lg-block">
                    <div class="about-thumb">
                        <img src={about01} alt="about" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- ==========Speaker-Single========== -->

    <!-- ==========Philosophy-Section========== --> */}
    <div class="philosophy-section padding-top padding-bottom bg-one bg_img bg_quater_img" data-background="assets/images/about/about-bg.jpg">
        <div class="container">
            <div class="row">
                <div class="col-lg-9 offset-lg-3 bg-two">
                    <div class="philosophy-content">
                        <div class="section-header-3 left-style">
                            <span class="cate">Take look at</span>
                            <h2 class="title">Our philosophy</h2>
                            <p class="ml-0">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmtempor incididunt labore et dolore magna aliqu enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip
                            </p>
                        </div>
                        <ul class="phisophy-list">
                            <li>
                                <div class="thumb">
                                    <img src={icon1} alt="philosophy" />
                                </div>
                                <h5 class="title">Honesty & Fairness </h5>
                            </li>
                            <li>
                                <div class="thumb">
                                    <img src={icon2} alt="philosophy" />
                                </div>
                                <h5 class="title">Clarity & Transparency</h5>
                            </li>
                            <li>
                                <div class="thumb">
                                    <img src={icon3} alt="philosophy" />
                                </div>
                                <h5 class="title">Focus on Customers</h5>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- ==========Philosophy-Section========== -->

    <!-- ==========About-Counter-Section========== --> */}
    <section class="about-counter-section padding-bottom padding-top">
        <div class="container">
            <div class="row">
                <div class="col-lg-4">
                    <div class="section-header-3 left-style mb-lg-0">
                        <span class="cate">quick facts</span>
                        <h2 class="title">fun facts</h2>
                        <p>Objectively seize scalable metrics whereas proactive services seamlessly empower fully researched growth strategies</p>
                    </div>
                </div>
                <div class="col-lg-8">
                    <div class="about-counter">
                        <div class="counter-item">
                            <div class="counter-thumb">
                                <img src="assets/images/about/about-counter01.png" alt="about" />
                            </div>
                            <div class="counter-content">
                                <h3 class="title odometer" data-odometer-final="30"></h3>
                                <h3 class="title">M+</h3>
                            </div>
                            <span class="d-block info">Customers</span>
                        </div>
                        <div class="counter-item">
                            <div class="counter-thumb">
                                <img src="assets/images/about/about-counter02.png" alt="about" />
                            </div>
                            <div class="counter-content">
                                <h3 class="title odometer" data-odometer-final="11"></h3>
                            </div>
                            <span class="d-block info">Contries</span>
                        </div>
                        <div class="counter-item">
                            <div class="counter-thumb">
                                <img src="assets/images/about/about-counter03.png" alt="about" />
                            </div>
                            <div class="counter-content">
                                <h3 class="title odometer" data-odometer-final="650"></h3>
                                <h3 class="title">+</h3>
                            </div>
                            <span class="d-block info">Towns & Cities</span>
                        </div>
                        <div class="counter-item">
                            <div class="counter-thumb">
                                <img src="assets/images/about/about-counter04.png" alt="about" />
                            </div>
                            <div class="counter-content">
                                <h3 class="title odometer" data-odometer-final="5000"></h3>
                                <h3 class="title">+</h3>
                            </div>
                            <span class="d-block info">Screens</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- ==========About-Counter-Section========== -->

    <!-- ==========Client-Section========== --> */}
    <section class="client-section padding-bottom padding-top bg_img" data-background="assets/images/client/client-bg.jpg">
        <div class="container">
            <div class="section-header-3">
                <span class="cate">testimonials</span>
                <h2 class="title">the fans have spoken</h2>
            </div>
            <div class="client-slider owl-carousel owl-theme">
                <div class="client-item">
                    <div class="client-thumb">
                        <img src="assets/images/client/client01.jpg" alt="client" />
                    </div>
                    <div class="client-content">
                        <h5 class="title">
                            <a href="#0">Rafuz</a>
                        </h5>
                        <span class="info"><i class="fas fa-check"></i> Verified</span>
                        <blockquote class="client-quote">
                            "Great prices and Cheaper than other sites! Easy to use."
                        </blockquote>
                    </div>
                </div>
                <div class="client-item">
                    <div class="client-thumb">
                        <img src="assets/images/client/client03.jpg" alt="client" />
                    </div>
                    <div class="client-content">
                        <h5 class="title">
                            <a href="#0">Rudra</a>
                        </h5>
                        <span class="info"><i class="fas fa-check"></i> Verified</span>
                        <blockquote class="client-quote">
                            "Id iure est sint at illum ipsum non beatae cumque"
                        </blockquote>
                    </div>
                </div>
                <div class="client-item">
                    <div class="client-thumb">
                        <img src="assets/images/client/client02.jpg" alt="client" />
                    </div>
                    <div class="client-content">
                        <h5 class="title">
                            <a href="#0">Raihan</a>
                        </h5>
                        <span class="info"><i class="fas fa-check"></i> Verified</span>
                        <blockquote class="client-quote">
                            "amet consectetur adipisicing elit. Animi, ut consequuntur"
                        </blockquote>
                    </div>
                </div>
                <div class="client-item">
                    <div class="client-thumb">
                        <img src="assets/images/client/client04.jpg" alt="client" />
                    </div>
                    <div class="client-content">
                        <h5 class="title">
                            <a href="#0">Shahidul</a>
                        </h5>
                        <span class="info"><i class="fas fa-check"></i> Verified</span>
                        <blockquote class="client-quote">
                            "Quia voluptatum animi libero recusandae error."
                        </blockquote>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- ==========Client-Section========== -->

    <!-- ==========Speaker-Section========== --> */}
    <section class="speaker-section padding-bottom padding-top">
        <div class="container">
            <div class="section-header-3">
                <span class="cate">meet our most valued</span>
                <h2 class="title">expert team members</h2>
                <p>World is committed to making participation in the event a harassment free experience for 
                everyone, regardless of level of experience, gender, gender identity and expression</p>
            </div>
            <div class="speaker--slider">
                <div class="speaker-slider owl-carousel owl-theme">
                    <div class="speaker-item">
                        <div class="speaker-thumb">
                            <a href="event-speaker.html">
                                <img src="assets/images/speaker/speaker01.jpg" alt="speaker" />
                            </a>
                        </div>
                        <div class="speaker-content">
                            <h5 class="title">
                                <a href="event-speaker.html">
                                    Gerard Bryan 
                                </a>
                            </h5>
                            <span>CO-FOUNDER, CEO</span>
                        </div>
                    </div>
                    <div class="speaker-item">
                        <div class="speaker-thumb">
                            <a href="event-speaker.html">
                                <img src="assets/images/speaker/speaker02.jpg" alt="speaker" />
                            </a>
                        </div>
                        <div class="speaker-content">
                            <h5 class="title">
                                <a href="event-speaker.html">
                                    Raihan Rafuj
                                </a>
                            </h5>
                            <span>CO-FOUNDER, CEO</span>
                        </div>
                    </div>
                    <div class="speaker-item">
                        <div class="speaker-thumb">
                            <a href="event-speaker.html">
                                <img src="assets/images/speaker/speaker03.jpg" alt="speaker" />
                            </a>
                        </div>
                        <div class="speaker-content">
                            <h5 class="title">
                                <a href="event-speaker.html">
                                    Bela Bose
                                </a>
                            </h5>
                            <span>CO-FOUNDER, CEO</span>
                        </div>
                    </div>
                    <div class="speaker-item">
                        <div class="speaker-thumb">
                            <a href="event-speaker.html">
                                <img src="assets/images/speaker/speaker04.jpg" alt="speaker" />
                            </a>
                        </div>
                        <div class="speaker-content">
                            <h5 class="title">
                                <a href="event-speaker.html">
                                    Grass Hopper
                                </a>
                            </h5>
                            <span>CO-FOUNDER, CEO</span>
                        </div>
                    </div>
                </div>
                <div class="speaker-prev">
                    <i class="flaticon-double-right-arrows-angles"></i>
                </div>
                <div class="speaker-next">
                    <i class="flaticon-double-right-arrows-angles"></i>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- ==========Speaker-Section========== -->

    <!-- ==========Gallery-Section========== --> */}
    <section class="gallery-section padding-top padding-bottom bg-one">
        <div class="container">
            <div class="section-header-3">
                <span class="cate">Take a look at our</span>
                <h2 class="title">A ticket for every fan.</h2>
                <p>World is committed to making participation in the event a harassment free experience for 
                    everyone, regardless of level of experience, gender, gender identity and expression</p>
            </div>
            <div class="row justify-content-center gallery-wrapper mb-30-none">
                <div class="col-lg-3 col-sm-6">
                    <div class="gallery-item two">
                        <div class="gallery-thumb">
                            <a href="assets/images/gallery/gallery05.jpg" class="img-pop">
                                <i class="flaticon-loupe"></i>
                            </a>
                            <img src="assets/images/gallery/gallery05.jpg" alt="gallery" />
                        </div>
                    </div>
                    <div class="gallery-item two">
                        <div class="gallery-thumb">
                            <a href="assets/images/gallery/gallery06.jpg" class="img-pop">
                                <i class="flaticon-loupe"></i>
                            </a>
                            <img src="assets/images/gallery/gallery06.jpg" alt="gallery" />
                        </div>
                    </div>
                    <div class="gallery-item two">
                        <div class="gallery-thumb">
                            <a href="assets/images/gallery/gallery07.jpg" class="img-pop">
                                <i class="flaticon-loupe"></i>
                            </a>
                            <img src="assets/images/gallery/gallery07.jpg" alt="gallery"  />
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-3 order-lg-1">
                    <div class="gallery-item two">
                        <div class="gallery-thumb">
                            <a href="assets/images/gallery/gallery11.jpg" class="img-pop">
                                <i class="flaticon-loupe"></i>
                            </a>
                            <img src="assets/images/gallery/gallery11.jpg" alt="gallery" />
                        </div>
                    </div>
                    <div class="gallery-item two">
                        <div class="gallery-thumb">
                            <a href="assets/images/gallery/gallery12.jpg" class="img-pop">
                                <i class="flaticon-loupe"></i>
                            </a>
                            <img src="assets/images/gallery/gallery12.jpg" alt="gallery" />
                        </div>
                    </div>
                    <div class="gallery-item two">
                        <div class="gallery-thumb">
                            <a href="assets/images/gallery/gallery13.jpg" class="img-pop">
                                <i class="flaticon-loupe"></i>
                            </a>
                            <img src="assets/images/gallery/gallery13.jpg" alt="gallery" />
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="gallery-item two">
                        <div class="gallery-thumb">
                            <a href="assets/images/gallery/gallery08.jpg" class="img-pop">
                                <i class="flaticon-loupe"></i>
                            </a>
                            <img src="assets/images/gallery/gallery08.jpg" alt="gallery" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="gallery-item two">
                                <div class="gallery-thumb">
                                    <a href="assets/images/gallery/gallery09.jpg" class="img-pop">
                                        <i class="flaticon-loupe"></i>
                                    </a>
                                    <img src={gallery09} alt="gallery" />
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="gallery-item two">
                                <div class="gallery-thumb">
                                    <a href="assets/images/gallery/gallery10.jpg" class="img-pop">
                                        <i class="flaticon-loupe"></i>
                                    </a>
                                    <img src="./assets/images/gallery/gallery10.jpg" alt="gallery" />
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

    export default (AboutUs);