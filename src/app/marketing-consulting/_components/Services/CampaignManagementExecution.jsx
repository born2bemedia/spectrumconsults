import ButtonCartIcon from "@/icons/ButtonCartIcon";
import Link from "next/link";
import React from "react";

const CampaignManagementExecution = () => {
  return (
    <div className="services-row">
      <div className="service">
        <div>
          <h3>
            Campaign
            <br />
            Management
          </h3>
          <p>
            Plan and execute targeted marketing campaigns that deliver results.
            Our campaign management services cover everything from strategy
            development to execution and analysis, ensuring your campaigns
            achieve their objectives.
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
            Advertising
            <br /> Strategy
          </h3>
          <p>
            Develop and implement effective advertising strategies across
            various platforms, including digital, print, and broadcast media.
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
            Event
            <br />
            Marketing
          </h3>
          <p>
            Plan and promote events that enhance your brand's visibility and
            engagement. We offer end-to-end event marketing services, from
            conceptualization to execution.
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
            Promotional
            <br />
            Campaigns
          </h3>
          <p>
            Design and manage promotional campaigns that drive sales and
            customer engagement. We create compelling offers, contests, and
            promotions to attract and retain customers.
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

export default CampaignManagementExecution;
