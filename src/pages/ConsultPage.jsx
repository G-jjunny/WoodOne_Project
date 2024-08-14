import React from "react";
import PageHeader from "../components/PageHeader";
import ConsultMain from "../components/Consult-components/ConsultMain";
import ConsultForm from "../components/Consult-components/ConsultForm";
import Map from "../components/Consult-components/Map";
import SSS from "../assets/sss.jpg";
import ScrollToTop from "../components/ScrollTop";

const ConsultPage = () => {
  return (
    <>
      <ScrollToTop />
      <PageHeader title="Consult" img={SSS} />
      <ConsultMain />
      <ConsultForm />
      <Map />
    </>
  );
};

export default ConsultPage;
