import React from "react";
import "@/styles/clientResults.scss";
import ResultsHero from "./_components/ResultsHero";
import ResultsLast from "./_components/ResultsLast";
import ResultsSlider from "./_components/ResultsSlider";

const ClientsResults = () => {
  return (
    <>
      <ResultsHero />
      <ResultsSlider />
      <ResultsLast />
    </>
  );
};

export default ClientsResults;
