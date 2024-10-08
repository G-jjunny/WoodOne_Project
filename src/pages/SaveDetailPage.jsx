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
import { motion } from "framer-motion";

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

  const handleToggleModal = () => {
    // 모달을 열때 현재 스크롤 위치를 저장하고,
    // 이후 스크롤을 그 위치로 설정하여 최상단으로 스크롤되는 것을 방지
    let scrollPosition = window.scrollY;
    console.log(scrollPosition);
    if (isModalOpen === false) {
      // scrollPosition = window.scrollY;
      setIsModalOpen(true);
      console.log(isModalOpen);
    } else {
      setIsModalOpen(false);
      window.scrollTo(0, scrollPosition); // 기존 스크롤 위치로 이동
    }
  };

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
            onRequestClose={() => {
              handleToggleModal();
            }}
          >
            <div className="modal-area">
              <IoMdClose
                style={{
                  fontSize: "40px",
                  position: "fixed",
                  cursor: "pointer",
                  color: "#fff",
                }}
                onClick={() => {
                  // const scrollPosition = window.scrollY;
                  // setIsModalOpen(false);
                  // window.scrollTo(0, scrollPosition); // 기존 스크롤 위치로 이동
                  handleToggleModal();
                }}
              />
              <img
                className="modal-img"
                src={require(`../assets/Sample/${itemState.line}mm/${itemState.url}`)}
                alt={itemState.index}
              />
              <div className="des-area">
                <h1 className="dis" style={{ fontWeight: "900" }}>
                  {itemState.name}
                </h1>
                <h3>COLOR : {itemState.color}</h3>
                <h3>SIZE : {itemState.des}</h3>
                {itemState.type && <h3>TYPE : {itemState.type}</h3>}
              </div>
            </div>
          </Modal>
        ) : (
          <>
            <DetailHeader selectedSize={selectedSize} />
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
                        className={`dis nav-button ${
                          selectedSize === size ? "active" : ""
                        }`}
                        onClick={() => setSelectedSize(size)}
                      >
                        {size}mm
                      </button>
                    ))}
                  </div>
                  <div className="sample-list">
                    {sampleData[selectedSize].map((sample, index) => {
                      return (
                        <>
                          <motion.div
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{
                              opacity: 1,
                              y: 0,
                              transition: { duration: 0.5 },
                            }}
                            className="sample"
                            key={sample.index}
                          >
                            <div className="img-area">
                              <img
                                src={require(`../assets/Sample/${selectedSize}mm/${sample.url}`)}
                                alt={sample.name}
                                onClick={() => {
                                  handleToggleModal();
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
                              <span className="des-head"></span>
                              <span className="des-head">{sample.color}</span>
                            </div>
                          </motion.div>
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
