import React from "react";
import "@/styles/connect.scss";
import { ConnectBlock } from "@/components/ConnectBlock";
import ConnectHero from "./_components/ConnectHero";
import ConnectAddress from "./_components/ConnectAddress";
import ConnectSoc from "./_components/ConnectSoc";

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
