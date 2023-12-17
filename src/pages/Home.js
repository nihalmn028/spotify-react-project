import React from 'react'
import '../style/homestyle.css'
import spotifylogo from '../images/spotifylogo.png'
import house from '../images/house.png'
import search from '../images/search.png'
import internet from '../images/internet.png'
import lessthansymbol from '../images/less-than-symbol (1).png'
import greaterthansymbol from '../images/greater-than-symbol.png'

import play from '../images/play.png'
import image1 from '../images/image1.jpg'
import image2 from '../images/image2.jpg'

import image3 from '../images/image3.jpg'
import image4 from '../images/image4.jpg'
import image5 from '../images/image5.jpg'
import instagram from '../images/instagram.png'
import twitter from '../images/twitter.png'
import facebook from '../images/facebook.png'
import librarylogo from '../images/librarylogo.png'
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'
import Songdetail from './Songdetail'
import Forgotpass from './Forgotpass'
import Songplay from './Songplay'




export default function Routerhome(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home></Home>} ></Route>
      <Route path='/login' element={<Login></Login>} ></Route>
      <Route path='/signup' element={<Signup></Signup>} ></Route>
      <Route path='/forgotpass' element={<Forgotpass></Forgotpass>} ></Route>
      <Route path='/songdetail' element={<Songdetail></Songdetail>} ></Route>
      <Route path='/songplay' element={<Songplay></Songplay>} ></Route>
      <Route path='/home' element={<Home></Home>} ></Route>


   

   




    </Routes>
    </BrowserRouter>
  )
}

 function Home() {
  return (
    <>
      <div className="home_main">
        <div className="home_mainunder" >


          <div className="home_leftsection">
            <div className="home_lefttop">
              <ul>
                <li>
                  <a href="#">
                    <img src={spotifylogo} alt="" className="home_logoimg" style={{width:"100px"}} />

                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="home_home">
                      <img src={house} alt="" className="home_houseimg" />
                      <span className="home_hometext" >Home</span>
                    </div>

                  </a>


                </li>
                <li>
                  <a href="#">
                    <div className="home_search">
                      <img src={search} alt="" className="home_searchimg" />
                      <span className="home_searchtext" >Search</span>
                    </div>

                  </a>


                </li>
              </ul>

            </div>
            <div className="home_leftcenter">
              <div className="home_plusdiv">
                <a href="">
                  <div className="home_library">


                    <img src={librarylogo} alt="" className="home_libraryimg" />

                    <span className="home_librarytext" >Your Library</span>

                  </div>
                </a>
                <a href=""><span className="home_plus">+</span></a>
              </div>
              <div className="home_scroll">
                <div className="home_scrollinner"><a href="">
                  <p className="home_scrollinnertext1" >Create your first playlist</p>
                  <p className="home_scrollinnertext">It's easy,we'll help you</p></a>
                  <a href=""><button className="home_scrollinnerbtn" type="button">Create playlist</button></a>
                </div>
                <div className="home_scrollinnersecond"><a href="">
                  <p className="home_scrollinnertext1" >Let's find some podcasts to  follow</p>
                  <p className="home_scrollinnertext">We'll keep you updated on new  episodes</p></a>
                  <a href=""><button className="home_scrollinnerbtn" type="button">Browse podcasts</button></a>
                </div>
              </div>









            </div>
            <div className="home_leftbottom">
              <ul>
                <a href="">
                  <li className="home_leftbottomlistitem1">Legal</li></a>
                  <a href="">
                    <li className="home_leftbottomlistitem">Privacy Center</li></a>
                  <a href="">
                    <li className="home_leftbottomlistitem">Privacy Policy</li></a>
                  <a href="">
                    <li className="home_leftbottomlistitem">Cookies</li></a>
              </ul>
              <ul className="home_leftbottomlist">
                <a href="">
                  <li className="home_leftbottomlistitem1">About Ads</li></a>
                <a href="">
                  <li className="home_leftbottomlistitem">Accessibility</li></a>

              </ul>
              <ul className="home_leftbottomlist">
                <a href="">

                  <li className="home_leftbottomlistitem1">Cookies</li></a>


              </ul>
              <a href=""><button type="button" className="home_englishbtn"><div className="home_btndiv">

                <img src={internet} alt="" className="home_internetimg" /><span className="home_englishtext">English</span>
              </div>
              </button></a>

            </div>
          </div>
          <div className="home_rightsection">
            <div className="home_rightnavdiv">
              <div className="home_rightnav">
                <div className="home_symgroup">
                  <a href=""><div className="home_symbdiv"><img src={lessthansymbol} alt="" className="home_greatimg" /></div></a>
                  <a href=""><div className="home_symbdivsecond"><img src={greaterthansymbol} alt="" className="home_lessimg" /></div></a>
                </div>
                <div>
                <Link to={"/signup"}>  <a href="signup.html" className="home_signtext">Sign up</a></Link>
                  <Link to={"/login"}><a href="login.html"><button className="home_scrollinnerbtn home_custom">Log in</button></a></Link>

                </div>
              </div>
            </div>
            <div >
              <div className="home_rightcenter">
                <div className="home_showdiv">
                  <a href=""><span className="home_spotifytxt">Spotify Playlists</span></a>
                  <a href=""><span className="home_signtext2">Show all</span></a>
                </div>
                <div className="home_songsdiv">
                  <Link to={"/songdetail"}><a href="songdetail.html">
                    <div className="home_songsdivitem">
                      <img className="home_playomg" src={play} alt="" />
                      <img className="home_songimg" src={image2} alt="" />
                      <h3 className="home_imgtextbig">Happy Hits!</h3>
                      <p className="home_imgtextsmall">Hits to boost your mood <br /> and fill you with happiness!</p>
                    </div>
                  </a></Link>
                  <a href="">
                    <div className="home_songsdivitem">
                      <img className="home_playomg" src={play} alt="" />

                      <img className="home_songimg" src={image3} alt="" />
                      <h3 className="home_imgtextbig">Calming Acoustic</h3>
                      <p className="home_imgtextsmall">Keep calm with <br /> instrumental acoustic...</p>

                    </div></a>
                  <a href="">
                    <div className="home_songsdivitem">
                      <img className="home_playomg" src={play} alt="" />

                      <img className="home_songimg" src={image1} alt="" />
                      <h3 className="home_imgtextbig">Christmas Classics</h3>
                      <p className="home_imgtextsmall">Timeless heart-warming <br /> classics from 1940-1980...</p>
                    </div></a>
                  <a href="">
                    <div className="home_songsdivitem">
                      <img className="home_playomg" src={play} alt="" />

                      <img className="home_songimg" src={image4} alt="" />
                      <h3 className="home_imgtextbig">lofi chill</h3>
                      <p className="home_imgtextsmall">Lazy slow lofi beats for <br /> laid-back moments.</p>
                    </div></a>
                  <a href="">
                    <div className="home_songsdivitem">
                      <img className="home_playomg" src={play} alt="" />

                      <img className="home_songimg" src={image5} alt="" />
                      <h3 className="home_imgtextbig">Viral Hits</h3>
                      <p className="home_imgtextsmall">Viral, trending and taking <br /> off.</p>
                    </div></a>
                </div>
              </div>
              <div className="home_rightfooter">
                <div className="home_rightfooter1">
                  <div>
                    <h3 className="home_rightfootertxt">Company</h3>

                    <a href="" className="home_signcustom ">About</a>

                    <a href="" className="home_signcustom ">Jobs</a>

                    <a href="" className="home_signcustom ">For the Record</a>


                  </div>
                  <div>
                    <h3 className="home_rightfootertxt">Communities</h3>

                    <a href="" className="home_signcustom ">For Artists</a>

                    <a href="" className="home_signcustom ">For Artists</a>

                    <a href="" className="home_signcustom ">Advertising</a>
                    <a href="" className="home_signcustom ">Investors</a>
                    <a href="" className="home_signcustom ">Vendors</a>


                  </div>
                  <div>
                    <h3 className="home_rightfootertxt">Useful links</h3>

                    <a href="" className="home_signcustom ">Support</a>

                    <a href="" className="home_signcustom ">Free Mobile App</a>




                  </div>
                </div>
                <div className="home_rightfooter2">
                  <div className="home_logosdiv">
                    <div className="home_logocontain">
                      <img src={instagram} alt="" className="home_logoimg2" />
                    </div>
                    <div className="home_logocontain">
                      <img src={twitter} alt="" className="home_logoimg2" />
                    </div>
                    <div className="home_logocontain">
                      <img src={facebook} alt="" className="home_logoimg2" />
                    </div>
                  </div>
                </div>

              </div>

              <div className="home_lastfooter">
                <hr className="home_line" />
                <p className="home_copytxt">&copy; 2023 Spotify AB</p>
              </div>
            </div>
            <div className="home_lastfooter">

              <p className="home_copytxt">.</p>

            </div>
          </div>

        </div>

        <div className="home_lastsection">
          <div>
            <p className="home_lastsectiontxt">PREVIEW OF SPOTIFY</p>
            <h3 className="home_lastsectiontxt2">Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.</h3>
          </div>
          <div>
          <Link to={"/signup"}> <button className="home_scrollinnerbtn home_custom home_custom1">Sign Up Free</button></Link>
          </div>
        </div>
      </div>
    </>
  )
}
