import React from "react";
import "@/styles/consulting.scss";
import ConsultingHero from "./_components/ConsultingHero";
import { ConnectBlock } from "@/components/ConnectBlock";
import PriceList from "./_components/PriceList";
import WhyChoose from "./_components/WhyChoose";

const BusinessConsulting = () => {
  return (
    <>
      <ConsultingHero />
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
