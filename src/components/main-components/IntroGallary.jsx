import React from "react";
import styled from "styled-components";
import Button from "../Button";
import { Link } from "react-router-dom";
import GallaryMockUp from "../../assets/gallary-mockup.png";

const IntroGallaryArea = styled.div`
  padding: 200px 0;
  .container {
    display: flex;
    justify-content: end;
    gap: 20px;
  }
  .gallary-line {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: end;
    gap: 20px;
    text-align: end;
  }
  .gallary-img {
    width: 50%;
    background-image: url(${GallaryMockUp});
    background-size: cover;
    background-position: center;
    height: 400px;
    /* sample test */
    /* .sample-img {
      width: 100%;
      height: 450px;
      background-color: var(--main);
      text-align: center;
      align-content: center;
    } */
  }
  @media screen and (max-width: 800px) {
    .container {
      flex-direction: column-reverse;
    }
    .gallary-img {
      width: 100%;
    }
  }
`;

const IntroGallary = () => {
  return (
    <IntroGallaryArea>
      <div className="container">
        <div className="gallary-line">
          <h1 className="headline">COLLECTION</h1>
          <h4>
            {/* <span className="company-name">Sample</span> 텍스트 추가 */}
            {/* </h4>
          <h4> */}
            <br />
            <br />
            <span className="company-name">WoodOne</span>만의 특별한
            <span className="company-name">Collection</span>를 경험해보세요
          </h4>
          <Link to={"/collection"}>
            <Button text="Collection" type="primary" />
          </Link>
        </div>
        <div className="gallary-img">
          {/* <div className="sample-img">Sample Image</div> */}
        </div>
      </div>
    </IntroGallaryArea>
  );
};

export default IntroGallary;
