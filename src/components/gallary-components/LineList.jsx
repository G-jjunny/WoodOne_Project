import React from "react";
import styled from "styled-components";
import Button from "../Button";
import { Link } from "react-router-dom";
import GreenForest from "../../assets/greenforest.jpg";
import { motion } from "framer-motion";

const CollectionItems = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  gap: 20px;
  .box {
    width: 400px;
    height: 300px;
    /* background-color: var(--main); */
    background-image: url(${GreenForest});
    background-size: cover;
  }
  .line {
    justify-content: end;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: auto;
    h2 {
      font-family: "Archivo", sans-serif;
    }
  }
  .pri {
    color: var(--dark-green);
  }
  @media screen and (max-width: 500px) {
    flex-direction: column;
    height: fit-content;
    .box {
      width: 100%;
      /* height: 400px; */
    }
    .pri {
      font-size: 10px;
    }
  }
`;

const LineList = ({ item }) => {
  const { line, size } = item;
  return (
    <CollectionItems>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { delay: 0.1, duration: 1.3 },
        }}
        className="box"
      >
        {/* <img src={GreenForest} alt="GreenForest" /> */}
      </motion.div>
      <div className="line">
        {/* <h4 className="pri">collection</h4> */}
        <h2 className="en semibold">{line}</h2>
        <h4 className="pri">
          Line
          <br />( {size.map((i) => i + " ")})
        </h4>
        <Link to={`/collection/${line}`}>
          <Button text="자세히 보기" type="primary" />
        </Link>
      </div>
    </CollectionItems>
  );
};

export default LineList;
