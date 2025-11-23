import React from "react";
import "./Slide.scss";
import Slider from "react-slick"


const Slide = ({ children, slidesToShow, arrowsScroll }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: arrowsScroll,
  };
  return (
    <div className="slide">
      <div className="container">
        <Slider {...settings}>
          {children}
        </Slider>
      </div>
    </div>
  );
};

export default Slide;
