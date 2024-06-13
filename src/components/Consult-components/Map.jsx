import React, { useEffect } from "react";
import "./Map.scss";
const { kakao } = window;

const Map = () => {
  useEffect(() => {
    const mapContainer = document.getElementById("map"), // 지도를 표시할 div
      mapOption = {
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 3, // 지도의 확대 레벨
        // draggable: false, // 지도를 생성할때 지도 이동 및 확대/축소 끄기
      };

    // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
    const map = new kakao.maps.Map(mapContainer, mapOption);
    map.setZoomable(false); // 휠 동작시 줌 동작 차단
  }, []);
  return (
    <div className="container map">
      <div className="head">
        <h1 className="headline">Contact</h1>
        <h4>address : 강남구 논현로128길 22-4</h4>
      </div>
      <div id="map"></div>
    </div>
  );
};

export default Map;
