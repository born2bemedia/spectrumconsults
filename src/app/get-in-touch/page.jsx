import React from "react";
import "@/styles/connect.scss";
import { ConnectBlock } from "@/components/ConnectBlock";
import ConnectHero from "./_components/ConnectHero";
import ConnectAddress from "./_components/ConnectAddress";
import ConnectSoc from "./_components/ConnectSoc";

export const metadata = {
  title: "Contact Spectrum Consults",
  description:
    "Connect with Spectrum Consults to discuss your consulting needs. Use our contact form or reach out via our contact details and social media channels.",
  openGraph: {
    title: "Contact Spectrum Consults",
    description:
      "Connect with Spectrum Consults to discuss your consulting needs. Use our contact form or reach out via our contact details and social media channels.",
    images: "https://spectrumconsults.io/images/meta.png",
  },
};

const GetInTouch = () => {
  return (
    <>
      <ConnectHero />
      <ConnectAddress />
      <ConnectBlock
        title={
          "Fill out the form below with your details and inquiry, and one of our representatives will get back to you shortly."
        }
      />
      <ConnectSoc />
    </>
  );
};

export default GetInTouch;
