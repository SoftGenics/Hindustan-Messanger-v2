import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import "./leftSlideShow.css"
import Fathers from "../../image/LeftSlideShow/fathers.jfif";
import First from "../../image/LeftSlideShow/first.jpeg";
import Freedom from "../../image/LeftSlideShow/freedom.jpg";
import Salt from "../../image/LeftSlideShow/salt.jpg";


export default function LeftSlideShow() {
    return (
        <div  className="slidee" style={{  width: '100%' }}>
        <Carousel>
            <Carousel.Item interval={2000}>
            <img
                className="d-block w-100 ImageSlide"
    src={Fathers}
                alt="Website" 
            />
        
            </Carousel.Item>
            <Carousel.Item interval={1000}>
            <img
                className="d-block w-100 ImageSlide"
    src={First}
                alt="websiteTwo"
            />
            
            </Carousel.Item>
            <Carousel.Item interval={500}>
            <img
                className="d-block w-100 ImageSlide"
    src={Freedom}
                alt="website Three"
            />
            
            </Carousel.Item>
        </Carousel>
        </div>
    );
    }
