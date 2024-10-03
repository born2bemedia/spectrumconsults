import { fetchProductsByCategory } from "@/app/api/products";
import AddToCartButton from "@/components/AddToCartButton";
import React from "react";
import ServicesTabs from "./ServicesTabs";

const Services = async () => {
  const category1 = await fetchProductsByCategory("strategic-planning-development");
  const category2 = await fetchProductsByCategory("operational-excellence");
  const category3 = await fetchProductsByCategory("financial-optimization");
  const category4 = await fetchProductsByCategory("customer-experience-management");
  const category5 = await fetchProductsByCategory("technology-digital-transformation");

  return (
    <ServicesTabs category1={category1} category2={category2} category3={category3} category4={category4} category5={category5}/>
  );
};

export default Services;
