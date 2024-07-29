"use client";
import React from "react";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import ButtonCartIcon from "@/icons/ButtonCartIcon";
import { usePopup } from "@/context/PopupsContext";

function JobButton({ jobName }) {
  const { jobPopupDisplay, setJobPopupDisplay, jobValue, setJobValue } =
    usePopup();

  const jobPopupOpen = () => {
    setJobValue(jobName);
    setJobPopupDisplay(true);
  };
  return (
    <>
      <button className="white-button" onClick={() => jobPopupOpen()}>
        Apply for a position
      </button>
    </>
  );
}

export default JobButton;
