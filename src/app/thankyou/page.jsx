import React from "react";
import Link from "next/link";
import ButtonArrow from "@/icons/ButtonArrow";

const ThankyouPage = () => {
  return (
    <section className="thankyou-page">
      <div className="_container">
        <h1>Thank you for your order!</h1>
        <h2>
          We appreciate your decision to choose Spectrum Consults.
          <br />
          One of our representatives will contact you soon to confirm the
          details of your order.
        </h2>
        <Link href="/" className="main-button">
          <span>Go home</span>
          <ButtonArrow />
        </Link>
      </div>
    </section>
  );
};

export default ThankyouPage;
