import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
// import mainBanner from "../../assets/mainbanner.jpg";
// import bgMain from "../../assets/bgMain.jpg";
import bgMainPressed from "../../assets/banner.jpg";

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
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transition: opacity 0.8s ease-in;
`;

const MainBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // 컴포넌트 마운트 시 h1 요소를 나타나게 함
    const timer = setTimeout(() => {
      setVisible(true);
    }, 500); // 약간의 지연 후에 h1 요소를 나타나게 함

    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 정리
  }, []);
  const handleScroll = useCallback(() => {
    if (window.scrollY > 0) {
      // 스크롤 위치가 0 이상일 때
      setVisible(false);
    } else {
      setVisible(true);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <MainBannerArea>
      <div className="container">
        <Title visible={visible}>WoodOne</Title>
      </div>
    </MainBannerArea>
  );
};

export default MainBanner;
