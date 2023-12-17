// import { useRef } from 'react'
import Data from './Data'
import React from 'react'
import '../style/songplaystyle.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
export default function Songplay() {
// const [data,setdata]=useState({
//   title:"",
//   image:"",
//   author:"",
//   song:""
// })


const audio=new Audio('song/Taylor-Swift--Cruel-Summer(pagalworld.co.uk).mp3')
const [currentaudio]=useState(audio)
const [isPlaying, setIsPlaying] = useState(false);
const togglePlay = () => {
  if (isPlaying==false) {
    currentaudio.play();
  } else {
    currentaudio.pause();

  }
  setIsPlaying(!isPlaying);
};
// function song2(){
//  setdata({...data,title:Data[1].title,image:Data[1].image,author:Data[0].author,song:Data[0].song})
// }

  
  return (
    <div className="songplay_main">
  <div className="songplay_mainunder">
    <div className="songplay_leftsection">
      <div className="songplay_lefttop">
        <ul>
          <li>
            <a href="#">
              <img src="images/spotifylogo.png" alt="" className="songplay_logoimg" />
            </a>
          </li>
          <li>
            <a href="#">
              <div className="songplay_home">
                <img src="images/house.png" alt="" className="songplay_houseimg" />
                <span className="songplay_hometext">Home</span>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="songplay_search">
                <img src="images/search.png" alt="" className="songplay_searchimg" />
                <span className="songplay_searchtext">Search</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div className="songplay_leftcenter">
        <div className="songplay_plusdiv">
          <a href="">
            <div className="songplay_library">
              <img src="images/librarylogo.png" alt="" className="songplay_libraryimg" />
              <span className="songplay_librarytext">Your Library</span>
            </div>
          </a>
          <a href="">
            <span className="songplay_plus">+</span>
          </a>
        </div>
        <div className="songplay_scroll">
          <div className="songplay_scrollinner">
            <a href="">
              <p className="songplay_scrollinnertext1">Create your first playlist</p>
              <p className="songplay_scrollinnertext">It's easy,we'll help you</p>
            </a>
            <a href="">
              <button className="songplay_scrollinnerbtn" type="button">
                Create playlist
              </button>
            </a>
          </div>
          <div className="songplay_scrollinnersecond">
            <a href="">
              <p className="songplay_scrollinnertext1">
                Let's find some podcasts to follow
              </p>
              <p className="songplay_scrollinnertext">
                We'll keep you updated on new episodes
              </p>
            </a>
            <a href="">
              <button className="songplay_scrollinnerbtn" type="button">
                Browse podcasts
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="songplay_leftbottom">
        <ul>
          <a href="">
            <li className="songplay_leftbottomlistitem1">Legal</li>
          </a>
          <a href="">
            <li className="songplay_leftbottomlistitem">Privacy Center</li>
          </a>
          <a href="">
            <li className="songplay_leftbottomlistitem">Privacy Policy</li>
          </a>
          <a href="">
            <li className="songplay_leftbottomlistitem">Cookies</li>
          </a>
        </ul>
        <ul className="songplay_leftbottomlist">
          <a href="">
            <li className="songplay_leftbottomlistitem1">About Ads</li>
          </a>
          <a href="">
            <li className="songplay_leftbottomlistitem">Accessibility</li>
          </a>
        </ul>
        <ul className="songplay_leftbottomlist">
          <a href="">
            <li className="songplay_leftbottomlistitem1">Cookies</li>
          </a>
        </ul>
        <a href="">
          <button type="button" className="songplay_englishbtn">
            <div className="songplay_btndiv">
              <img src="images/internet.png" alt="" className="songplay_internetimg" />
              <span className="songplay_englishtext">English</span>
            </div>
          </button>
        </a>
      </div>
    </div>
    <div className="songplay_rightsection">
      <div className="songplay_rightnavdiv">
        <div className="songplay_rightnav">
          <div className="songplay_symgroup">
            <a href="">
              <div className="songplay_symbdiv">
                <img
                  src="images/less-than-symbol (1).png"
                  alt=""
                  className="songplay_greatimg"
                />
              </div>
            </a>
            <a href="">
              <div className="songplay_symbdivsecond">
                <img
                  src="images/greater-than-symbol.png"
                  alt=""
                  className="songplay_lessimg"
                />
              </div>
            </a>
          </div>
          <div>
          <Link to={'/signup'}>  <a href="signup.html" className="songplay_signtext">
              Sign up
            </a></Link>
            <Link to={'/login'}>  <a href="login.html">
              <button className="songplay_scrollinnerbtn songplay_custom">Log in</button>
            </a></Link>
          </div>
        </div>
      </div>
      <div>
        <div className="songplay_happyhitdiv">
          <div className="songplay_happyhitdivflex">
            <img src='images/song11.jpeg' alt="" className="songplay_image1size" />
            <div className="songplay_happyhitdivtext">
              <p className="songplay_p1" style={{ opacity: ".7" }}>
                Song
              </p>
              <h1 style={{ fontSize: 100 }}>Cruel Summer</h1>
              <div className="songplay_spotifyblackdiv">
                <img
                  src="images/s1.jpeg"
                  alt=""
                  style={{ borderRadius: "50%" }}
                />
                <p>
                  Taylor Swift<em className="songplay_em2">.</em> Lover{" "}
                  <em className="songplay_em2">. </em>
                  2019 <em className="songplay_em2">. </em>2:58
                  <em className="songplay_em2"> . </em>1,455,635,719
                </p>
              </div>
            </div>
          </div>
          <div className="songplay_playdiv">
            <div className="songplay_playdiv2">
              <img src="images/play.png" alt="" className="songplay_playimg" />
              <img src="images/heart.png" alt="" className="songplay_heartimg" />
              <img src="images/more.png" alt="" className="songplay_moreimg" />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              padding: 20,
              marginTop: 5,
              gap: 20,
              alignItems: "center"
            }}
          >
            <img
              src="images/s1.jpeg"
              alt=""
              style={{ height: 80, width: 80, borderRadius: "50%" }}
            />
            <div>
              <p style={{ color: "white", fontWeight: "bold" }}>Artist</p>
              <p style={{ color: "white", fontWeight: "bold" }}>Taylor Swift</p>
            </div>
          </div>
        </div>
        <div className="songplay_songlist">
          <div style={{ padding: 20, paddingBottom: 0 }}>
            <h2 style={{ color: "white", fontWeight: "bold" }}>Recommended</h2>
            <p style={{ color: "white", fontWeight: "bold", opacity: ".7" }}>
              {" "}
              Based on this song
            </p>
          </div>
       <div className="songplay_songlist2 mtop">
            <img
              src="images/playsmallwhite.png"
              alt=""
              className="songplay_smallplayimg"
            />
            <img src="images/heart.png" alt="" className="songplay_smallheart" />
            <img src="images/more.png" alt="" className="songplay_smallmore" />
            <div className="songplay_songlist2inner">
              <img src="images/song1.jpeg" alt="" className="songplay_songimg" />
              <div className="songplay_divwidth">
                <p className="songplay_pfirst">Cruel Summer</p>
                <p className="songplay_psecond">Taylor Swift</p>
              </div>
            </div>
            <div className="songplay_tx2div"></div>
            <div className="songplay_txt3div">
              <p className="songplay_txt2">1,065,865,576</p>
            </div>
            <p className="songplay_txt2">2:58</p>
          </div>
          <div className="songplay_songlist2" >
            <img
              src="images/playsmallwhite.png"
              alt=""
              className="songplay_smallplayimg"
            />
            <img src="images/heart.png" alt="" className="songplay_smallheart" />
            <img src="images/more.png" alt="" className="songplay_smallmore" />
            <div className="songplay_songlist2inner">
              <img src="images/song2.jpeg" alt="" className="songplay_songimg" />
              <div className="songplay_divwidth">
                <p className="songplay_pfirst">
                  Dance The Night - From Barbie The Album
                </p>
                <p className="songplay_psecond">Dua Lipa</p>
              </div>
            </div>
            <div className="songplay_tx2div"></div>
            <div className="songplay_txt3div">
              <p className="songplay_txt2">607,311,769</p>
            </div>
            <p className="songplay_txt2">2:56</p>
          </div>
          <div className="songplay_songlist2">
            <img
              src="images/playsmallwhite.png"
              alt=""
              className="songplay_smallplayimg"
            />
            <img src="images/heart.png" alt="" className="songplay_smallheart" />
            <img src="images/more.png" alt="" className="songplay_smallmore" />
            <div className="songplay_songlist2inner">
              <img src="images/song3.jpeg" alt="" className="songplay_songimg" />
              <div className="songplay_divwidth">
                <p className="songplay_pfirst">I'm Good (Blue)</p>
                <p className="songplay_psecond">David Guetta, Bebe Rexha</p>
              </div>
            </div>
            <div className="songplay_tx2div"></div>
            <div className="songplay_txt3div">
              <p className="songplay_txt2">170,455,457</p>
            </div>
            <p className="songplay_txt2">2:55</p>
          </div>
          <div className="songplay_songlist2">
            <img
              src="images/playsmallwhite.png"
              alt=""
              className="songplay_smallplayimg"
            />
            <img src="images/heart.png" alt="" className="songplay_smallheart" />
            <img src="images/more.png" alt="" className="songplay_smallmore" />
            <div className="songplay_songlist2inner">
              <img src="images/song4.jpeg" alt="" className="songplay_songimg" />
              <div className="songplay_divwidth">
                <p className="songplay_pfirst">I Ain't Worried</p>
                <p className="songplay_psecond">OneRepublic</p>
              </div>
            </div>
            <div className="songplay_tx2div"></div>
            <div className="songplay_txt3div">
              <p className="songplay_txt2">185,028,886</p>
            </div>
            <p className="songplay_txt2">2:28</p>
          </div>
          <div className="songplay_songlist2">
            <img
              src="images/playsmallwhite.png"
              alt=""
              className="songplay_smallplayimg"
            />
            <img src="images/heart.png" alt="" className="songplay_smallheart" />
            <img src="images/more.png" alt="" className="songplay_smallmore" />
            <div className="songplay_songlist2inner">
              <img src="images/song5.jpeg" alt="" className="songplay_songimg" />
              <div className="songplay_divwidth">
                <p className="songplay_pfirst">(It Goes Like) Nanana - Edit</p>
                <p className="songplay_psecond">Peggy Gou</p>
              </div>
            </div>
            <div className="songplay_tx2div"></div>
            <div className="songplay_txt3div">
              <p className="songplay_txt2">285,542,246</p>
            </div>
            <p className="songplay_txt2">3:51</p>
          </div>
        </div>
        <div className="songplay_rightfooter">
          <div className="songplay_rightfooter1">
            <div>
              <h3 className="songplay_rightfootertxt">Company</h3>
              <a href="" className="songplay_signcustom ">
                About
              </a>
              <a href="" className="songplay_signcustom ">
                Jobs
              </a>
              <a href="" className="songplay_signcustom ">
                For the Record
              </a>
            </div>
            <div>
              <h3 className="songplay_rightfootertxt">Communities</h3>
              <a href="" className="songplay_signcustom ">
                For Artists
              </a>
              <a href="" className="songplay_signcustom ">
                For Artists
              </a>
              <a href="" className="songplay_signcustom ">
                Advertising
              </a>
              <a href="" className="songplay_signcustom ">
                Investors
              </a>
              <a href="" className="songplay_signcustom ">
                Vendors
              </a>
            </div>
            <div>
              <h3 className="songplay_rightfootertxt">Useful links</h3>
              <a href="" className="songplay_signcustom ">
                Support
              </a>
              <a href="" className="songplay_signcustom ">
                Free Mobile App
              </a>
            </div>
          </div>
          <div className="songplay_rightfooter2">
            <div className="songplay_logosdiv">
              <div className="songplay_logocontain">
                <img src="images/instagram.png" alt="" className="songplay_logoimg2" />
              </div>
              <div className="songplay_logocontain">
                <img src="images/twitter.png" alt="" className="songplay_logoimg2" />
              </div>
              <div className="songplay_logocontain">
                <img src="images/facebook.png" alt="" className="songplay_logoimg2" />
              </div>
            </div>
          </div>
        </div>
        <div className="songplay_lastfooter">
          <hr className="songplay_line"  style={{width:"100%"}}/>
          <p className="songplay_copytxt">© 2023 Spotify AB</p>
        </div>
      </div>
      <div className="songplay_lastfooter">
        <p className="songplay_copytxt">.</p>
      </div>
    </div>
  </div>
  <div className="songplay_lastsection" style={{background:"black"}}>
    <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
      <img
        src="images/song11.jpeg"
        alt=""
        style={{ height: 50, width: 50, borderRadius: 5 }}
      />
      <div>
        <p className="songplay_pfirst">Cruel Summer</p>
        <p className="songplay_psecond">Taylor Swift</p>
      </div>
      <img src="images/heart.png" alt="" style={{ height: 20, width: 20 }} />
    </div>
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 20,justifyContent:'center' }}>
        <img
          src="images/shuffle.png"
          alt=""
          style={{ height: 20, width: 20 }}
        />
        <img
          src="images/backwared.png"
          alt=""
          style={{ height: 20, width: 20 }}
        />
        <button type='button' onClick={togglePlay} 
          style={{
            padding: 10,
            backgroundColor: "white",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border:"none"
          }}
        >
          <img
            src={isPlaying?'images/pause.png':'images/play black.png'}
            alt=""

            style={{ height: 20, width: 20 }}
          />
        </button>
        <img
          src="images/forward.png"
          alt=""
          style={{ height: 20, width: 20 }}
        />
        <img src="images/repeat.png" alt="" style={{ height: 20, width: 20 }} />
      </div>
      <div>
 

      <div class="music-player" >
    <div class="duration-bar" style={{height:"5px",marginTop:"15px",width:"400px"}}>
      <div class="progress-bar"></div>
      <div class="indicator"></div>
    </div>
  </div>

      </div>
    </div>
    <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
      <div
        style={{
          backgroundColor: "black",
          border: "2px solid white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 3
        }}
      >
        <img
          src="images/play white.png"
          alt=""
          style={{ height: 10, width: 10 }}
        />
      </div>
      <img src="images/mic.png" alt="" style={{ height: 21, width: 21 }} />
      <img src="images/queue.png" alt="" style={{ height: 23, width: 23 }} />
      <img src="images/connect.png" alt="" style={{ height: 20, width: 20 }} />
      <img src="images/speaker.png" alt="" style={{ height: 20, width: 20 }} />
      <div class="music-player" >
    <div class="duration-bar" style={{height:"5px",width:"80px"}}>
      <div class="progress-bar"></div>
      <div class="indicator"></div>
    </div>
  </div>      <img
        src="images/miniscreen.png"
        alt=""
        style={{ height: 25, width: 25 }}
      />
    </div>
  </div>
</div>

  )
}
