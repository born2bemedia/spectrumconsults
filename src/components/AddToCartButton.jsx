"use client";
import React from "react";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import ButtonCartIcon from "@/icons/ButtonCartIcon";

function AddToCartButton({ product }) {
  const router = useRouter();
  const { addToCart, cart } = useCart();
  const existingIndex = cart.findIndex((item) => item.id === product.id);
  const handleAddToCart = (product) => {
    addToCart({
      ...product,
      quantity: 1, // You can adjust this as needed
    });
    router.push("/cart");
  };
  return (
    <>
      {existingIndex > -1 ? (
        <button disabled className="main-button">
          <span>Already in cart</span>
          <ButtonCartIcon />
        </button>
      ) : (
        <button
          className="main-button"
          onClick={() => handleAddToCart(product)}
        >
          <span>Order</span>
          <ButtonCartIcon />
        </button>
      )}
    </>
  );
}

export default AddToCartButton;
