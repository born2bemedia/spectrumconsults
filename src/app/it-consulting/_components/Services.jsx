import { fetchProductsByCategory } from "@/app/api/products";
import React from "react";
import ServicesTabs from "./ServicesTabs";

const Services = async () => {
  const category1 = await fetchProductsByCategory("web-digital-presence");
  const category2 = await fetchProductsByCategory(
    "productivity-digital-tools"
  );
  const category3 = await fetchProductsByCategory("cybersecurity-data-protection");
  const category4 = await fetchProductsByCategory("it-support-technical-assistance");
  const category5 = await fetchProductsByCategory(
    "digital-infrastructure-hardware-solutions"
  );

  return (
    <ServicesTabs
      category1={category1}
      category2={category2}
      category3={category3}
      category4={category4}
      category5={category5}
    />
  );
};

export default Services;
