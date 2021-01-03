import React from 'react';
import { Switch, Route } from 'react-router'
import Header2 from './demo/HeaderLogin';
import Index from './demo/index';
import About from './demo/about-us';


const UserLoginTask = (props) => {

    let content = 
        <Switch>
            <Route path="/" exact component={Index}/>
            <Route path="/about-us" exact component={About}/>
        </Switch>

    return <>
        <Header2 content={content}/>
    </>
}

export default UserLoginTask