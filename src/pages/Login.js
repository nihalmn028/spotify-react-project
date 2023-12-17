import '../style/loginstyle.css'
import spotifyLogo from '../images/spotifylogo.png';
import googleIcon from '../images/google.png';
import facebookIcon from '../images/facebook2.png';
import appleIcon from '../images/apple-logo.png';
import { Link } from 'react-router-dom'
import { useState } from 'react';

// import Signup from './Signup'

// import Forgotpass from './Forgotpass';


// export default function Router(){
//   return(
//     <BrowserRouter>
//     <Routes>
      
//       <Route path='/' element={<Login></Login>} ></Route>
//       <Route path='/signup' element={<Signup></Signup>} ></Route>
//       <Route path='/forgotpass' element={<Forgotpass></Forgotpass>} ></Route>
   




//     </Routes>
//     </BrowserRouter>
//   )
// }

 export default function Login() {
  const [inputData,setInputData]=useState({
    email:"",
    password:""
  })
  const [display,setDisplay]=useState({
    emaildisplay:"",
    passworddisplay:""
  })
  const inputChange=(event) =>{
const {name,value}=event.target
setInputData({...inputData,[name]:value})
  }
  const loginClick=(event)=>{
if(inputData.email=="" )
{
  event.preventDefault()

  setDisplay({...display,emaildisplay:"enter email"})
}
else if(inputData.email!="nihalmn3@gmail.com" )
{
  event.preventDefault()

  setDisplay({...display,emaildisplay:"enter valid email"})
}
else if(inputData.password=="")
{
  event.preventDefault()

  setDisplay({...display,passworddisplay:"enter password"})
}

else if(inputData.password!="1234" )
{
  event.preventDefault()

  setDisplay({...display,passworddisplay:"enter valid password"})
}
  }
  return (
    <>
    <div className="login_nav">
    <img className="login_logoimg" src={spotifyLogo} alt="" />
    </div>
    <div className="login_grey">
      <div className="login_size">
        <div className="login_loginoutbox">
          <div className="login_loginbox">
            <h1 className="login_heading">Log in to Spotify</h1>
            <div className="login_logibox2">
              <div className="login_google">
              <img className="login_googleimg" src={googleIcon} alt="" />               
               <h3 className="login_googleimgtxt">Continue with Google</h3>
              </div>
              <div className="login_google2" style={{ width: "100%" }}>
              <img className="login_googleimg" src={facebookIcon} alt="" />
                <h3 className="login_googleimgtxt">Continue with Facebook</h3>
              </div>
              <div className="login_google3">
              <img className="login_googleimg" src={appleIcon} alt="" />
                <h3 className="login_googleimgtxt">Continue with Apple </h3>
              </div>
              <div className="login_google4">
                <h3 className="login_googleimgtxt">Continue with phone number</h3>
              </div>
              <hr className="login_line1login" />
              <br />
              <p style={{color:"red",position:"absolute",top:"580px"}}>{display.emaildisplay}</p>

              <p className="login_emaillabel2">Email or username</p>
              <input
                type="email"
                className="login_emailbox"
                placeholder="Email or username"
                name='email'
                onChange={inputChange}
              />
              <p style={{color:"red",position:"absolute"}}>{display.passworddisplay}</p>

              <p className="login_emaillabel1">Password</p>
              <input
                type="password"
                className="login_emailbox"
                placeholder="Password"
                name='password'
                onChange={inputChange}
              />
              <div class="checkarea" style={{width:"40px"}}>
          <label class="switch">
            <input type="checkbox"/>
            <span class="slider round"></span>
          </label> 
        </div>
              <span className="login_emaillabel" htmlFor="">
                Remember me
              </span>
              <br />
              <Link to={'/home'}>    <button className="login_loginbtn" onClick={loginClick}>Log In</button></Link>
              <Link to={'/forgotpass'}><a href="forgotpass.html">
                {" "}
                <p className="login_emailpassforgot">Forgot your password?</p>
              </a></Link>
              <hr className="login_line2login" />
              <br />
              <p className="login_center">
                <em className="login_opacity">Don't have an account?</em>
                <Link to={'/signup'}>  <a href="signup.html">
                  {" "}
                  <em className="login_emailpassforgot1">Sign up for Spotify</em>
                </a></Link>
              </p>
            </div>
          </div>
        </div>
        <p className="login_opacity1">
          This site is protected by reCAPTCHA and the Google{" "}
          <em className="login_underline">Privacy Policy</em> and{" "}
          <em className="login_underline">Terms of Service</em> apply.
        </p>
      </div>
    </div>
  </>
  
  )
}




