import { fetchProductsByCategory } from "@/app/api/products";
import React from "react";
import ServicesTabs from "./ServicesTabs";

const Services = async () => {
  const category1 = await fetchProductsByCategory("brand-strategy-development");
  const category2 = await fetchProductsByCategory("digital-marketing-online-presence");
  const category3 = await fetchProductsByCategory("content-communication");
  const category4 = await fetchProductsByCategory("market-research-analysis");
  const category5 = await fetchProductsByCategory("campaign-management-execution");

  return (
    <ServicesTabs category1={category1} category2={category2} category3={category3} category4={category4} category5={category5}/>
  );
};

export default Services;
