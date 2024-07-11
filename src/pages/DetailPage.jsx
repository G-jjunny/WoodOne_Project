import React, { useState } from "react";
import "./DetailPage.scss";
import { useNavigate } from "react-router-dom";
import collectionData from "../json/CollectionLine.json";
import Sample70 from "../json/sample(70).json";
import Sample90 from "../json/sample(90).json";
import Sample125 from "../json/sample(125).json";
import Sample150 from "../json/sample(150).json";
import Sample165 from "../json/sample(165).json";
import Sample190 from "../json/sample(190).json";
import Sample240 from "../json/sample(240).json";
import { IoIosArrowBack, IoMdClose } from "react-icons/io";
import Modal from "react-modal";
import DetailHeader from "../components/DetailHeader";
import styled from "styled-components";
import BG125 from "../assets/125BG.jpg";

// 샘플 데이터를 객체로 모아둡니다.
const sampleData = {
  70: Sample70,
  90: Sample90,
  125: Sample125,
  150: Sample150,
  165: Sample165,
  190: Sample190,
  240: Sample240,
};
const BgArea = styled.div`
  background-image: url(${BG125});
  width: 100%;
  height: 400px;
  padding: 20px;
  background-size: cover;
  background-position: center;
  background-position-y: -200px;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  justify-content: end;
  color: var(--bright);
  .headline {
  }
`;

const DetailPage = () => {
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState(70);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemState, setItemState] = useState({
    index: "",
    line: "",
    name: "",
    color: "",
    url: "",
    des: "",
    type: "",
  });
  const data = collectionData[0];

  return (
    <>
      <div className="detail">
        {/* <DetailHeader /> */}
        <div className="close" onClick={() => navigate("/collection")}>
          <IoIosArrowBack />
        </div>
        {isModalOpen ? (
          <Modal
            isOpen={isModalOpen}
            onRequestClose={() => setIsModalOpen(false)}
          >
            <div className="modal-area">
              <IoMdClose
                style={{
                  fontSize: "40px",
                  position: "fixed",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setIsModalOpen(false);
                }}
              />
              <img
                className="modal-img"
                src={require(`../assets/Sample/${itemState.line}mm/${itemState.url}`)}
                alt={itemState.index}
              />
              <div className="des-area">
                <h1 className="headline">{itemState.name}</h1>
                <h3>COLOR : {itemState.color}</h3>
                <h3>SIZE : {itemState.des}</h3>
                {itemState.type && <h3>TYPE : {itemState.type}</h3>}
              </div>
            </div>
          </Modal>
        ) : (
          <>
            <BgArea selectedSize={selectedSize}>
              <h1 className="headline">Line. {selectedSize}</h1>
            </BgArea>
            <div className="item-list">
              {selectedSize && (
                <div className="items">
                  {/* <div className="line" style={{}}>
                    <h1 className="en">Line. {selectedSize}</h1>
                  </div> */}
                  <div className="controller">
                    {data.size.map((size, index) => (
                      <button
                        key={index}
                        className={` nav-button ${
                          selectedSize === size ? "active" : ""
                        }`}
                        onClick={() => setSelectedSize(size)}
                      >
                        {size}mm
                      </button>
                    ))}
                  </div>
                  <div className="sample-list">
                    {sampleData[selectedSize].map((sample) => {
                      return (
                        <>
                          <div className="sample" key={sample.index}>
                            <div className="img-area">
                              <img
                                src={require(`../assets/Sample/${selectedSize}mm/${sample.url}`)}
                                alt={sample.name}
                                onClick={() => {
                                  setIsModalOpen(true);
                                  setItemState({
                                    index: sample.index,
                                    line: selectedSize,
                                    name: sample.name,
                                    color: sample.color,
                                    url: sample.url,
                                    des: sample.des,
                                    type: sample.type,
                                  });
                                }}
                              />
                            </div>
                            <div className="sample-name">
                              <h3 className="en">{sample.name}</h3>
                            </div>
                            <div className="sample-des en">
                              <span className="des-head">Color :</span>
                              <span className="semibold">{sample.color}</span>
                            </div>
                            {/* {sample.des && (
                          <div className="sample-des en">
                          <span className="des-head">Size :</span>
                          {sample.des}
                          </div>
                          )} */}
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default DetailPage;
