import React from "react";
import "@/styles/blog.scss";
import BlogHero from "./_components/BlogHero";
import BlogLoopServer from "./_components/BlogLoopServer";

export const metadata = {
  title: "Latest Industry News",
  description:
    "Stay updated with the latest news and trends in the business and marketing consulting industry. Spectrum Consults brings you the most relevant industry insights.",
  openGraph: {
    title: "Latest Industry News",
    description:
      "Stay updated with the latest news and trends in the business and marketing consulting industry. Spectrum Consults brings you the most relevant industry insights.",
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
