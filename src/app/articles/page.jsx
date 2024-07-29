import React from "react";
import "@/styles/blog.scss";
import BlogHero from "./_components/BlogHero";
import BlogLoopServer from "./_components/BlogLoopServer";

export const metadata = {
  title: "Expert Articles on Business and Marketing Consulting",
  description:
    "Explore our collection of in-depth articles on business and marketing consulting. Gain insights and practical advice from the experts at Spectrum Consults.",
  openGraph: {
    title: "Expert Articles on Business and Marketing Consulting",
    description:
      "Explore our collection of in-depth articles on business and marketing consulting. Gain insights and practical advice from the experts at Spectrum Consults.",
    images: "https://spectrumconsults.io/images/meta.png",
  },
};

const IndustryNews = () => {
  return (
    <>
      <BlogHero />
      <BlogLoopServer />
    </>
  );
};

export default IndustryNews;
