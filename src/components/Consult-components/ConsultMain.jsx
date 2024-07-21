import React from "react";
import Logo from "../../assets/logo.png";
import styled from "styled-components";

const LogoContain = styled.div`
  width: 100%;
  margin: 100px 0;
  display: flex;
  justify-content: center;
  img {
    width: 300px;
  }
`;

const ConsultMain = () => {
  return (
    <LogoContain>
      <img src={Logo} alt="Logo" />
    </LogoContain>
  );
};

export default ConsultMain;
