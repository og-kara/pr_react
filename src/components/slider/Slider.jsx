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
          <img src="https://img.freepik.com/free-photo/luxurious-car-parked-highway-with-illuminated-headlight-sunset_181624-60607.jpg?t=st=1730404549~exp=1730408149~hmac=c39c3f9e9f909bee20271366a5cae8aa01327941a19fb5a5b47d48363df2e1de&w=996" />
        </div>
        <div>
          <img src="https://img.freepik.com/free-photo/headlights-hood-black-luxury-car_146671-19730.jpg?t=st=1730404847~exp=1730408447~hmac=bbe0359c4c2a709d183d2e1731d17c3607bbb77145636fe4014d5de243ba09e6&w=996"/>
        </div>
        <div>
          <img src="https://img.freepik.com/free-photo/car-headlight-buildings-reflecting-headlight-car_181624-44601.jpg?t=st=1730404874~exp=1730408474~hmac=8da64499bc3ac14fdb8e5e4c9f4eed3bb115c0f2f37d44e90b9e3e558c233bd4&w=740" />
        </div>
      </Slider>
    </div>
  );
}



