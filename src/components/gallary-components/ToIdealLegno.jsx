import React from "react";
import Button from "../Button";
import { Link } from "react-router-dom";
import Ideal from "../../assets/Ideal-Legno-Logo.png";
import styled from "styled-components";
import { motion } from "framer-motion";
// import Ideal from "../../assets/Ideal-Legno-Logo.png";

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
      padding: 20px 0;
      width: 100%;
      transition: all.5s;
    }
    img:hover {
      scale: 1.1;
    }
  }
  .line {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  @media screen and (max-width: 500px) {
    flex-direction: column;
    .ideal {
      width: 100%;
    }
    .line {
      display: flex;
      flex-direction: column;
      gap: 10px;
      align-items: end;
    }
  }
`;

const ToIdealLegno = () => {
  const idealUrl = "https://www.ideal-legno.com/";

  return (
    <IdealComponents>
      <motion.div
        className="ideal"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { delay: 0.1, duration: 1 },
        }}
      >
        <img src={Ideal} alt="Ideal" />
      </motion.div>
      <motion.div
        className="line"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { delay: 0.1, duration: 1 },
        }}
      >
        <h2 className="en semibold">Ideal Legno</h2>
        <Link to={`${idealUrl}`} target="_blank">
          <Button text="자세히 보기" type="primary" />
        </Link>
      </motion.div>
    </IdealComponents>
  );
};

export default ToIdealLegno;
