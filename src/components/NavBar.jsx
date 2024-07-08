import React, { useCallback, useEffect, useState } from "react";
import "./NavBar.scss";
import { Link, NavLink, useLocation } from "react-router-dom";
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
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // 컴포넌트 마운트 시 h1 요소를 나타나게 함
    const timer = setTimeout(() => {
      setVisible(true);
    }, 500); // 약간의 지연 후에 h1 요소를 나타나게 함

    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 정리
  }, []);
  const handleScroll = useCallback(() => {
    if (window.scrollY > 0) {
      // 스크롤 위치가 0 이상일 때
      setVisible(false);
    } else {
      setVisible(true);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <>
      {!isNavBarHidden && (
        <div className={`nav ${visible ? "" : "view"}`}>
          <div className="container">
            <Link to={"/"}>
              {/* <h2 className="logo">WoodOne</h2> */}
              <img src={Logo} alt="logo" className="logo" />
            </Link>
            <div className="nav-gnv">
              <NavLink to="/collection">
                <h3>collection</h3>
              </NavLink>
              <NavLink to="/consult">
                <h3>consult</h3>
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
