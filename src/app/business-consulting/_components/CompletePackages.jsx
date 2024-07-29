"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import ButtonArrow from "@/icons/ButtonArrow";
import OrderButton from "@/components/OrderButton";

const CompletePackages = () => {
  return (
    <section className="packages-wrap">
      <div className="packages">
        <div className="_container">
          <div className="row">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="package"
            >
              <h2>Starter Business Package</h2>
              <h3>From €1,800</h3>
              <p>
                Kickstart your business transformation with our Starter Business
                Package. This package includes:
              </p>
              <ul>
                <li>
                  Comprehensive Business Assessment: Evaluate your current
                  business situation and identify key areas for improvement.
                </li>
                <li>
                  Strategic Planning Session: Define your business goals and
                  outline actionable steps.
                </li>
                <li>
                  Market Analysis: Gain a competitive edge with initial market
                  research and analysis to understand market trends and identify
                  opportunities.
                </li>
                <li>
                  Initial Risk Assessment: Identify potential risks and develop
                  basic mitigation strategies.
                </li>
              </ul>
              <OrderButton packageItem={"Starter Business Package"} />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="package"
            >
              <h2>Growth Business Package</h2>
              <h3>From €2,500</h3>
              <p>
                Building on the essentials, the Growth Business Package
                includes:
              </p>
              <ul>
                <li>All services from the Starter Business Package.</li>
                <li>
                  Operational Improvement Strategies: Optimise your business
                  processes for maximum efficiency and effectiveness.
                </li>
                <li>
                  Performance Management Tools: Enhance your team's performance
                  with tools and strategies for setting goals, measuring
                  progress, and improving productivity.
                </li>
                <li>
                  Business Process Reengineering: Transform your business
                  processes to achieve significant performance improvements.
                </li>
                <li>
                  Financial Health Check: Initial financial consulting to help
                  you understand and improve your financial standing.
                </li>
              </ul>
              <OrderButton packageItem={"Growth Business Package"} />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="package"
            >
              <h2>Advanced Business Package</h2>
              <h3>From €3,500</h3>
              <p>The Advanced Business Package includes:</p>
              <ul>
                <li>All services from the Growth Business Package.</li>
                <li>
                  Detailed Financial Consulting: Strengthen your financial
                  health with expert advice on budgeting, forecasting, financial
                  analysis, and risk management.
                </li>
                <li>
                  In-Depth Market Analysis: Gain a deeper competitive edge with
                  extensive market research and analysis.
                </li>
                <li>
                  Change Management Planning: Develop a comprehensive change
                  management strategy to navigate organisational changes
                  smoothly and effectively.
                </li>
                <li>
                  Customer Experience Optimization: Improve customer
                  interactions and satisfaction with targeted strategies.
                </li>
              </ul>
              <OrderButton packageItem={"Advanced Business Package"} />
            </motion.div>
          </div>
        </div>
      </div>

      <div className="_container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="premium"
        >
          <div>
            <img src="/images/consulting/diamond.svg" />
            <h2>
              Premium <br />
              Business Package
            </h2>
            <h2>From €5,000</h2>
            <p>
              Our most comprehensive offering, the Premium Business Package,
              includes:
            </p>
            <OrderButton packageItem={"Premium Business Package"} />
          </div>
          <div>
            <ul>
              <li>All services from the Advanced Business Package.</li>
              <li>
                Full-Scale Change Management: Implement strategies and support
                to ensure smooth transitions.
              </li>
              <li>
                Leadership Development: Cultivate strong organisational leaders
                with customised leadership development programs.
              </li>
              <li>
                Innovation & Growth Strategy: Foster a culture of innovation and
                drive sustainable growth with expert guidance.
              </li>
              <li>
                Comprehensive Risk Management: Develop robust strategies to
                manage potential threats and ensure business continuity.
              </li>
              <li>
                Technology Integration: Integrate the latest technologies to
                streamline operations and enhance business performance.
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompletePackages;
