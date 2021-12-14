import React from "react";
import { Switch, Route } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header/header";
import Headlines from "../pages/headlines/headlines";
import Home from "../pages/home/home";
import Slide from "../pages/slide/slide";
import Video from "../pages/Video/video";

const RouteHandle = () => {
  return (
    <Switch>
      <Route exact strict path="/" component={Home} />
      <Route exact strict path="/footer" component={Footer} />
      <Route exact strict path="/video" component={Video} />
      <Route exact strict path="/headlines" component={Headlines} />
      <Route exact strict path="/header" component={Header} />
      <Route exact strict path="/slide" component={Slide} />



    </Switch>
  );
};

export default RouteHandle;
