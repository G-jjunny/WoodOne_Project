import React from "react";
import styled from "styled-components";
import SliderBanner from "./SliderBanner";
import SlideItem from "../SlideItem";

const MainBannerArea = styled.div`
  width: 100vw;
  height: 100vh;
  margin-bottom: 150px;
  background-color: var(--main);
  text-align: center;
  align-content: center;
  overflow: hidden;
  @media screen and (max-width: 1200px) {
    background-position: center;
  }
  @media screen and (max-width: 500px) {
    background-position: center;
  }
`;

const MainBanner = () => {
  return (
    <MainBannerArea>
      <SliderBanner />
      {/* <SlideItem /> */}
    </MainBannerArea>
  );
};

export default MainBanner;
