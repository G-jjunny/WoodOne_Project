import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner1 from "../../assets/Banner/banner1.jpg";
import Banner2 from "../../assets/Banner/banner2.jpg";
import Banner3 from "../../assets/Banner/banner3.jpg";
import styled from "styled-components";

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

const Slide = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  background-image: ${(props) => `url(${props.img})`};
  background-position: center;
  background-size: cover;
  width: 100%;
  /* height: 100%; */
  @media screen and (max-width: 768px) {
    height: 400px;
  }
`;

const SliderBanner = () => {
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
        <Slide img={Banner1}>
          {/* <img className="slide-img" src={Banner1} alt="banner1" /> */}
        </Slide>
        <Slide img={Banner2}>
          {/* <img className="slide-img" src={Banner2} alt="banner2" /> */}
        </Slide>
        <Slide img={Banner3}>
          {/* <img className="slide-img" src={Banner3} alt="banner3" /> */}
        </Slide>
      </Slider>
    </StyledSlider>
  );
};

export default SliderBanner;
