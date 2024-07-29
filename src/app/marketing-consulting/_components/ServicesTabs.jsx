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

const ServicesTabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");

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
                  Brand Strategy
                  <br />& Development
                </span>
              </button>
              <button
                onClick={() => tabChange("tab2")}
                className={`${activeTab == "tab2" ? "active" : ""}`}
              >
                <span>
                  Digital Marketing
                  <br />& Online Presence
                </span>
              </button>
              <button
                onClick={() => tabChange("tab3")}
                className={`${activeTab == "tab3" ? "active" : ""}`}
              >
                <span>
                  Content
                  <br />& Communication
                </span>
              </button>
              <button
                onClick={() => tabChange("tab4")}
                className={`${activeTab == "tab4" ? "active" : ""}`}
              >
                <span>
                  Market Research
                  <br />& Analysis
                </span>
              </button>
              <button
                onClick={() => tabChange("tab5")}
                className={`${activeTab == "tab5" ? "active" : ""}`}
              >
                <span>
                  Campaign Management
                  <br />& Execution
                </span>
              </button>
            </div>

            <div className="tabs-content">
              <img src="/images/consulting/tabsBack.svg" />
              <img src="/images/consulting/tabsBackMob.svg" />
              {activeTab == "tab1" && (
                <Products category={"brand-strategy-development"} />
              )}
              {activeTab == "tab2" && (
                <Products category={"digital-marketing-online-presence"} />
              )}
              {activeTab == "tab3" && (
                <Products category={"content-communication"} />
              )}
              {activeTab == "tab4" && (
                <Products category={"market-research-analysis"} />
              )}
              {activeTab == "tab5" && (
                <Products category={"campaign-management-execution"} />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesTabs;
