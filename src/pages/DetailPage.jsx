import React from "react";
import "./DetailPage.scss";
import { useNavigate } from "react-router-dom";
import BackIcon from "../components/BackIcon";
import collectionData from "../CollectionLine.json";

const DetailPage = () => {
  const navigate = useNavigate();
  const data = collectionData[0];
  return (
    <div className="detail">
      <div className="close" onClick={() => navigate("/collection")}>
        <BackIcon />
      </div>
      <div className="item-list">
        {data.size.map((i) => {
          return (
            <div className="items" key={i}>
              <div className="line">{i} Line</div>
              <div className="samole-list">
                <div className="sample"></div>
                <div className="sample"></div>
                <div className="sample"></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DetailPage;
