import React from "react";
import "@/styles/consulting.scss";
import ConsultingHero from "./_components/ConsultingHero";
import { ConnectBlock } from "@/components/ConnectBlock";
import PriceList from "./_components/PriceList";
import WhyChoose from "./_components/WhyChoose";
import CompletePackagesTop from "./_components/CompletePackagesTop";
import CompletePackages from "./_components/CompletePackages";
import ServicesTabs from "./_components/ServicesTabs";

const BusinessConsulting = () => {
  return (
    <>
      <ConsultingHero />
      <ServicesTabs />
      <CompletePackagesTop />
      <CompletePackages />
      <WhyChoose />
      <PriceList />
      <ConnectBlock
        title={"Elevate Your Marketing <br/>with Spectrum Consults"}
        subtitle={
          "Looking to boost your brand’s presence and drive impactful results? Complete the form below to connect with our marketing consultants. Tell us your marketing needs and objectives, and we’ll craft customised strategies to propel your brand forward. Partner with Spectrum Consults for innovative marketing solutions that deliver measurable success."
        }
      />
    </>
  );
};

export default BusinessConsulting;
