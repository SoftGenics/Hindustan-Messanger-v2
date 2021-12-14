import React from "react";
import './slide.css'
import New from '../../image/new.jpg'
import LeftSlideShow from "../LeftSlideShow/leftSlideShow"
import RightSlideShow from "../RightslideShow/rightSlideShow"

const Slide = () => {
  return (
    <div>
    <h5 className="text-center headingSlide">Our History as a people and what we have gone through.
            </h5>
  <div className="d-flex justify-content-around  slideOverall">
  <div className="slideleft mt-5">
  <LeftSlideShow />
  </div>
  <div className="messageOfTheday mt-5">
  <h4 className="text-center ">
  <span className="messageTitle mt-2">
  <img src={New} alt="new" className="Newblink" />
  Message Of The day</span></h4>
  <p className="text-center Quotes"> In a day, when you don’t come across any problems – you can be sure that you are travelling in a wrong path.</p>
  <p className="text-right Quotes">Swami Vivekananda</p>
  </div>
  <div className="slideright  mt-5">
  <RightSlideShow />
  </div>
  </div>
  </div>
  );
};

export default Slide;
