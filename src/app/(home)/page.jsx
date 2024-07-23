import Image from "next/image";
import "@/styles/home.scss";
import HomeHero from "./_components/HomeHero";
import MarketingServices from "./_components/MarketingServices";
import BusinessServices from "./_components/BusinessServices";
import HomeAbout from "./_components/HomeAbout";
import HomeValues from "./_components/HomeValues";
import { ConnectBlock } from "../../components/ConnectBlock";
import HomeStory from "./_components/HomeStory";
import HomeSolutions from "./_components/HomeSolutions";

export default function Home() {
  return (
    <>
      <HomeHero />
      <BusinessServices />
      <MarketingServices />
      <HomeAbout />
      <HomeValues />
      <HomeStory />
      <HomeSolutions />
      <ConnectBlock title={"Connect with <br />Spectrum Consults"} subtitle={"Embark on your path to success with our expert guidance! Share the vision of your project or business needs with us. Fill out the form below with your details, and one of our expert consultants will reach out to you promptly to discuss how we can help you achieve your goals."} />
    </>
  );
}
