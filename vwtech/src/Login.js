import React, { Component } from 'react'
import {Row,Col} from 'react-bootstrap'
import logo from './img.png'
import User from './User'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import forgot from './forgot';
import register from './register'
export default class Login extends Component {
    constructor(props) {
        super(props)
        this.userID=React.createRef();
        this.psw=React.createRef();

        this.state = {
            userDetails:'',
            userPassword:'',
            response:[],
            login:false,
            forgot:false
        }
    }
    onResetButton = ()=>
    {
     return console.log("hii")
     

    }
    onJoinButton=()=>
    {
        return console.log("world")
    }
    
    loginDetails = async()=>
    {
        let json;
        let dataToSend = new FormData()
        dataToSend.append("registeredEmail",this.userID.current.value)
        dataToSend.append("registeredPassword",this.psw.current.value)
        dataToSend.append("funcName","verifyLogin")
        
        let response =await fetch("https://pulse.brninfotech.com/pulse/modules/admin/ValidateLogin.php",
        {
            method:'POST',
            body:dataToSend
        }
        )
        console.log(response)
        json =await response.json()
        console.log(json);
       (json.loggedIn=="no")?(alert(json.msg)):(this.setState({login:true,userDetails:json}))
    }
    render() {
        return (
            (this.state.login)?(<User user={this.state.userDetails}/>):
            (<div className="main">
            <div className="secmain"> 
           <Row>
         <Col><img className="image" src={logo}/> </Col>
         <div className="c2">
    <Col className="col2"><h1 className="login">Login</h1>
    <br/>
     <h2 className="logpara">Login to your account</h2>
     <p className="para1">Thank you for get back to Lottery Display,lets access our the best recommendation for you</p>
             <label className="un">Username</label>
             <br/>
             <input className="username"  type="text" placeholder="Email or Phone Number" ref={this.userID}/>
             <br/>
             <label className="psw">Password</label>
             <br/>
             <input className="password" type="password" placeholder="Password" ref={this.psw}/>
             <br/>
             <input className="rm" type="checkbox"/>
             <label className="rem" >Remember me</label>
          
           <Link className="rp" to={"./forgot"}  >Reset Password</Link>
           <br/>
           <button className="sigin"  onClick={this.loginDetails}>Sign In</button>
           <p className="para2">Don't have an account yet? <Link  to={"./join"} >Join Lottery Display</Link></p>
          
           
       
           </Col>
           
           </div>
           </Row></div>
            </div>)
            
        )
    }
}
