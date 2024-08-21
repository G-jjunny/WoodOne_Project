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
    var iwContent =
        '<div class="info-window"><div class="info-window-head">우드원</div><div class="info-window-add"></div><div class="info-window-link"><a href="https://map.kakao.com/link/map/강남구 논현로128길 22-4,37.513473, 127.033144" style="color:blue" target="_blank">큰지도보기</a> <a href="https://map.kakao.com/link/to/강남구 논현로128길 22-4,37.513473, 127.033144" style="color:blue" target="_blank">길찾기</a></div></div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
      iwPosition = new kakao.maps.LatLng(37.513473, 127.033144); //인포윈도우 표시 위치입니다

    var infowindow = new kakao.maps.InfoWindow({
      position: iwPosition,
      content: iwContent,
    });
    // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
    infowindow.open(map, marker);
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
