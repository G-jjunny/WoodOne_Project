import React from "react";
import styled from "styled-components";

const IntroBox = styled.div`
  padding: 100px 0;
  /* background-color: var(--bright); */
  .container {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 25px;
  }
`;

const Intro = () => {
  return (
    <IntroBox>
      <div className="container">
        <div className="intro-line"></div>
        <h1 className="headline">WoodOne</h1>
        <h4>
          <span className="company-name">WoodOne</span>이 제안하는 프리미엄 마루
        </h4>
      </div>
    </IntroBox>
  );
};

export default Intro;
