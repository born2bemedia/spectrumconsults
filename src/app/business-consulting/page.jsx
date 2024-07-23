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
        title={"Connect with Our Business <br/>Consulting Experts"}
        subtitle={
          "Ready to transform your business? Fill out the form below to get in touch with our expert consultants. Share your business challenges and goals, and we'll provide tailored solutions to help you achieve success. Let's start your journey toward operational excellence and strategic growth with Spectrum Consults."
        }
      />
    </>
  );
};

export default BusinessConsulting;
