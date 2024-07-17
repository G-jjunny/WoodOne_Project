import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image1 from "../../assets/bgMain.jpg";
import Image2 from "../../assets/banner2.jpg";
import Image3 from "../../assets/banner3.jpg";
import styled from "styled-components";
import SlideItem from "../SlideItem";

const StyledSlider = styled.div`
  /* react-slick css */
  .slick-dots {
    position: absolute;
    bottom: 20px;
  }
  .slick-dots li button:before {
    font-size: 10px;
    color: var(--bright);
  }
`;

const slideDes = {
  title: "WoodOne",
  description: [
    "A company specializing in wood flooring that pursues nature-frendly interior space",
    "Experience a special collection",
    "Create a beautiful wood floor interior service",
  ],
  img: [Image1, Image2, Image3],
};

export default function SliderBanner() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
  };

  return (
    <StyledSlider>
      <Slider {...settings}>
        {slideDes.description.map((item, index) => (
          <SlideItem
            title={slideDes.title}
            description={item}
            key={index}
            image={slideDes.img[index]}
          />
        ))}
      </Slider>
    </StyledSlider>
  );
}
