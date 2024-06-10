import React from "react";
import "./GallaryCollection.scss";
import LineList from "./LineList";
import collectionData from "../../CollectionLine.json";
import ToIdealLegno from "./ToIdealLegno";

const GallaryCollection = () => {
  return (
    <div className="container collection">
      <div className="collection-head">
        <h2 className="headline">New COLLECTION</h2>
        <p>
          <span className="hilight">WoodOne</span>만의 특별한{" "}
          <span className="hilight">collection</span>올 소개합니다.
        </p>
      </div>
      <div className="collection-items">
        {collectionData.map((item) => (
          <LineList key={item.id} type={item.line} />
        ))}
        <ToIdealLegno />
      </div>
    </div>
  );
};

export default GallaryCollection;
