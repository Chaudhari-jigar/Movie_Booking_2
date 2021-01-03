import React from 'react';
import { Switch, Route } from 'react-router'
import Header2 from './demo/Header';
import Index from './demo/index';
import About from './demo/about-us';

const UserTask = (props) => {

    let content = 
        <Switch>
            <Route path="/index" exact component={Index}/>
            <Route path="/index/about-us" exact component={About}/>
        </Switch>

    return <>
        <Header2 content={content}/>
    </>
}

export default UserTask