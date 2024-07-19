import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer-area">
      <div className="container">
        <div className="flex">
          <h4>CEO : 정병훈</h4> <div className="slash"></div>
          <h4>Business License : 215-08-88208</h4>
        </div>
        <h4>Adress : 강남구 논현로128길 22-4 세은빌딩 5층</h4>
        <h4>Tel : 02-547-8165</h4>
        <h4>Fax : 02-547-8164</h4>
        <h4>E-mail : woodone@naver.com</h4>
        <span className="copy">© 2024. 우드원 All rights reserved.</span>
      </div>
    </div>
  );
};

export default Footer;
