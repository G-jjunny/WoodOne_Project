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
  /* background-position: center; */
  background-position-y: -150px;
  background-attachment: fixed;
  .contents {
    display: flex;
    flex-direction: column;
    gap: 30px;
    color: var(--bright);
  }
  .header {
    margin-top: 20px;
    font-family: "Archivo", sans-serif;
    font-weight: 700;
    border-bottom: 3px solid var(--bright);
    padding-bottom: 30px;
  }
  .sub {
    font-weight: 700;
  }
`;

const PageHeader = ({ title, img }) => {
  return (
    <HeaderTop img={img}>
      <div className="container">
        <div className="contents">
          <h1 className="header">{title}</h1>
          <h3 className="sub">WoodOne premium floor</h3>
        </div>
      </div>
    </HeaderTop>
  );
};

export default PageHeader;
