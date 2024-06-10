import React from "react";
import styled from "styled-components";

const GallArea = styled.div`
  width: 100vw;
  margin: 200px 0;
  .container {
    display: flex;
    text-align: center;
    justify-content: center;
    h1 {
      color: var(--dark-green);
      margin-bottom: 20px;
      padding-bottom: 20px;
      border-bottom: 3px solid var(--dark);
    }
  }
`;

const GallaryMain = () => {
  return (
    <GallArea>
      <div className="container">
        <div className="line">
          <h1 className="headline">Sample Text</h1>
          <h3>introduce sample text</h3>
        </div>
      </div>
    </GallArea>
  );
};

export default GallaryMain;
