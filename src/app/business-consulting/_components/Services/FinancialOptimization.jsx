import ButtonCartIcon from "@/icons/ButtonCartIcon";
import Link from "next/link";
import React from "react";

const FinancialOptimization = () => {
  return (
    <div className="services-row">
      <div className="service">
        <div>
          <h3>
            Financial
            <br />
            Consulting
          </h3>
          <p>
            Strengthen your financial health with our expert advice. From
            budgeting and forecasting to financial analysis and risk management,
            we provide the insights you need to make informed decisions.
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
            Risk
            <br /> Management
          </h3>
          <p>
            Identify, assess, and mitigate risks to protect your business. Our
            risk management services help you develop robust strategies to
            manage potential threats and ensure business continuity.
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
            Crisis
            <br />
            Management
          </h3>
          <p>
            Prepare for and navigate through crises with our strategic crisis
            management services. We help you develop contingency plans and
            respond effectively to unexpected challenges.
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
            Cost Reduction
            <br />
            Strategies
          </h3>
          <p>
            Identify opportunities for cost savings and improve your bottom line
            with our comprehensive cost reduction strategies.
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

export default FinancialOptimization;
