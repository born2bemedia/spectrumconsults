"use client";
import React from "react";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import ButtonCartIcon from "@/icons/ButtonCartIcon";
import { usePopup } from "@/context/PopupsContext";

function OrderButton({ packageItem }) {
  const {
    orderPopupDisplay,
    setOrderPopupDisplay,
    serviceValue,
    setServiceValue,
  } = usePopup();

  const orderPopupOpen = () => {
    console.log("popup");
    setServiceValue(packageItem);
    setOrderPopupDisplay(true);
  };
  return (
    <>
      <button className="main-button white" onClick={() => orderPopupOpen()}>
        <span>Order</span>
        <ButtonCartIcon />
      </button>
    </>
  );
}

export default OrderButton;
