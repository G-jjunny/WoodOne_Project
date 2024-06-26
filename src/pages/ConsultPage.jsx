import React from "react";
import PageHeader from "../components/PageHeader";
import ConsultMain from "../components/Consult-components/ConsultMain";
import ConsultForm from "../components/Consult-components/ConsultForm";
import Map from "../components/Consult-components/Map";
import Consult from "../assets/consult.jpg";

const ConsultPage = () => {
  return (
    <>
      <PageHeader title="Consult" img={Consult} />
      <ConsultMain />
      <ConsultForm />
      <Map />
    </>
  );
};

export default ConsultPage;
