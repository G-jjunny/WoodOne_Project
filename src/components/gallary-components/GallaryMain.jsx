import React from "react";
import styled from "styled-components";

const GallArea = styled.div`
  width: 100vw;
  margin: 200px 0;
  .container {
    display: flex;
    text-align: center;
    /* justify-content: center; */
    .line {
      margin: 0 auto;
    }
    h1 {
      /* color: var(--dark-green); */
      display: inline-block;
      color: var(--main);
      margin-bottom: 20px;
      padding-bottom: 20px;
      border-bottom: 3px solid var(--main);
    }
    h4 {
      word-break: keep-all;
      letter-spacing: 2px;
      line-height: 18px;
    }
  }
`;

const GallaryMain = () => {
  return (
    <GallArea>
      <div className="container">
        <div className="line">
          <h1 className="headline">Introduce</h1>
          <h4 className="semibold">
            저희 <span className="company-name">WoodOne</span>은 마루재의
            전문지식과 노하우를 바탕으로
            <br /> 친환경 마루재인 이태리 명품 원목마루{" "}
            <span className="hilight">Ideal Legno</span>제품과
            <br />
            원목마루의 대중화를 위한 인도네시아{" "}
            <span className="hilight">Green Forest</span> 제품을 수입 판매를
            하고있습니다.
          </h4>
        </div>
      </div>
    </GallArea>
  );
};

export default GallaryMain;
