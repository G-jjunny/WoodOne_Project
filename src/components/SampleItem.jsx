import React from "react";
import styled from "styled-components";
import Sample from "../json/sample(70).json";

const SampleComponents = styled.div`
  color: var(--bright);
  img {
    width: 100px;
  }
`;

const SampleItem = ({ size }) => {
  const filteredSamples = Sample.filter((sample) => sample.line === size);
  console.log(filteredSamples);
  return (
    <SampleComponents>
      <h2>{size} Line</h2>
    </SampleComponents>
  );
};

export default SampleItem;
