import React from 'react';
import  "./../css/login.css";
import {Form,Button} from "react-bootstrap";

const NewComponent = (props) => {

    const signUp = () =>{
        props.history.replace("/userreg");
    }
      return (  
        <Form className="login" style={{marginLeft: "500px",marginTop:"90px"}}>
          <header>Login</header>
          <div className="field"><span className="fa fa-user" /><input type="text" placeholder="Email or User Name" /></div>
          <div className="field"><span className="fa fa-lock" /><input type="password" placeholder="Password" /></div>
          {/*<span class="foot"><i class="fa fa-shopping-bag"></i>Buy Now</span>
          <span class="foot"><i class="fa fa-shopping-cart"></i>Add TO Cart</span>
        */}
          <div className="forgot-password"><a href="/">Forgot password?</a></div>
          <input type="submit" className="submit" defaultValue="LOGIN" />
          <span className="login-form-copy">Or login with</span>
          <div className="social-icons">
            {/*<li>COLOR</li>
            <li class="yellow"></li>
            <li class="black"></li>
            <li class="blue"></li>
          </ul>*/}
            <div className="social-icon facebook"><span className="fa fa-facebook" /></div>
            <div className="social-icon instagram"><span className="fa fa-instagram" /></div>
            <div className="social-icon twitter"><span className="fa fa-twitter" /></div>
            {/*<span class="foot"><i class="fa fa-shopping-bag"></i>Buy Now</span>
          <span class="foot"><i class="fa fa-shopping-cart"></i>Add TO Cart</span>
        */}
            <div className="social-icon google"><span className="fa fa-google" /></div>
            <div className="social-icon linkedin"><span className="fa fa-linkedin" /></div>
          </div>{/*<i class="fa fa-search"></i>
          <i class="fa fa-user"></i>
          <i class="fa fa-shopping-cart"></i>*/}
          <span className="logn-form-copy">Don't have an account? <a onClick={()=>{signUp()}} className="login-form__sign-up" style={{color:"#0074d9"}}>Sign Up</a></span>
        </Form>
    );
  }
  export default NewComponent;