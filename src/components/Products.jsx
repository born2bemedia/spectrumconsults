"use client";
import Link from "next/link";
import { fetchProductsByCategory } from "@/app/api/products";
import AddToCartButton from "./AddToCartButton";
import { useEffect, useState } from "react";

const Products = ({ category, quantity = 4 }) => {
  const [products, setProducts] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setProducts(category);
  }, [category]);

  return (
    <>
      <div className={`services-row`}>
        {products.length > 0 &&
          products.map((product) => (
            <div className="service" key={product.id}>
              <div>
                <h3 dangerouslySetInnerHTML={{ __html: product.title }} />
                <p dangerouslySetInnerHTML={{ __html: product.content }} />
                <span className="price">
                  {product.from_price && "From "}€{product.price}{" "}
                  {product.price_prefix && product.price_prefix}
                </span>
              </div>
              <AddToCartButton product={product} />
            </div>
          ))}
      </div>
    </>
  );
};

export default Products;
