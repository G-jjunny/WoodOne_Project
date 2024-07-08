import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
// import mainBanner from "../../assets/mainbanner.jpg";
// import bgMain from "../../assets/bgMain.jpg";
import bgMainPressed from "../../assets/banner.jpg";
import { motion } from "framer-motion";

const MainBannerArea = styled.div`
  width: 100vw;
  height: 100vh;
  margin-bottom: 150px;
  background: url(${bgMainPressed});
  background-attachment: fixed;
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
  background-color: var(--main);
  text-align: center;
  align-content: center;
  /* h1 {
    color: var(--bright);
    font-weight: 700;
    transition: all.8s;
  } */
  @media screen and (max-width: 500px) {
    background-position: center;
  }
`;
const Title = styled.h1`
  color: var(--bright);
  font-weight: 700;
  transition: opacity 0.8s ease-in;
`;

const MainBanner = () => {
  return (
    <MainBannerArea>
      <motion.div
        className="container"
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { delay: 0.5, duration: 0.8 },
        }}
      >
        <Title>WoodOne</Title>
      </motion.div>
    </MainBannerArea>
  );
};

export default MainBanner;
