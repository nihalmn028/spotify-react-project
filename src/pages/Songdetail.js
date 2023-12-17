import { Link } from 'react-router-dom'

import '../style/songdetailstyle.css'
import spotifylogo from '../images/spotifylogo.png'
import house from '../images/house.png'
import search from '../images/search.png'
import internet from '../images/internet.png'
import lessthansymbol from '../images/less-than-symbol (1).png'
import greaterthansymbol from '../images/greater-than-symbol.png'

import spotifyblack from '../images/spotify black.png'
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

import heart from '../images/heart.png'
import more from '../images/more.png'
import list from '../images/list.png'
import threeoclockclock from '../images/three-o-clock-clock.png'
import playsmallwhite from '../images/playsmallwhite.png'
import song1 from '../images/song1.jpeg'
import song2 from '../images/song2.jpeg'
import song3 from '../images/song3.jpeg'
import song4 from '../images/song4.jpeg'
import song5 from '../images/song5.jpeg'

export default function Songdetail() {

               

 
  return (
    <>

     
    <div className="songdetail_main">
  <div className="songdetail_mainunder" >

  
  <div className="songdetail_leftsection">
<div className="songdetail_lefttop">
  <ul>
     <li>
      <a href="#">
        <img src={spotifylogo} alt="" className="songdetail_logoimg"/>

      </a>
     </li>
     <li>
      <a href="#">
        <div className="songdetail_home">
          <img src={house} alt="" className="songdetail_houseimg" />
          <span className="songdetail_hometext" >Home</span>
        </div>
        
      </a>
      

     </li>
     <li>
      <a href="#">
        <div className="songdetail_search">
          <img src={search} alt="" className="songdetail_searchimg" />
          <span className="songdetail_searchtext" >Search</span>
        </div>
        
      </a>
      

     </li>
  </ul>
 
</div>
<div className="songdetail_leftcenter">
  <div className="songdetail_plusdiv">
 <a href="">
        <div className="songdetail_library">
          
         
          <img src={librarylogo} alt="" className="songdetail_libraryimg" />
         
            <span className="songdetail_librarytext" >Your Library</span>
         
          </div>
        </a>
            <a href=""><span className="songdetail_plus">+</span></a>
          </div>
          <div className="songdetail_scroll">
<div className="songdetail_scrollinner"><a href="">
<p className="songdetail_scrollinnertext1" >Create your first playlist</p>
<p className="songdetail_scrollinnertext">It's easy,we'll help you</p></a>
<a href=""><button className="songdetail_scrollinnerbtn" type="button">Create playlist</button></a>
</div>
<div className="songdetail_scrollinnersecond"><a href="">
  <p className="songdetail_scrollinnertext1" >Let's find some podcasts to  follow</p>
  <p className="songdetail_scrollinnertext">We'll keep you updated on new  episodes</p></a>
  <a href=""><button className="songdetail_scrollinnerbtn" type="button">Browse podcasts</button></a>
</div>
          </div>
         
          
       
        
      
      

     
 
</div>
<div className="songdetail_leftbottom">
  <ul>
    <a href="">
    <li className="songdetail_leftbottomlistitem1">Legal</li></a>
    <a href="">
    <li className="songdetail_leftbottomlistitem">Privacy Center</li></a>
    <a href="">
    <li className="songdetail_leftbottomlistitem">Privacy Policy</li></a>
    <a href="">
    <li className="songdetail_leftbottomlistitem">Cookies</li></a>
  </ul>
  <ul className="songdetail_leftbottomlist">
    <a href="">
    <li className="songdetail_leftbottomlistitem1">About Ads</li></a>
    <a href="">
    <li className="songdetail_leftbottomlistitem">Accessibility</li></a>
    
  </ul>
  <ul className="songdetail_leftbottomlist">
    <a href="">
   
    <li className="songdetail_leftbottomlistitem1">Cookies</li></a>

    
  </ul>
  <a href=""><button type="button" className="songdetail_englishbtn"><div className="songdetail_btndiv">

  <img src={internet} alt="" className="songdetail_internetimg"/><span className="songdetail_englishtext">English</span>
</div>
</button></a>
  
</div>
  </div>
  <div className="songdetail_rightsection">
    <div className="songdetail_rightnavdiv">
<div className="songdetail_rightnav">
  <div className="songdetail_symgroup">
 <a href=""><div className="songdetail_symbdiv"><img src={lessthansymbol} alt="" className="songdetail_greatimg"/></div></a> 
  <a href=""><div className="songdetail_symbdivsecond"><img src={greaterthansymbol} alt="" className="songdetail_lessimg"/></div></a> 
</div>
<div>
 <Link to={'/signup'}> <a href="signup.html" className="songdetail_signtext">Sign up</a></Link>
 <Link to={'/login'}><a href="login.html"><button className="songdetail_scrollinnerbtn songdetail_custom">Log in</button></a></Link>

</div>
</div>
</div>
<div >
<div className="songdetail_happyhitdiv">
  <div className="songdetail_happyhitdivflex">

    <img src={image2} alt="" className="songdetail_image1size"/>
    <div className="songdetail_happyhitdivtext">
<p className="songdetail_p1">
  Playlist</p>
  <h1 >Happy Hits!</h1>
  <p className="songdetail_p2">Hits to boost your mood and fill you with happiness!</p>
<div className="songdetail_spotifyblackdiv">
  <img src={spotifyblack} alt=""/>
  <p>Spotify <em  className="songdetail_em2">.</em> 6,204,744 likes <em  className="songdetail_em2">. </em>
    100 songs, <em className="songdetail_em1" style={{textDecoration:"none"}}>about 4 hr 45 min</em></p>
</div>
    </div>

  </div>
  <div className="songdetail_playdiv">
    <div className="songdetail_playdiv2">
      <img src={play} alt="" className="songdetail_playimg"/>
      <img src={heart} alt="" className="songdetail_heartimg"/>
      <img src={more} alt="" className="songdetail_moreimg"/>
    </div>
   
    <div className="songdetail_listdiv">
      <p >List</p>
      <img src={list}alt="" className="songdetail_listimg"/>
    </div>
  </div>
</div>
<div className="songdetail_songlist">
<div className="songdetail_songlist1">
<p className="songdetail_symtxt">#</p>
<p className="songdetail_titletxt">Title</p>

<p className="songdetail_albumtxt">Album</p>

<p className="songdetail_datetxt">Date added</p>
<img src={threeoclockclock} alt="" className="songdetail_clockimg"/>

</div>
<hr className="songdetail_line" style={{width:"100%"}}/>
<Link to={'/songplay'}>
<div className="songdetail_songlist2 songdetail_mtop">
  <img src={playsmallwhite} alt="" className="songdetail_smallplayimg"/>
  <img src={heart} alt="" className="songdetail_smallheart"/>

  <img src={more} alt="" className="songdetail_smallmore"/>

  <p className="songdetail_txt1">1</p>
  <div className="songdetail_songlist2inner">
    <img src={song1} alt="" className="songdetail_songimg"/>
    <div className="songdetail_divwidth">
      <p className="songdetail_pfirst">Cruel Summer</p>
      <p className="songdetail_psecond">Taylor Swift</p>

    </div>

  </div>
  <div className="songdetail_tx2div">
    <p className="songdetail_txt2 songdetail_txt4">Lover</p>
  </div>
  <div className="songdetail_txt3div">
  <p className="songdetail_txt2">Sep 28, 2023</p>
</div>
<p className="songdetail_txt2">2:58</p>
</div>
</Link>
<Link to={'/songplay'}>

<div className="songdetail_songlist2">
  <img src={playsmallwhite} alt="" className="songdetail_smallplayimg"/>
  <img src={heart} alt="" className="songdetail_smallheart"/>

  <img src={more} alt="" className="songdetail_smallmore"/>
  <p className="songdetail_txt1">2</p>
  <div className="songdetail_songlist2inner">
    <img src={song2} alt="" className="songdetail_songimg"/>
    <div className="songdetail_divwidth">
      <p className="songdetail_pfirst">Dance The Night - From Barbie The Album</p>
      <p className="songdetail_psecond">Dua Lipa</p>

    </div>

  </div>
  <div className="songdetail_tx2div">
    <p className="songdetail_txt2 songdetail_txt4">Dance The Night (From Barbie The Album)</p>
  </div>
  <div className="songdetail_txt3div">
  <p className="songdetail_txt2">Sep 28, 2023</p>
</div>
<p className="songdetail_txt2">2:56</p>
</div>
</Link>
<Link to={'/songplay'}>

<div className="songdetail_songlist2">
  <img src={playsmallwhite} alt="" className="songdetail_smallplayimg"/>
  <img src={heart} alt="" className="songdetail_smallheart"/>

  <img src={more} alt="" className="songdetail_smallmore"/>
  <p className="songdetail_txt1">3</p>
  <div className="songdetail_songlist2inner">
    <img src={song3} alt="" className="songdetail_songimg"/>
    <div className="songdetail_divwidth">
      <p className="songdetail_pfirst">I'm Good (Blue)</p>
      <p className="songdetail_psecond">David Guetta, Bebe Rexha</p>

    </div>

  </div>
  <div className="songdetail_tx2div">
    <p className="songdetail_txt2 txt4">I'm Good (Blue)</p>
  </div>
  <div className="songdetail_txt3div">
  <p className="songdetail_txt2">Sep 28, 2023</p>
</div>
<p className="songdetail_txt2">2:55</p>
</div>
</Link>
<Link to={'/songplay'}>

<div className="songdetail_songlist2">
  <img src={playsmallwhite} alt="" className="songdetail_smallplayimg"/>
  <img src={heart} alt="" className="songdetail_smallheart"/>

  <img src={more} alt="" className="songdetail_smallmore"/>
  <p className="songdetail_txt1">4</p>
  <div className="songdetail_songlist2inner">
    <img src={song4} alt="" className="songdetail_songimg"/>
    <div className="songdetail_divwidth">
      <p className="songdetail_pfirst">I Ain't Worried</p>
      <p className="songdetail_psecond">OneRepublic</p>

    </div>

  </div>
  <div className="songdetail_tx2div">
    <p className="songdetail_txt2 songdetail_txt4">I Ain't Worried (Music From The Motion...</p>
  </div>
  <div className="songdetail_txt3div">
  <p className="songdetail_txt2">Sep 28, 2023</p>
</div>
<p className="songdetail_txt2">2:28</p>
</div>
</Link>
<Link to={'/songplay'}>

<div className="songdetail_songlist2">
  <img src={playsmallwhite} alt="" className="songdetail_smallplayimg"/>
  <img src={heart} alt="" className="songdetail_smallheart"/>

  <img src={more} alt="" className="songdetail_smallmore"/>
  <p className="songdetail_txt1">5</p>
  <div className="songdetail_songlist2inner">
    <img src={song5} alt="" className="songdetail_songimg"/>
    <div className="songdetail_divwidth">
      <p className="songdetail_pfirst">(It Goes Like) Nanana - Edit</p>
      <p className="songdetail_psecond">Peggy Gou</p>

    </div>

  </div>
  <div className="songdetail_tx2div">
    <p className="songdetail_txt2 songdetail_txt4">(It Goes Like) Nanana [Edit]</p>
  </div>
  <div className="songdetail_txt3div">
  <p className="songdetail_txt2">Sep 28, 2023</p>
</div>
<p className="songdetail_txt2">3:51</p>
</div>
</Link>

</div>
<div className="songdetail_rightfooter">
  <div className="songdetail_rightfooter1">
    <div>
<h3 className="songdetail_rightfootertxt">Company</h3>

<a href="" className="songdetail_signcustom ">About</a>

<a href="" className="songdetail_signcustom ">Jobs</a>

<a href="" className="songdetail_signcustom ">For the Record</a>


</div>
<div>
  <h3 className="songdetail_rightfootertxt">Communities</h3>
  
  <a href="" className="songdetail_signcustom ">For Artists</a>
  
  <a href="" className="songdetail_signcustom ">For Artists</a>
  
  <a href="" className="songdetail_signcustom ">Advertising</a>
  <a href="" className="songdetail_signcustom ">Investors</a>
  <a href="" className="songdetail_signcustom ">Vendors</a>
  
  
  </div>
  <div>
    <h3 className="songdetail_rightfootertxt">Useful links</h3>
    
    <a href="" className="songdetail_signcustom ">Support</a>
    
    <a href="" className="songdetail_signcustom ">Free Mobile App</a>
    
   
    
    
    </div>
  </div>
  <div className="songdetail_rightfooter2">
    <div className="songdetail_logosdiv">
      <div className="songdetail_logocontain">
      <img src={instagram} alt="" className="songdetail_logoimg2"/>
    </div>
    <div className="songdetail_logocontain">
      <img src={twitter} alt="" className="songdetail_logoimg2"/>
    </div>
    <div className="songdetail_logocontain">
      <img src={facebook} alt="" className="songdetail_logoimg2"/>
    </div>
    </div>
  </div>
  
</div>

<div className="songdetail_lastfooter">
  <hr className="songdetail_line" style={{width:"100%"}}/>
  <p className="songdetail_copytxt">&copy; 2023 Spotify AB</p>
</div>
</div>
<div className="songdetail_lastfooter">
  
  <p className="songdetail_copytxt">.</p>

</div>
  </div>

 </div>

 <div className="songdetail_lastsection">
  <div>
    <p className="songdetail_lastsectiontxt">PREVIEW OF SPOTIFY</p>
    <h3 className="songdetail_lastsectiontxt2">Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.</h3>
  </div>
  <div>
  <Link to={'/signup'}><button className="songdetail_scrollinnerbtn songdetail_custom songdetail_custom1">Sign Up Free</button></Link>
  </div>
</div>
</div>
</>
  )
}
