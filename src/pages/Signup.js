import React from 'react'
import '../style/signupstyle.css'
import google from '../images/google.png'
import facebook2 from '../images/facebook2.png'
import spotifylogo from '../images/spotifylogo.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'


export default function Signup() {
  const [displayvalue,setdisplayvalue]=useState('')
  const [show,setshow]=useState("")
//   let word

//   const [input,setInput]=useState({
//     email:""
//   })
//   function inputChange(event){
//     const {name,value}=event.target
//   // const name=  event.target.name
//   // const value=  event.target.value

// setInput({...input,[name]:value})

//   }

   

 

//  function clickEnter(){
//   if(input.email==""){
//     return(
//       word="enter the email"

//     )
//   }
//   else{
//     return(
//       word="enter the "

//     )

//   }
//  }

 const inputChange=(event)=>{
  setdisplayvalue(event.target.value)
 }
const clickEnter=(e)=>{
  if(displayvalue=="" )
  {
    e.preventDefault()
    setshow("Please Enter Email")
  }
  // else if(displayvalue!="nihalmn@gmail.com")
  // {
  //   e.preventDefault()
  //   setshow("please entervalid")
  // }

}
  return (
    <>
    <div className="signup_nav">
    <img src={spotifylogo} alt=""/>

  </div>
  <div className="signup_main">
    <div className="signup_signupsection">
      <h1>Sign up to start <br/> listening</h1>
<span style={{color:"red",position:"absolute",top:"270px"}}>{show}</span>
      <p className="signup_emailtxt">Email address</p>
      
      <input type="email" placeholder="name@domain.com" onChange={inputChange} name='email'  className="signup_width signup_input1" />
      <br/><p className="signup_greenunderline">Use phone number instead.</p>
      <br/>

  <Link to={'/home'}>  <button className="signup_nextbtn" onClick={clickEnter}>Next</button></Link>
      <br/>
      <div className="signup_linediv">
      <hr className="signup_linee "/>
      <span className="signup_ortxt">or</span>
      <hr className="signup_linee "/>
    </div>
    <div className="signup_google">
      <img className="signup_googleimg" src={google} alt=""/>
      <h3 className="signup_googleimgtxt">Sign Up with Google</h3>
    </div>
    <div className="signup_google2" style={{width: "100%"}}>
      <img className="signup_googleimg" src={facebook2} alt=""/>
      <h3 className="signup_googleimgtxt">Sign Up with Facebook</h3>
    </div>
    <hr className="signup_line2" style={{opacity:.5}}/>
    <p className="signup_alreadyp1"><em className="signup_alreadyp">Already have an account?</em> <Link to={'/login'}><a href="login.html">
      <em className="signup_em1">Log in here.</em> </a></Link> </p>
      <p className="signup_lastp">This site is protected by reCAPTCHA and the Google <br/>
       <em> Privacy Policy </em>and <em> Terms of Service </em> apply.</p>
    </div>
  </div>
  </>
  )
}
