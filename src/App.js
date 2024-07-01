import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./App.scss";
import GallaryPage from "./pages/GallaryPage";
import PageMain from "./pages/PageMain";
import ConsultPage from "./pages/ConsultPage";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import DetailPage from "./pages/DetailPage";
import { useEffect } from "react";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div className="App">
      <ScrollToTop />
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
