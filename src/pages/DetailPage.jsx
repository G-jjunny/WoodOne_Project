import React, { useState } from "react";
import "./DetailPage.scss";
import { useNavigate } from "react-router-dom";
import BackIcon from "../components/BackIcon";
import collectionData from "../json/CollectionLine.json";
import Sample70 from "../json/sample(70).json";
import Sample90 from "../json/sample(90).json";
import Sample125 from "../json/sample(125).json";
import Sample150 from "../json/sample(150).json";
import Sample190 from "../json/sample(190).json";
import Sample240 from "../json/sample(240).json";
import SampleItem from "../components/SampleItem";

// 샘플 데이터를 객체로 모아둡니다.
const sampleData = {
  70: Sample70,
  90: Sample90,
  125: Sample125,
  150: Sample150,
  190: Sample190,
  240: Sample240,
};

const DetailPage = () => {
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState(70);
  const data = collectionData[0];

  return (
    <div className="detail">
      <div className="close" onClick={() => navigate("/collection")}>
        <BackIcon />
      </div>

      <div className="item-list">
        {selectedSize && (
          <div className="items" key={selectedSize}>
            <div className="line">{selectedSize} Line</div>
            <div className="controller">
              {data.size.map((size) => (
                <button
                  key={size}
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
                  <div className="sample" key={sample.index}>
                    <img
                      src={require(`../assets/Sample/${selectedSize}mm/${sample.url}`)}
                      alt={sample.name}
                    />
                    <div className="sample-name">{sample.name}</div>
                    <div className="sample-des">Size {sample.des}</div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailPage;
