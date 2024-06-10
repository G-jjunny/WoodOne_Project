import React from "react";
import PageHeader from "../components/PageHeader";
import bgHeader from "../assets/gall.jpg";
import GallaryMain from "../components/gallary-components/GallaryMain";
import GallaryCollection from "../components/gallary-components/GallaryCollection";

const GallaryPage = () => {
  return (
    <>
      <PageHeader title="COLLECTION" img={bgHeader} />
      <GallaryMain />
      <GallaryCollection />
    </>
  );
};

export default GallaryPage;
