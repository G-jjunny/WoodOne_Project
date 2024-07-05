import React, { useEffect, useState } from "react";
import "./NavBar.scss";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/logo.png";
const NavBar = () => {
  const location = useLocation();
  // const [] = useState();
  const hideNavBarPaths = ["/collection/:id"]; // 숨길 경로를 배열로 정의

  const isNavBarHidden = hideNavBarPaths.some((path) => {
    const match = path.replace(":id", "[^/]+"); // :id를 일반 문자열로 대체
    const regex = new RegExp(`^${match}$`);
    return regex.test(location.pathname);
  });

  // todo -- scrollY가 0이상일때 background color 지정
  // useEffect(() => {}, []);

  return (
    <>
      {!isNavBarHidden && (
        <div className="nav">
          <div className="container">
            <Link to={"/"}>
              {/* <h2 className="logo">WoodOne</h2> */}
              <img src={Logo} alt="logo" className="logo" />
            </Link>
            <div className="nav-gnv">
              <Link to="/collection">
                <h3>collection</h3>
              </Link>
              <Link to="/consult">
                <h3>consult</h3>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
