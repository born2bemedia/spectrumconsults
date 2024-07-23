import ButtonCartIcon from "@/icons/ButtonCartIcon";
import Link from "next/link";
import React from "react";

const ContentCommunication = () => {
  return (
    <div className="services-row">
      <div className="service">
        <div>
          <h3>
            Content
            <br />
            Marketing
          </h3>
          <p>
            Engage your audience with compelling, high-quality content. Our
            content marketing services include content creation, strategy
            development, and distribution to ensure your message reaches and
            resonates with your target audience.
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
            Email
            <br /> Marketing
          </h3>
          <p>
            Develop and execute effective email marketing campaigns that
            convert. From crafting compelling newsletters to automated email
            sequences, we ensure your email marketing efforts drive results.
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
            Public
            <br />
            Relations
          </h3>
          <p>
            Build and maintain a positive public image with our strategic public
            relations services. We help you craft press releases, manage media
            relations, and handle crisis communication to keep your brand in a
            favourable light.
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
            Influencer
            <br />
            Marketing
          </h3>
          <p>
            Leverage the power of influencers to amplify your brand's reach. We
            connect you with the right influencers and manage partneships to
            create authentic and impactful marketing campaigns.
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

export default ContentCommunication;
