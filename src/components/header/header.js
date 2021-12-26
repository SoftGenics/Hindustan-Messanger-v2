import React from "react";
import './header.css';
import { Link } from "react-router-dom";
import { Button, Dropdown } from 'react-bootstrap';
import Fb from "../image/fb.png"
import Insta  from "../image/insta.jpg"
import Twitter from "../image/twitter.jpg"
import Pin from "../image/Pin.jpg"
import Logo1 from "../image/logo/logo1.jpg"
import Audio from "../Audio/audio";



const Header = () => {
  return(
    <div>
   <div className="overalldiv">
   <div className="d-flex justify-content-between">
   <div>
   <img src={Logo1} alt="logo" className="logoImage" />
   <br />
   <span className="font-weight-bold NotjustNews" >Not just News.. but who is behind it!</span>
   </div>
   <div className="headerdiv mt-3">
   <h1 className="logoText "> <span className="logoSubText"> </span></h1>
</div>
<div>
   <div  className="d-flex">
      <img src={Fb} className="socailMedia mr-1" alt="Fb" />
      <img src={Insta} className="socailMedia mr-1" alt="Insta" />
      <img src={Twitter} className="socailMedia mr-1" alt="Twitter" />
      <img src={Pin} className="socailMedia mr-1" alt="Pin" />
      </div>
      <Audio />
      </div>
      </div>
</div>
   <ul className="d-flex justify-content-around  bg-secondary  w-100 listLogo">
   <ul className="d-flex justify-content-start  bg-secondary ">
   <li className="topListItem">
   <Button className="link text-white m-1" to="/write">
   EN
   </Button>
  </li>
  <li className="topListItem">
 <Button className="link text-white m-1" to="/write">
 HN
 </Button>
</li>
<li className="topListItem">
 <Button className="link text-white m-1" to="/write">
 OR
 </Button>
</li>
     </ul>
      
    <li className="topListItem">
    <Link className="link text-white" to="/">
    Our Message
    </Link>
  </li>
   <li className="topListItem">
   <Link className="link text-white" to="/">
   Home
   </Link>
 </li>   
 <li className="topListItem">
 <Link className="link text-white" to="/write">
 Hindusthan
 </Link>
</li>
<li className="topListItem">
 <Link className="link text-white" to="/video">
 Video
 </Link>
</li><li className="topListItem">
<Link className="link text-white" to="/write">
Archives...
</Link>
</li>
   </ul>
</div>
  )
};

export default Header;
