import ButtonCartIcon from "@/icons/ButtonCartIcon";
import Link from "next/link";
import React from "react";

const CustomerExperienceManagement = () => {
  return (
    <div className="services-row">
      <div className="service">
        <div>
          <h3>
            Customer Experience <br />
            Enhancement
          </h3>
          <p>
            Improve your customer interactions and satisfaction. We offer
            strategies to optimise customer service processes and create
            memorable customer experiences.
          </p>
        </div>
        <Link href="#" className="main-button">
          <span>Order</span>
          <ButtonCartIcon />
        </Link>
      </div>
      <div className="service">
        <div>
          <h3>
            Brand Strategy &
            <br /> Management
          </h3>
          <p>
            Develop a strong brand identity and strategy. Our services help you
            define your brand, communicate your values, and build brand loyalty.
          </p>
        </div>
        <Link href="#" className="main-button">
          <span>Order</span>
          <ButtonCartIcon />
        </Link>
      </div>
      <div className="service">
        <div>
          <h3>
            Customer Loyalty
            <br />
            Programs
          </h3>
          <p>
            Design and implement customer loyalty programs to increase repeat
            business and customer retention.
          </p>
        </div>
        <Link href="#" className="main-button">
          <span>Order</span>
          <ButtonCartIcon />
        </Link>
      </div>
      <div className="service">
        <div>
          <h3>
            Market Penetration
            <br />
            Strategies
          </h3>
          <p>
            Develop and execute strategies to enter new markets and increase
            your market share.
          </p>
        </div>
        <Link href="#" className="main-button">
          <span>Order</span>
          <ButtonCartIcon />
        </Link>
      </div>
    </div>
  );
};

export default CustomerExperienceManagement;
