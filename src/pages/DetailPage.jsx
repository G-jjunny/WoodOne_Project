import React from "react";
import "./DetailPage.scss";
import { useNavigate } from "react-router-dom";
import BackIcon from "../components/BackIcon";

const DetailPage = () => {
  const navigate = useNavigate();
  return (
    <div className="detail">
      <div className="close" onClick={() => navigate("/collection")}>
        <BackIcon />
      </div>
    </div>
  );
};

export default DetailPage;
