import ButtonCartIcon from "@/icons/ButtonCartIcon";
import Link from "next/link";
import React from "react";

const OperationalExcellence = () => {
  return (
    <div className="services-row">
      <div className="service">
        <div>
          <h3>
            Operational
            <br />
            Improvement
          </h3>
          <p>
            Optimise your business processes for maximum efficiency and
            effectiveness. We identify bottlenecks, streamline workflows, and
            implement best practices to enhance your operations.
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
            Business Process
            <br /> Reengineering
          </h3>
          <p>
            Transform your business processes to achieve significant performance
            improvements. We help you redesign workflows, eliminate
            inefficiencies, and leverage technology to drive growth.
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
            Performance
            <br />
            Management
          </h3>
          <p>
            Enhance your team's performance with our comprehensive management
            solutions. We provide tools and strategies to set goals, measure
            progress, and improve productivity.
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
            Change
            <br />
            Management
          </h3>
          <p>
            Navigate organisational changes smoothly and effectively. Our change
            management services ensure your team is aligned and engaged
            throughout the transition.
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

export default OperationalExcellence;
