import React from "react";
import styled from "styled-components";
import spot from "../json/spot.json";

const BgArea = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  display: flex;
  gap: 10px;
  color: var(--bright);
  .bg {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: end;
    background-image: ${({ bgImage }) => `url(${bgImage})`};
    background-size: contain;
  }
  .line {
    font-size: 60px;
    margin-left: 100px;
    margin-bottom: 100px;
    font-weight: 700;
  }
  @media screen and (max-width: 500px) {
    .line {
      font-size: 36px;
    }
  }
`;

const DetailHeader = ({ selectedSize }) => {
  const spotImage = spot.find((img) => img.line === selectedSize);
  const bgImage = spotImage
    ? require(`../assets/spot/${spotImage.image}`)
    : null;

  return (
    <BgArea bgImage={bgImage}>
      <div className="bg">
        <h1 className="dis line">Line. {selectedSize}</h1>
      </div>
    </BgArea>
  );
};

export default DetailHeader;
