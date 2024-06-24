import React from "react";
import styled from "styled-components";
import Button from "../Button";
import { Link } from "react-router-dom";

const CollectionItems = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  gap: 20px;
  .box {
    width: 400px;
    height: 300px;
    background-color: var(--main);
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
    height: 200px;
    .box {
      height: 200px;
    }
    .pri {
      font-size: 10px;
    }
  }
`;

const LineList = ({ item }) => {
  const { line, size } = item;
  console.log(line);
  return (
    <CollectionItems>
      <div className="box"></div>
      <div className="line">
        <h4 className="pri">collection</h4>
        <h2 className="en semibold">{line}</h2>
        <h4 className="pri">
          Line
          <br />( {size.map((i) => i + " ")})
        </h4>
        <Link to={`/collection/${line}`}>
          <Button text="더보기" type="primary" />
        </Link>
      </div>
    </CollectionItems>
  );
};

export default LineList;
