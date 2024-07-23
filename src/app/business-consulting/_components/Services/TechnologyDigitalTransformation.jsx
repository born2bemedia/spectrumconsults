import ButtonCartIcon from "@/icons/ButtonCartIcon";
import Link from "next/link";
import React from "react";

const TechnologyDigitalTransformation = () => {
  return (
    <div className="services-row">
      <div className="service">
        <div>
          <h3>
            Digital
            <br />
            Transformation
          </h3>
          <p>
            Embrace the digital age with our comprehensive digital
            transformation services. We help you integrate new technologies,
            improve digital capabilities, and enhance your online presence.
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
            IT Consulting &
            <br /> Support
          </h3>
          <p>
            Optimise your IT infrastructure with our expert consulting and
            support services. We provide guidance on technology strategy,
            implementation, and management.
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
            Cybersecurity
            <br />
            Solutions
          </h3>
          <p>
            Protect your business from cyber threats with our robust
            cybersecurity solutions.
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
            Data Analytics &
            <br />
            Insights
          </h3>
          <p>
            Leverage data to drive decision-making and business performance with
            our data analytics and insights services.
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

export default TechnologyDigitalTransformation;
