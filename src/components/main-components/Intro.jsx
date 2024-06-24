import React from "react";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const IntroBox = styled.div`
  padding: 100px 0;
  /* background-color: var(--bright); */

  .container {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 25px;

    .intro-line {
      animation: ${fadeIn} 1s ease-out forwards;
      animation-delay: 0.5s;
    }

    .headline {
      animation: ${fadeIn} 1s ease-out forwards;
      animation-delay: 1s;
    }

    .company-name {
      animation: ${fadeIn} 1s ease-out forwards;
      animation-delay: 1.5s;
    }

    .introduce {
      padding: 20px 0;
      max-width: 800px;
      margin: auto;
      line-height: 30px;
      word-break: keep-all;
      /* border-bottom: 3px solid var(--dark); */
      border-top: 3px solid var(--dark);
      animation: ${fadeIn} 1s ease-out forwards;
      animation-delay: 2s;

      .des {
        animation: ${fadeIn} 1s ease-out forwards;
        animation-delay: 2.5s;
      }
    }
  }
`;

const Intro = () => {
  return (
    <IntroBox>
      <div className="container">
        <div className="intro-line"></div>
        <h1 className="headline">WoodOne</h1>
        <h4>
          <span className="company-name">WoodOne</span>이 제안하는 프리미엄 마루
        </h4>
        <div className="introduce">
          <h4 className="des">
            우드원은 1996년 설립되어 현재에 이르기까지 원목마루만을
            수입,유통,판매하고 있습니다
            <br />
            고급 소재로는 이탈리아 명품{" "}
            <span className="company-name">IDEAL Legno</span> 를 수입 유통하고
            있으며 대중적인 소재로는{" "}
            <span className="company-name">Green Forest</span> 제품은 판매하고
            있으며 항상 내집에 시공 한다는 마음으로 최선을 다하여 고객님이
            만족하실 수 있도록 노력하겠습니다. 언제나 우수한 품질의 마루재를
            공급함으로 저희를 믿고 찾아주신 고객님들께 보답토록 노력하며 고품격
            서비스와 A/S요청시 신속한 처리로 고객님의 아름다운 생활공간을
            청조하는데 기여할수 있도록 노력하겠습니다.
          </h4>
        </div>
      </div>
    </IntroBox>
  );
};

export default Intro;
