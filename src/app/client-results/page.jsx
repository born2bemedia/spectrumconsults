import React from "react";
import "@/styles/clientResults.scss";
import ResultsHero from "./_components/ResultsHero";
import ResultsLast from "./_components/ResultsLast";
import ResultsSlider from "./_components/ResultsSlider";

export const metadata = {
  title: "Client Success Stories",
  description:
    "Read the success stories of clients who have achieved outstanding results with Spectrum Consults. Discover how we can help your business succeed.",
  openGraph: {
    title: "Client Success Stories",
    description:
      "Read the success stories of clients who have achieved outstanding results with Spectrum Consults. Discover how we can help your business succeed.",
    images: "https://spectrumconsults.io/images/meta.png",
  },
};

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
