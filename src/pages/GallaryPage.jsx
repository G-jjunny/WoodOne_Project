import React from "react";
import PageHeader from "../components/PageHeader";
import sss from "../assets/sss.jpg";
import GallaryMain from "../components/gallary-components/GallaryMain";
import GallaryCollection from "../components/gallary-components/GallaryCollection";

const GallaryPage = () => {
  return (
    <>
      <PageHeader title="COLLECTION" img={sss} />
      <GallaryMain />
      <GallaryCollection />
    </>
  );
};

export default GallaryPage;
