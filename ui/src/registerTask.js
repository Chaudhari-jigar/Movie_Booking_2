import React from 'react';
import { Switch, Route } from 'react-router'
import RegisterForm from './components/All Registration form/userRegistration';
import LoginForm from './components/All Registration form/loginForm';
import TheaterRegistration from './components/All Registration form/theaterRegistration';
import StateTask from './stateTask';
const RegisterTask = (props) => {
    return <>
    <div>
            <Switch>
                <Route path="/userreg" exact component={RegisterForm}/>
                <Route path="/theaterreg" exact component={TheaterRegistration}/>
                <Route path="/city" component={StateTask}/>
                <Route path="/city/cityAdd" exact component={StateTask}/>x
                <Route path="/state/stateAdd" exact component={StateTask}/>
                <Route path="/state" exact component={StateTask}/>
                <Route path="/" exact component={LoginForm}/>
            </Switch>
        </div>
    </>
}

export default RegisterTask