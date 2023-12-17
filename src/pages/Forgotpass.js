import React from 'react'
import captcha from '../images/captcha.png'
import logoimg from '../images/spotifylogo.png'
import '../style/forgotpassstyle.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Forgotpass() {
  const [displayvalue,setdisplayvalue]=useState('')
  const [show,setshow]=useState("")
  const inputChange=(event)=>{
    setdisplayvalue(event.target.value)
   }
  const clickEnter=(e)=>{
    if(displayvalue=="")
    {
      e.preventDefault()
      setshow("enter email")
    }
    else if(displayvalue!="nihalmn3@gmail.com")
    {
      e.preventDefault()
      setshow("please enter valid email")
    }
  }
  return (
    <>
    <div className="forgot_nav">
    <img className="forgot_logoimg" src={logoimg} alt=""/>
  </div >
  <div className="forgot_mainn">
  <div className="forgot_box">
    <h1 className="forgot_headingg">Password Reset</h1>
    <p className="forgot_p11">Enter your Spotify username, or the email address that you <br/> used to register. We'll send you an email with your username <br/> and a link to reset your password.</p>
    <span style={{color:"red",position:"absolute",top:"168px"}}>{show}</span>

    <p className="forgot_s1">Email address or username
    </p>
    <input type="text"  id="" placeholder="Email address or username" className="forgot_in1" onChange={inputChange}/>
    <div className="forgot_centerdv">
      <Link to={'/home'}><button className="forgot_btnsend" onClick={clickEnter}>Send</button></Link>

    </div>
    <p className="forgot_p12">If you still need help, check out  <em>Spotify Support</em></p>
    
  </div>
  <div className="forgot_capt">
    <div className="forgot_divcap">
      <img src={captcha} alt="" className="forgot_capimg"/>
      <p className="forgot_psm">Privacy-Terms</p>
    </div>
    <div className="forgot_blu">
      <p className="forgot_p13">protected by reCAPTCHA <br/>
       <em>Privacy - Terms</em> </p>
    </div>
  </div>
</div>
</>
  )
}
