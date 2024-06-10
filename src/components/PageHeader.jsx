import React from "react";
import styled from "styled-components";

const HeaderTop = styled.div`
  width: 100vw;
  height: 400px;
  align-content: center;
  align-items: center;
  text-align: center;
  background-image: url(${(prop) => prop.img});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  .header {
    margin-top: 20px;
    font-family: "Archivo", sans-serif;
    font-weight: 700;
  }
`;

const PageHeader = ({ title, img }) => {
  return (
    <HeaderTop img={img}>
      <div className="container">
        <h1 className="header">{title}</h1>
      </div>
    </HeaderTop>
  );
};

export default PageHeader;
