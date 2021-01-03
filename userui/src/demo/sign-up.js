import React, { useState,useEffect } from "react";
import {Form,Col,Button} from "react-bootstrap";
import {connect} from 'react-redux';
import {adduserdata} from '../store/action/userAction';
import {fetchstatedata} from '../store/action/stateAction';
import {fetchAllStatesBystate_id} from '../store/action/cityAction';
import './css/Home';
import { Link } from 'react-router-dom';
import accountbg from './assets/images/account/account-bg.jpg';

     const Sign = (props) =>{
        useEffect(()=>{
            props.fetchstatedata();
          },[props.fetchstatedata])
  const [obj,setMyObj] = useState({
    user_name:"",
    password:"",
    email:"",
    gender:"Male",
    photo1:"",
    state_id:"",
    city_id:"",
    group_id:"",
    is_active:""
  });
  
  const [error,setError]=useState({
    user_name_nameError:"",
    password_nameError:"",
    gender_nameError:"",
    email_nameError:"",
    state_nameError:"",
    city_nameError:"",
    isValid:false
  });

  const handleSubmit =async () =>{
    let errors = { ...error,isValid: true };
    obj.group_id="5fcc4220e862ea35384c7c8e";
    obj.is_active="1";
    // obj.photo1="sds";
    errors.state_nameError="";
    errors.city_nameError="";
    errors.user_name_nameError="";
    errors.password_nameError="";
    errors.email_nameError="";
    errors.isValid=false;
    if(obj.state_id == "" || obj.city_id == "" || obj.user_name == "" || obj.password == "" || obj.email == "" || obj.email != ""){
      if(obj.state_id == ""){
        errors.state_nameError="Please atleast one select state !!"
        errors.isValid=true;
      }
      if(obj.city_id == ""){
        errors.city_nameError="Please atleast one select city !!"
        errors.isValid=true;
      }
      if(obj.user_name == ""){
        errors.user_name_nameError="Please reuired username !!"
        errors.isValid=true;
      }
      if(obj.password == ""){
        errors.password_nameError="Please required password !!"
        errors.isValid=true;
      }
      if(obj.email == ""){
        errors.email_nameError="Please required email !!"
        errors.isValid=true;
      }
      if(obj.email != ""){
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(obj.email)) {
          errors.isValid = true;
          errors.email_nameError = "Please enter valid email address.";
        }
      }
    }else{
      errors.state_nameError="";
      errors.city_nameError="";
      errors.user_name_nameError="";
      errors.password_nameError="";
      errors.email_nameError="";
      errors.isValid=false;
    }
    if(errors.isValid==false){
      const formdata = new FormData();
      console.log(obj);
      formdata.append("user_name",obj.user_name);
      formdata.append("password",obj.password);
      formdata.append("email",obj.email);
      formdata.append("gender",obj.gender);
      formdata.append("photo1",obj.photo1);
      formdata.append("state_id",obj.state_id);
      formdata.append("city_id",obj.city_id);
      formdata.append("group_id",obj.group_id);
      formdata.append("is_active",obj.is_active);
      console.log(formdata);
      await props.adduserdata(formdata);
      props.history.replace("/");
    }
    setError(errors);
  }
  const HandleChange = (e,name) =>{
    let olddata = {...obj};
    if (name == "photo1") {
      const { target: { files } } = e
      olddata[name] = files.length === 1 ? files[0] : files
      olddata[name] = e.target.files[0];
    }
    else
    {
      olddata[name] = e.target.value;
    }
    setMyObj(olddata)
    cityCall(olddata.state_id);
  }

  const cityCall =async (id) =>{
    await props.fetchAllStatesBystate_id(id);
    // console.log(props.cities);
  }

  const optionStates = () => {
    return props.states.map((stateslist) => {
    const { _id, state_name } = stateslist;
      return (
          <option value={_id} key={_id}>{state_name}</option>
      )
    })
  }

  const optioncities = () => {
    return props.cities.map((stateslist) => {
    const { _id, city_name } = stateslist;
      return (
          <option value={_id} key={_id}>{city_name}</option>
      )
    })
  }
      return (
        <>
            <section class="account-section bg_img" data-background={accountbg}  style={{backgroundColor: "#0a1e5e",color:"white"}}>
                <div class="container">
                    <div class="">
                        <div class="account-area">
                            <div class="section-header-3" >
                                <span class="cate">welcome</span>
                                <h2 class="title" style={{color:"white"}}>to New Register</h2>
                            </div>
                            <Form style={{marginLeft: "100px"}} class="account-form" style={{color:"white",marginLeft:"72px"}}>
                                <Form.Group  as={Col} controlId="formGridEmail">
                                    <label for="email1">Enter Username:-</label>
                                    <Form.Control type="text" isInvalid={error.user_name_nameError}  placeholder="Enter Username ..." name="user_name" onChange={(e) => {HandleChange(e,"user_name")}} style={{width:"310px",height:"38px",color: "white",backgroundColor: "#001232"}}/>
                                    <Form.Control.Feedback type="invalid">
                                        {error.user_name_nameError}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridEmail2">
                                <label for="email1">Enter Password:-</label>
                                <Form.Control type="password" isInvalid={error.password_nameError} placeholder="Enter Password ..." name="password" onChange={(e) => {HandleChange(e,"password")}}  style={{width:"310px",height:"38px",color: "white",backgroundColor: "#001232"}}/>
                                <Form.Control.Feedback type="invalid">
                                        {error.password_nameError}
                                    </Form.Control.Feedback>
                                    </Form.Group>
                          
                                <Form.Group  as={Col} controlId="formGridEmail">
                                    <Form.Label>Enter Email:-</Form.Label>
                                    <Form.Control type="email" isInvalid={error.email_nameError} className="form-control" name="email" onChange={(e) => {HandleChange(e,"email")}} onBlur={() => cityCall()} placeholder="Enter email ..."   style={{width:"310px",height:"38px",color: "white",backgroundColor: "#001232"}}/>
                                    <Form.Control.Feedback type="invalid">
                                        {error.email_nameError}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <label for="email1">Select Gender:-</label><br></br>
                                    <span style={{marginLeft:"60px"}}>Male</span><input type="radio" name="gender" value="male" label="Male" style={{width: "21%",height: "1.5em"}} onChange={(e) => {HandleChange(e,"gender")}} checked/><br></br>
                                    <span style={{marginLeft:"60px"}}>FeMale</span><input type="radio" name="gender" value="female" label="Female" style={{width: "15%",height: "1.5em"}} onChange={(e) => {HandleChange(e,"gender")}}/>
                                </Form.Group>
                           
                                <Form.Group  as={Col} > 
                                    <Form.Label style={{marginLeft:"15px"}}>Select State:-</Form.Label>
                                    <Form.Control isInvalid={error.state_nameError} className="form-control" as="select" name="state_id" onChange={(e) => {HandleChange(e,"state_id")}}  style={{width:"310px",height:"38px",color: "white",backgroundColor: "#001232"}}>
                                        <option selected disabled>-----Select -----</option>
                                        {optionStates()}
                                    </Form.Control>
                                    <Form.Control.Feedback type="invalid">
                                        {error.state_nameError}
                                    </Form.Control.Feedback>
                                </Form.Group> 
                                <Form.Group  as={Col} >
                                    <Form.Label style={{marginLeft:"15px"}}>Select city:-</Form.Label>
                                    <Form.Control isInvalid={error.city_nameError} className="form-control" as="select" name="city_id" onChange={(e) => {HandleChange(e,"city_id")}} style={{width:"310px",height:"38px",color: "white",backgroundColor: "#001232"}} >
                                        <option selected disabled>-----Select -----</option>
                                        {optioncities()}
                                    </Form.Control>
                                    <Form.Control.Feedback type="invalid" style={{marginLeft: "28px"}}>
                                        {error.city_nameError}
                                    </Form.Control.Feedback>
                                </Form.Group> 
                          
                                <Form.Group  as={Col} >
                                    <Form.Label style={{marginLeft:"15px"}}>Select User photo:-</Form.Label>
                                    <Form.Control type="file" name="photo1" onChange={(e) => {HandleChange(e,"photo1")}} style={{maxWidth : "300px"}}/>
                                </Form.Group> 
                                <Form.Group controlId="formGridEmail2" as={Col} >
                                    <Button className="btnRegister" style={{marginRight: "214px",width: "100px",height: "32px",marginTop:"20px"}} onClick={handleSubmit}>Register</Button><br></br>
                                </Form.Group>
                           
                            </Form>
                            <div class="option" style={{marginTop:"87px"}}>
                                Already have an account? <Link to="/sign-in" className="active">Sign IN</Link>
                            </div>
                            <div class="or"><span>Or</span></div>
                            <ul class="social-icons">
                                <li>
                                    <a href="#0">
                                        <i class="fab fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#0" class="active">
                                        <i class="fab fa-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#0">
                                        <i class="fab fa-google"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
          </>
      );
    }

const mapStateToProps =  (state) => ({
    err:state.stateReducer.error,
    // err:state.userReducer.error1,
    states:state.stateReducer.states,
    cities:state.cityReducer.cities,
    })

const mapDispatchToProps = dispatch =>{
    return{
    fetchstatedata:()=>dispatch(fetchstatedata()),
    // fetchcitiesdata:()=>dispatch(fetchcitiesdata()),
    fetchAllStatesBystate_id:(_id)=>dispatch(fetchAllStatesBystate_id(_id)),
    adduserdata: (postdata) => dispatch(adduserdata(postdata))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Sign);