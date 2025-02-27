import ButtonCartIcon from "@/icons/ButtonCartIcon";
import Link from "next/link";
import React from "react";

const MarketResearchAnalysis = () => {
  return (
    <div className="services-row">
      <div className="service">
        <div>
          <h3>
            Market Research
            <br />& Analysis
          </h3>
          <p>
            Understand your market and stay ahead of the competition with
            in-depth market research. We provide actionable insights into market
            trends, customer behaviour, and the competitive landscape to inform
            your marketing strategies.
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
            Customer <br />
            Insights
          </h3>
          <p>
            Gain a deep understanding of your customers' needs, preferences, and
            behaviours. We conduct surveys, focus groups, and data analysis to
            gather valuable customer insights.
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
            Competitive
            <br />
            Analysis
          </h3>
          <p>
            Assess your competitors' strengths and weaknesses to develop
            strategies that give you a competitive edge.
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
            Segmentation
          </h3>
          <p>
            Identify and target specific market segments to tailor your
            marketing efforts for maximum impact.
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

export default MarketResearchAnalysis;
