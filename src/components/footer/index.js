import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faEnvelopeOpen,  faMapMarkerAlt, faPhone } from "@fortawesome/free-solid-svg-icons";
import './footer.css'

const Footer = () => {
  return(
   <div>
  <section className="">
  <footer className="completeFooter text-white text-center">
    <div className="container p-4">
      <div className="row">
        <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
          <h5 className="text-uppercase">THE HINDUSTHAN MESSENGER</h5>

          <p>
            


          
          </p>
        </div>

        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="">Current
          </h5>

          <ul className="list-unstyled mb-0">
            <li>
              <a href="#!" className="text-white">India</a>
            </li>
            <li>
              <a href="#!" className="text-white">Latest News</a>
            </li>
            <li>
              <a href="#!" className="text-white">Indian History</a>
            </li>
            <li>
              <a href="#!" className="text-white">Indian Art and Craft</a>
            </li>
          </ul>
        </div>

        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className=" mb-0">About</h5>

          <ul className="list-unstyled">
            <li>
              <a href="#!" className="text-white mt-1"> 
                 <FontAwesomeIcon icon={faPhone}  className="footerPhone"/>
                 <i className="ml-1">930000000</i>
              </a>
            </li>
            <li>
              <a href="#!" className="text-white mt-1">
              <FontAwesomeIcon icon={faEnvelopeOpen}  className="footerPhone"/>
              <i className="ml-1">HMessanger@info.in</i>
              </a>
            </li>
            <li>
            <a href="#!" className="text-white mt-1">
            <FontAwesomeIcon icon={faMapMarkerAlt}  className="footerPhone"/>
            <i className="ml-1">Bhubaneshwar,Orissa,80027</i>
            </a>           
             </li>
        
          </ul>
        </div>
      </div>
    </div>

    <div className="text-center p-3 copyright">
      © 2021 Copyright:
      <a className="text-white ml-2" href="https://mdbootstrap.com/">HMessanger.com</a>
    </div>
  </footer>
</section>
  </div>
  )
};

export default Footer;
