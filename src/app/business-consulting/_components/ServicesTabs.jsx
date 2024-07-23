"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import StrategicPlaning from "./Services/StrategicPlaning";
import OperationalExcellence from "./Services/OperationalExcellence";
import FinancialOptimization from "./Services/FinancialOptimization";
import CustomerExperienceManagement from "./Services/CustomerExperienceManagement";
import TechnologyDigitalTransformation from "./Services/TechnologyDigitalTransformation";

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
                  Strategic Planning
                  <br />& Development
                </span>
              </button>
              <button
                onClick={() => tabChange("tab2")}
                className={`${activeTab == "tab2" ? "active" : ""}`}
              >
                <span>
                  Operational
                  <br />
                  Excellence
                </span>
              </button>
              <button
                onClick={() => tabChange("tab3")}
                className={`${activeTab == "tab3" ? "active" : ""}`}
              >
                <span>
                  Financial
                  <br />
                  Optimization
                </span>
              </button>
              <button
                onClick={() => tabChange("tab4")}
                className={`${activeTab == "tab4" ? "active" : ""}`}
              >
                <span>
                  Customer & Experience
                  <br />
                  Management
                </span>
              </button>
              <button
                onClick={() => tabChange("tab5")}
                className={`${activeTab == "tab5" ? "active" : ""}`}
              >
                <span>
                  Technology & Digital
                  <br />
                  Transformation
                </span>
              </button>
            </div>

            <div className="tabs-content">
              <img src="/images/consulting/tabsBack.svg" />
              <img src="/images/consulting/tabsBackMob.svg" />
              {activeTab == "tab1" && <StrategicPlaning />}
              {activeTab == "tab2" && <OperationalExcellence />}
              {activeTab == "tab3" && <FinancialOptimization />}
              {activeTab == "tab4" && <CustomerExperienceManagement />}
              {activeTab == "tab5" && <TechnologyDigitalTransformation />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesTabs;
