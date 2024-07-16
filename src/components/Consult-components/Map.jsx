import React, { useEffect } from "react";
import "./Map.scss";
const { kakao } = window;

const Map = () => {
  useEffect(() => {
    const mapContainer = document.getElementById("map");
    const mapOption = {
      center: new kakao.maps.LatLng(37.513473, 127.033144),
      level: 3,
    };

    const map = new kakao.maps.Map(mapContainer, mapOption);

    const marker = new kakao.maps.Marker({
      position: mapOption.center,
    });

    marker.setMap(map);

    map.setZoomable(false);
    map.relayout();
  }, []);

  return (
    <div className="container map">
      <div className="head">
        <h1 className="headline">Contact</h1>
        <h4>address : 강남구 논현로128길 22-4 세은빌딩 5층</h4>
      </div>
      <div id="map"></div>
    </div>
  );
};

export default Map;
