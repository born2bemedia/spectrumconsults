import React from "react";
import "@/styles/consulting.scss";
import ConsultingHero from "./_components/ConsultingHero";
import { ConnectBlock } from "@/components/ConnectBlock";
import PriceList from "./_components/PriceList";
import WhyChoose from "./_components/WhyChoose";
import CompletePackagesTop from "./_components/CompletePackagesTop";
import CompletePackages from "./_components/CompletePackages";
import ServicesTabs from "./_components/ServicesTabs";
import OrderPopup from "@/components/OrderPopup";
import ThanksPopup from "@/components/ThanksPopup";
import Services from "./_components/Services";

export const metadata = {
  title: "IT Consulting Services",
  description: "",
  openGraph: {
    title: "IT Consulting Services",
    description: "",
    images: "https://spectrumconsults.io/images/meta.png",
  },
};

const BusinessConsulting = () => {
  return (
    <>
      <ConsultingHero />
      <Services />
      <CompletePackagesTop />
      <CompletePackages />
      <WhyChoose />
      <PriceList />
      <ConnectBlock
        title={"Contact Our IT Consulting <br/>xperts"}
        subtitle={
          "Need expert guidance to enhance your digital workflow? Fill out the form below to connect with our IT consultants. Whether you're looking to build a professional online presence, secure your digital assets, or optimize your tech infrastructure, we provide tailored solutions to fit your needs. Let’s work together to ensure your technology empowers your success."
        }
      />
      <OrderPopup />
      <ThanksPopup />
    </>
  );
};

export default BusinessConsulting;
