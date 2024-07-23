import ButtonCartIcon from "@/icons/ButtonCartIcon";
import Link from "next/link";
import React from "react";

const StrategicPlaning = () => {
  return (
    <div className="services-row">
      <div className="service">
        <div>
          <h3>
            Strategic
            <br />
            Planning
          </h3>
          <p>
            Develop a clear, actionable roadmap to achieve your business goals.
            Our strategic planning services help you define your vision, set
            realistic targets, and outline the steps needed to reach them.
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
            Innovation <br />& Growth Strategy
          </h3>
          <p>
            Foster a culture of innovation and drive sustainable growth. Our
            experts work with you to identify new opportunities, create
            innovative solutions, and implement growth strategies that keep you
            ahead of the competition.
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
            Leadership
            <br />
            Development
          </h3>
          <p>
            Cultivate strong leaders within your organisation. We offer
            customised leadership development programs that equip your team with
            the skills and confidence to lead effectively.
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
            Market
            <br />
            Analysis
          </h3>
          <p>
            Gain a competitive edge with in-depth market research and analysis.
            We help you understand market trends, identify opportunities, and
            develop strategies to capture new markets.
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

export default StrategicPlaning;
