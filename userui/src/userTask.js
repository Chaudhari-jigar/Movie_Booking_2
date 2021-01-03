import React from 'react';
import { Switch, Route } from 'react-router'
import Header2 from './demo/Header';
import Index from './demo/index';
import Sign from './demo/sign-up';


const UserTask = (props) => {

    let content = 
        <Switch>
            <Route path="/index" exact component={Index}/>
        </Switch>

    return <>
        <Header2 content={content}/>
    </>
}

export default UserTask