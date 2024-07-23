import ButtonCartIcon from "@/icons/ButtonCartIcon";
import Link from "next/link";
import React from "react";

const BrandStrategyDevelopment = () => {
  return (
    <div className="services-row">
      <div className="service">
        <div>
          <h3>
            Brand Strategy <br />
            Development
          </h3>
          <p>
            Craft a powerful brand identity that resonates with your target
            audience. We help you define your brand's mission, vision, and
            values, creating a cohesive strategy differentiating you in the
            marketplace.
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
            Brand
            <br /> Positioning
          </h3>
          <p>
            Establish a unique position in the market that sets you apart from
            competitors. We help you identify your unique selling proposition
            and communicate it effectively.
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
            Rebranding
            <br />
            Services
          </h3>
          <p>
            Refresh and revitalise your brand to stay relevant and appealing. We
            assist with complete rebranding, including visual identity,
            messaging, and market repositioning.
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
            Brand
            <br />
            Audits
          </h3>
          <p>
            Conduct thorough assessments of your current brand to identify
            strengths, weaknesses, and areas for improvement.
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

export default BrandStrategyDevelopment;
