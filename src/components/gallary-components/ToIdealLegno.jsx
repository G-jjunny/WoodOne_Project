import React from "react";
import Button from "../Button";
import { Link } from "react-router-dom";
import Ideal from "../../assets/Ideal-Legno-Logo.png";
import styled from "styled-components";

const IdealComponents = styled.div`
  /* width: 100%; */
  display: flex;
  align-items: end;
  gap: 20px;
  .ideal {
    width: 400px;
    padding: 0 20px;
    align-content: center;
    img {
      /* overflow: hidden; */
      width: 100%;
      transition: all.5s;
    }
    img:hover {
      scale: 1.1;
    }
  }
`;

const ToIdealLegno = () => {
  const idealUrl = "https://www.ideal-legno.com/";

  return (
    <IdealComponents>
      <div className="ideal">
        <img src={Ideal} alt="Edeal" />
      </div>
      <Link to={`${idealUrl}`} target="_blank">
        <Button text="Ideal Legno" type="" />
      </Link>
    </IdealComponents>
  );
};

export default ToIdealLegno;
