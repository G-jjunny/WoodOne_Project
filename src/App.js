import { Route, Routes, useLocation } from "react-router-dom";
import "./App.scss";
import GallaryPage from "./pages/GallaryPage";
import PageMain from "./pages/PageMain";
import ConsultPage from "./pages/ConsultPage";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import DetailPage from "./pages/DetailPage";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/collection/Green%20Forest") {
      return;
    }
    window.scrollTo(0, 0);
    // console.log(pathname);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,100..900;1,100..900&family=Belleza&family=Bentham&family=Noto+Sans+KR:wght@100;300;400;500;700;900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        {/* Open Graph */}
        <title>우드원</title>
        <meta property="og:site_name" content="우드원" />
        <meta property="og:title" content="우드원" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="./asset/woodone-logo.jpg" />
        <meta property="og:description" content="우드원 페이지입니다." />
      </Helmet>
      {/* <ScrollToTop /> */}
      <NavBar />
      <Routes>
        <Route path="/" element={<PageMain />}></Route>
        <Route path="/collection" element={<GallaryPage />}></Route>
        <Route path="/collection/:id" element={<DetailPage />}></Route>
        <Route path="/consult" element={<ConsultPage />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
