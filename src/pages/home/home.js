import React from "react";
import  Header  from "../../components/header/header";
import Footer from "../../components/footer";
import Headlines from "../headlines/headlines";
import Slide from "../slide/slide";
import Video  from "../Video/video";

const RouteHandle = () => {
  return (
    <div>
    <Header />
    <Slide />
    <Video />
    <Headlines />
    <Footer />
    </div>
  );
};

export default RouteHandle;
