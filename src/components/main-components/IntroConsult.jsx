import React from "react";
import styled from "styled-components";
import consult from "../../assets/consult.png";
import sss from "../../assets/sss.jpg";
import Button from "../Button";
import { Link } from "react-router-dom";

const IntroConsultArea = styled.div`
  /* sample */
  /* background-color: var(--green); */
  background-image: url(${consult});
  /* background-image: url(${sss}); */
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  width: 100vw;
  height: 600px;
  display: flex;
  align-items: center;
  .consult-line {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .headline {
    /* color: var(--bright); */
    color: var(--dark-green);
  }
  h4 {
    font-weight: 500;
  }
  @media screen and (max-width: 800px) {
    background-size: cover;
    background-position: -100px;
  }
`;

const IntroConsult = () => {
  return (
    <IntroConsultArea>
      <div className="container">
        <div className="consult-line">
          <h1 className="headline">CONSULT</h1>
          <h4>
            간단한 방법으로 쉽게 상담을 받아보세요
            <br />
            <br />
            클릭 한 번으로 최고의 전문가가 상담해드립니다.
          </h4>
          <Link to={"/consult"} style={{ width: "120px" }}>
            <Button text="Consult" type="secondary" />
          </Link>
        </div>
      </div>
    </IntroConsultArea>
  );
};

export default IntroConsult;
