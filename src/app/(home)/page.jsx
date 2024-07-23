import Image from "next/image";
import "@/styles/home.scss";
import HomeHero from "./_components/HomeHero";
import MarketingServices from "./_components/MarketingServices";
import BusinessServices from "./_components/BusinessServices";

export default function Home() {
  return (
    <>
      <HomeHero />
      <BusinessServices />
      <MarketingServices />
    </>
  );
}
