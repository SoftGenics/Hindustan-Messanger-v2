import React,{useState} from 'react'
import "./rightSlideShow.css"
import Bagh from "../../image/RightSlideShow/bagh.jpeg";
import Freedom from "../../image/RightSlideShow/freedom.jpg";
import Goa from "../../image/RightSlideShow/goa.jpg";
import Indians from "../../image/RightSlideShow/indians.png";
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import HM from "../../components/image/video/HM.mp4";



export default function LeftSlideShow() {
 return (
        <div  className="slidee">
        <iframe  src={HM} className="d-block w-100 slideVideo" muted>
        </iframe>

        </div>
    );
    }