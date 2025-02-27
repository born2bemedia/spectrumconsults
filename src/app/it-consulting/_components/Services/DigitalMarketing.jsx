import ButtonCartIcon from "@/icons/ButtonCartIcon";
import Link from "next/link";
import React from "react";

const DigitalMarketing = () => {
  return (
    <div className="services-row">
      <div className="service">
        <div>
          <h3>
            Digital Marketing
            <br />
            Strategy
          </h3>
          <p>
            Maximise your online impact with a comprehensive digital marketing
            strategy. We provide insights and tactics across SEO, SEM, social
            media, and email marketing to boost your online presence and
            engagement.
          </p>
        </div>
        <Link href="#" className="main-button">
          <span>Order</span>
          <ButtonCartIcon />
        </Link>
      </div>
      <div className="service">
        <div>
          <h3>SEO & SEM</h3>
          <p>
            Improve your website's visibility and attract more traffic through
            expert SEO and SEM strategies. We optimise your website and manage
            paid search campaigns to ensure you rank higher and reach the right
            audience.
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
            Social Media
            <br />
            Management
          </h3>
          <p>
            Build a solid social media presence that drives engagement and
            growth. We manage your social media channels, creating and executing
            campaigns that connect with your audience and enhance your brand's
            visibility.
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
            Website
            <br />
            Optimization
          </h3>
          <p>
            Ensure your website is user-friendly, mobile-responsive, and
            optimised for conversions. We offer services to improve website
            design, functionality, and performance.
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

export default DigitalMarketing;
