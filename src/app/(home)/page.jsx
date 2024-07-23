import Image from "next/image";
import "@/styles/home.scss";
import HomeHero from "./_components/HomeHero";
import MarketingServices from "./_components/MarketingServices";
import BusinessServices from "./_components/BusinessServices";
import HomeAbout from "./_components/HomeAbout";
import HomeValues from "./_components/HomeValues";
import { HomeConnect } from "./_components/HomeConnect";

export default function Home() {
  return (
    <>
      <HomeHero />
      <BusinessServices />
      <MarketingServices />
      <HomeAbout />
      <HomeValues />
      <HomeConnect />
    </>
  );
}
