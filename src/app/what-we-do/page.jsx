import React from "react";
import "@/styles/whatWeDo.scss";
import WhatWeDoHero from "./_components/WhatWeDoHero";
import { ConnectBlock } from "@/components/ConnectBlock";
import OurApproach from "./_components/OurApproach";
import OurTechniques from "./_components/OurTechniques";
import ServicesFeatures from "./_components/ServicesFeatures";
import YourPath from "./_components/YourPath";
import StandOut from "./_components/StandOut";
import ClientCentricValues from "./_components/ClientCentricValues";

const WhatWeDo = () => {
  return (
    <>
      <WhatWeDoHero />
      <OurApproach />
      <OurTechniques />
      <ServicesFeatures />
      <YourPath />
      <StandOut />
      <ClientCentricValues />
      <ConnectBlock
        title={"Wanna Start with <br/>Spectrum Consults?"}
        subtitle={
          "Embark on your path to success with our expert guidance! Share the vision of your project or business needs with us. Fill out the form below with your details, and one of our expert consultants will reach out to you promptly to discuss how we can help you achieve your goals."
        }
      />
    </>
  );
};

export default WhatWeDo;
