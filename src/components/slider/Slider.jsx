import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default Fade;


 export function Fade() {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src= "https://ru.freepik.com/free-photo/sports-car-driving-asphalt-road-night-generative-ai_40936318.htm#fromView=search&page=1&position=0&uuid=4558b100-e3e6-4d3b-bd9c-bdca9fb3c7e4" />
        </div>
        <div>
          <img src="https://ru.freepik.com/free-photo/powerful-headlights-particle-view-modern-luxury-cars-parked-indoors-daytime_9831317.htm#fromView=search&page=1&position=4&uuid=4558b100-e3e6-4d3b-bd9c-bdca9fb3c7e4" />
        </div>
        <div>
          <img src="https://ru.freepik.com/free-photo/headlights-hood-black-luxury-car_10522600.htm#fromView=search&page=1&position=6&uuid=4558b100-e3e6-4d3b-bd9c-bdca9fb3c7e4"/>
        </div>
        <div>
          <img src="https://ru.freepik.com/free-photo/luxurious-car-parked-highway-with-illuminated-headlight-sunset_30182536.htm#fromView=search&page=1&position=11&uuid=4558b100-e3e6-4d3b-bd9c-bdca9fb3c7e4" />
        </div>
      </Slider>
    </div>
  );
}



