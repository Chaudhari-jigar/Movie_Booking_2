import React,{useEffect} from 'react';
import { Switch, Route,Redirect } from 'react-router'
import RegisterForm from './components/All Registration form/userRegistration';
import LoginForm from './components/All Registration form/loginForm';
import {login,autoCheckLogin} from './store/action/userAction';
import TheaterRegistration from './components/All Registration form/theaterRegistration';
import StateTask from './stateTask';
import {connect} from 'react-redux';

const RegisterTask = (props) => {

    useEffect(() => {
        if(props.location.pathname.startsWith("/") && !props.token) {
            props.autoCheckLogin();
        }
    }, [props.location.pathname,props.autoCheckLogin,props.token])
    let content = <Redirect to="/" />

    if(props.location.pathname.startsWith("/") && !props.token) {
        console.log("Login In " + false + " token " + props.token);
        content = <Switch>
            <Route path="/" exact component={LoginForm}/>
            <Redirect to="/" />
            <Route path="/userreg" exact component={RegisterForm}/>
            <Route path="/theaterreg" exact component={TheaterRegistration}/>
        </Switch>
    } else if(props.location.pathname.startsWith("/") && props.token) {
        console.log("Login In " + true + " token " + props.token);
        content = <>
            <div >
            <Switch>
                
                <Route path="/city" component={StateTask}/>
                <Route path="/city/cityAdd" exact component={StateTask}/>
                
                <Route path="/state/stateAdd" exact component={StateTask}/>
                <Route path="/state" exact component={StateTask}/>

                <Route path="/movie" exact component={StateTask} />
                <Route path="/movie/movieAdd" exact component={StateTask} />
                <Redirect to="/city" />
            </Switch>
            </div>
        </>
    }
    return content
}

const mapStateToProps =  (state) => ({
    err1:state.userReducer.error1,
    singleuser:state.userReducer.singleuser,
    token:state.userReducer.token ? true : false
  })

const mapDispatchToProps = dispatch =>{
  return{
    autoCheckLogin:()=>dispatch(autoCheckLogin()),
    login:(email,password)=>dispatch(login(email,password))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(RegisterTask);