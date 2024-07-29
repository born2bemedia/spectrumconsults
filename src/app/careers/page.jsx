import React from "react";
import "@/styles/careers.scss";
import CareersHero from "./_components/CareersHero";
import CareersSlider from "./_components/CareersSlider";
import CareersLast from "./_components/CareersLast";

export const metadata = {
  title: "Careers at Spectrum Consults",
  description:
    "Discover exciting career opportunities at Spectrum Consults. Join our dynamic team and contribute to delivering exceptional consulting services.",
  openGraph: {
    title: "Careers at Spectrum Consults",
    description:
      "Discover exciting career opportunities at Spectrum Consults. Join our dynamic team and contribute to delivering exceptional consulting services.",
    images: "https://spectrumconsults.io/images/meta.png",
  },
};

const ClientsResults = () => {
  return (
    <>
      <CareersHero />
      <CareersSlider />
    </>
  );
};

export default ClientsResults;
