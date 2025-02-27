"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import BrandStrategyDevelopment from "./Services/BrandStrategyDevelopment";
import DigitalMarketing from "./Services/DigitalMarketing";
import ContentCommunication from "./Services/ContentCommunication";
import MarketResearchAnalysis from "./Services/MarketResearchAnalysis";
import CampaignManagementExecution from "./Services/CampaignManagementExecution";
import Products from "@/components/Products";

const ServicesTabs = ({
  category1,
  category2,
  category3,
  category4,
  category5,
}) => {
  const [activeTab, setActiveTab] = useState("tab1");

  console.log(category1);

  const tabChange = (value) => {
    setActiveTab(value);
  };

  return (
    <section className="services-tabs">
      <div className="_container">
        <div className="services-tabs__body">
          <div className="tabs">
            <div className="tabs-nav">
              <motion.span
                className="section-label"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                How We Can Help
              </motion.span>
              <button
                onClick={() => tabChange("tab1")}
                className={`${activeTab == "tab1" ? "active" : ""}`}
              >
                <span>
                  Web & Digital <br />
                  Presence
                </span>
              </button>
              <button
                onClick={() => tabChange("tab2")}
                className={`${activeTab == "tab2" ? "active" : ""}`}
              >
                <span>
                  Productivity & <br />
                  Digital Tools
                </span>
              </button>
              <button
                onClick={() => tabChange("tab3")}
                className={`${activeTab == "tab3" ? "active" : ""}`}
              >
                <span>
                  Cybersecurity & <br />
                  Data Protection
                </span>
              </button>
              <button
                onClick={() => tabChange("tab4")}
                className={`${activeTab == "tab4" ? "active" : ""}`}
              >
                <span>
                  IT Support & Technical <br />
                  Assistance
                </span>
              </button>
              <button
                onClick={() => tabChange("tab5")}
                className={`${activeTab == "tab5" ? "active" : ""}`}
              >
                <span>
                  Digital Infrastructure <br />& Hardware Solutions
                </span>
              </button>
            </div>

            <div className="tabs-content">
              <img src="/images/consulting/tabsBack.svg" />
              <img src="/images/consulting/tabsBackMob.svg" />
              <div className={`${activeTab == "tab1" ? "active" : ""}`}>
                <Products category={category1} />
              </div>
              <div className={`${activeTab == "tab2" ? "active" : ""}`}>
                <Products category={category2} />
              </div>
              <div className={`${activeTab == "tab3" ? "active" : ""}`}>
                <Products category={category3} />
              </div>
              <div className={`${activeTab == "tab4" ? "active" : ""}`}>
                <Products category={category4} />
              </div>
              <div className={`${activeTab == "tab5" ? "active" : ""}`}>
                <Products category={category5} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesTabs;
