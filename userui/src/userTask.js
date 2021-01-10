import React from 'react';
import { Switch, Route } from 'react-router'
import Header2 from './demo/Header';
import Index from './demo/index';
import About from './demo/about-us';
import Checkout from './demo/checkout';
import singlemovie from './demo/singlemovie';
import movie_seat_plan from './demo/movie_seat_plan';
import categorymovie from "./demo/categorymovie";
import singlemovietheaterlist from "./demo/singlemovietheaterlist";

const UserTask = (props) => {

    let content = 
        <Switch>
            <Route path="/index" exact component={Index}/>
            <Route path="/index/about-us" exact component={About}/>
            <Route path="/index/checkout/:price/:seats/:movie" exact component={Checkout}/>
            <Route path="/index/singlemovietheater/:mid" exact component={singlemovietheaterlist}/>
            <Route path="/index/movie-seat-plan/:userid/:screenid/:id" exact component={movie_seat_plan}/>
            <Route path="/index/singlemovie/:id" exact component={singlemovie}/>
            <Route path="/index/categorymovie/:category" exact component={categorymovie}/>
        </Switch>

    return <>
        <Header2 content={content}/>
    </>
}

export default UserTask