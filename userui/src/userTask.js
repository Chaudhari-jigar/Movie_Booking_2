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
            <Route path="/about-us" exact component={About}/>
            <Route path="/checkout/:price/:seats/:movie" exact component={Checkout}/>
            <Route path="/singlemovietheater/:mid" exact component={singlemovietheaterlist}/>
            <Route path="/movie-seat-plan/:userid/:screenid/:id" exact component={movie_seat_plan}/>
            <Route path="/singlemovie/:id" exact component={singlemovie}/>
            <Route path="/categorymovie/:category" exact component={categorymovie}/>
        </Switch>

    return <>
        <Header2 content={content}/>
    </>
}

export default UserTask