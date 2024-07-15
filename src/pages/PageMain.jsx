import React from "react";
import "./PageMain.scss";
import MainBanner from "../components/main-components/MainBanner";
import Intro from "../components/main-components/Intro";
import IntroGallary from "../components/main-components/IntroGallary";
import IntroConsult from "../components/main-components/IntroConsult";
import { Helmet } from "react-helmet-async";

const PageMain = () => {
  return (
    <>
      <Helmet>
        <meta property="og:site_name" content="우드원" />
        <meta property="og:title" content="woodone" />
        <meta property="og:description" content="우드원 페이지입니다." />
      </Helmet>
      <MainBanner />
      <Intro />
      <IntroGallary />
      <IntroConsult />
    </>
  );
};

export default PageMain;
