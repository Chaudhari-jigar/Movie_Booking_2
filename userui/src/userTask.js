import React from 'react';
import { Switch, Route } from 'react-router';
import Header2 from './demo/Header';
import Index from './demo/index';
import Sign from './demo/sign-up';
import singlemovie from './demo/singlemovie';
import categorymovie from "./demo/categorymovie";
import singlemovietheaterlist from './demo/singlemovietheaterlist';
import demo from './demo/index';
const UserTask = (props) => {

    let content = 
        <Switch>
            <Route path="/index" exact component={Index}/>
            <Route path="/singlemovie" exact component={singlemovie}/>
            <Route path="/categorymovie/:category" exact component={categorymovie}/>
            <Route path="/singlemovietheater/:mid" exact component={singlemovietheaterlist}/>
        </Switch>

    return <>
        <Header2 content={content}/>
    </>
}

export default UserTask