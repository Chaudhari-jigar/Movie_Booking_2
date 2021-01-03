import React,{useState,useEffect} from 'react';
// import  "./../css/login.css";
import {connect} from 'react-redux';
import {login} from '../store/action/userAction';
import {Form,Button,Input} from "antd";
import Logo from '../Movie_logo/Admin3.jpg'
import './css/Home';
import { Link } from 'react-router-dom';


const Sign = (props) =>{
   
    const [form] = Form.useForm();
   
    useEffect(()=>{
    if(props.token===true){
        props.history.replace("/city");
    }
    },[props.token])
   
    const [obj,setMyObj] = useState({
    email:"",
    password:"",
    });
   
    const [error,setError]=useState(false);
    const handleSubmit = async () =>{
        await props.login(obj.email,obj.password);
        if(props.token!==true && obj.email && obj.password){
         setError(true);
        }
    }

    const signUp = () =>{
        props.history.replace("/userreg");
    }

    const HandleChange = (e,name) =>{
        let olddata = {...obj};
        olddata[name] = e.target.value;
        setMyObj(olddata)
    }
      return (
        <>
                    <section class="account-section bg_img" data-background="assets/images/account/account-bg.jpg" style={{backgroundColor: "#0a1e5e"}}>
                <div class="container">
                    <div class="padding-top padding-bottom">
                        <div class="account-area">
                            <div class="section-header-3">
                                <span class="cate"><img src={Logo} style={{height: "60px",width: "60px",marginLeft:"05px",borderBottomLeftRadius: "43px",borderBottomRightRadius: "43px",borderTopLeftRadius: "43px",borderTopRightRadius: "43px"}}/></span>
                                <h2 class="title">Users Login</h2>
                            </div>
                            {/* <form class="account-form">
                                <div class="form-group">
                                    <label for="email2">Email<span>*</span></label>
                                    <input type="text" placeholder="Enter Your Email" id="email2" required />
                                </div>
                                <div class="form-group">
                                    <label for="pass3">Password<span>*</span></label>
                                    <input type="password" placeholder="Password" id="pass3" required />
                                </div>
                                <div class="form-group checkgroup">
                                    <input type="checkbox" id="bal2" required checked />
                                    <label for="bal2">remember password</label>
                                    <a href="#0" class="forget-pass">Forget Password</a>
                                </div>
                                <div class="form-group text-center">
                                    <input type="submit" value="log in" />
                                </div>
                            </form> */}
                            <Form class="account-form" form={form}>
                                <div className="field" style={{marginLeft:"39px"}}>
                                    <span className="fa fa-user" />
                                    <Form.Item
                                        name="email"
                                        style={{marginLeft:"41px",width:"300px"}}
                                        rules={[
                                            {
                                            type: 'email',
                                            message: 'The input is not valid E-mail!',
                                            },
                                            {
                                            required: true,
                                            message: 'Please input your E-mail!',
                                            },
                                        ]}
                                        >
                                        <Input placeholder="Enter Your email" onChange={(e) => {HandleChange(e,"email")}}/></Form.Item>
                                </div>
                                <div className="field" style={{marginLeft:"39px"}}>
                                    <span className="fa fa-lock" />
                                    <Form.Item
                                        style={{width:"300px",marginLeft: "41px",height:"30px"}}
                                        name="password"
                                        rules={[
                                            {
                                            required: true,
                                            message: 'Please input your password!',
                                            },
                                        ]}
                                        hasFeedback
                                        >
                                        <Input.Password  placeholder="*************" onChange={(e) => {HandleChange(e,"password")}}/>
                                        </Form.Item>
                                </div>
                                {(error)?<h4 style={{color:"red"}}>You are Not Unable to Login !!</h4>:""}
                                <Form.Item>
                                    <Button type="primary" htmlType="submit" onClick={() =>handleSubmit()} style={{width:"120px",marginLeft:"165px",marginTop:"57px"}}>Login</Button>
                                    </Form.Item>
                                </Form>
                            <div class="option">
                                Don't have an account? <Link to="/sign-up" className="active">Sign up now</Link>
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
        err1:state.userReducer.error1,
        singleuser:state.userReducer.singleuser,
        token:state.userReducer.token ? true : false
    
      })
    
    const mapDispatchToProps = dispatch =>{
      return{
        login:(email,password)=>dispatch(login(email,password))
      }
    }
    export default connect(mapStateToProps,mapDispatchToProps)(Sign);