import React from "react";
import "./PageMain.scss";
import MainBanner from "../components/main-components/MainBanner";
import Intro from "../components/main-components/Intro";
import IntroGallary from "../components/main-components/IntroGallary";
import IntroConsult from "../components/main-components/IntroConsult";

const PageMain = () => {
  return (
    <>
      <MainBanner />
      <Intro />
      <IntroGallary />
      <IntroConsult />
    </>
  );
};

export default PageMain;
