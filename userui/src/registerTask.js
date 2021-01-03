import React,{useEffect} from 'react';
import { Switch, Route,Redirect } from 'react-router'
import RegisterForm from './components/All Registration form/userRegistration';
import index from './demo/index';
import {login,autoCheckLogin} from './store/action/userAction';
import TheaterRegistration from './components/All Registration form/theaterRegistration';
import Temp from './components/All Registration form/Temp';
import UserLoginTask from './userLoginTask';
import UserTask from  './userTask';
import {connect} from 'react-redux';

import SignUp from './demo/sign-up';
import SignIn from './demo/sign-in';

const RegisterTask = (props) => {

    useEffect(() => {
        console.log(props.singleuser);
        if(props.location.pathname.startsWith("/") && !props.token) {
            props.autoCheckLogin();
            console.log(props.singleuser)
        }
    }, [props.location.pathname,props.autoCheckLogin,props.token])
    let content = <Redirect to="/" />
    if(props.location.pathname.startsWith("/") && !props.token) {
        console.log("Login In " + false + " token " + props.token);
        content = <Switch>
            <Route path="/" exact component={UserLoginTask}/>
            <Route path="/sign-up" exact component={SignUp}/>
            <Route path="/sign-in" exact component={SignIn}/>
            <Redirect to="/" />
        </Switch>
    }else if(props.location.pathname.startsWith("/") && props.token && props.singleuser.group_id.group_name=="user"){
        content = <>
        <div >
        <Switch>
            <Route path="/index" exact component={UserTask}/>
            <Redirect to="/index" />
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