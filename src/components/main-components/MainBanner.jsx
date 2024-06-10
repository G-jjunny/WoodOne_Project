import React, { useEffect } from "react";
import styled from "styled-components";
import mainBanner from "../../assets/mainbanner.jpg";
import bgMain from "../../assets/bgMain.jpg";

const MainBannerArea = styled.div`
  width: 100vw;
  height: 100vh;
  margin-bottom: 150px;
  /* background: url(${mainBanner}); */
  background: url(${bgMain});
  background-attachment: fixed;
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
  background-color: var(--main);
  text-align: center;
  align-content: center;
  h1 {
    color: var(--bright);
    font-weight: 700;
    transition: all.8s;
  }
`;

const MainBanner = () => {
  useEffect(() => {}, []);

  return (
    <MainBannerArea>
      <div className="container">
        <h1>WoodOne</h1>
      </div>
    </MainBannerArea>
  );
};

export default MainBanner;
