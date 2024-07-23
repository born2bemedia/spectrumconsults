"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import ButtonArrow from "@/icons/ButtonArrow";

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
              <h2>Basic Marketing Package</h2>
              <h3>From €1,800</h3>
              <p>
                Start building your brand with the Basic Marketing Package. This
                includes:
              </p>
              <ul>
                <li>
                  Brand Strategy Development: Craft a powerful brand identity
                  that resonates with your target audience by defining your
                  brand's mission, vision, and values.
                </li>
                <li>
                  Initial Digital Presence Setup: Basic setup of your online
                  presence, including social media profiles and initial content
                  creation.
                </li>
                <li>
                  Logo and Visual Identity Creation: Develop a unique logo and
                  visual identity that reflects your brand's personality.
                </li>
                <li>
                  Basic Market Research: Conduct initial market research to
                  identify target demographics and understand market trends.
                </li>
              </ul>
              <Link className="main-button" href="#">
                <span>Order</span>
                <ButtonArrow />
              </Link>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="package"
            >
              <h2>Enhanced Marketing Package</h2>
              <h3>From €2,500</h3>
              <p>
                The Enhanced Marketing Package builds on the foundational brand
                strategy and includes:
              </p>
              <ul>
                <li>All services from the Basic Marketing Package.</li>
                <li>
                  Comprehensive Digital Marketing Strategy: Maximise your online
                  impact with insights and tactics across SEO, SEM, social
                  media, and email marketing.
                </li>
                <li>
                  Website Optimization: Ensure your website is user-friendly,
                  mobile-responsive, and optimised for conversions.
                </li>
                <li>
                  Social Media Strategy: Develop a strategic plan for your
                  social media channels to enhance engagement and reach.
                </li>
                <li>
                  Content Calendar Development: Create a detailed content
                  calendar to plan and schedule your marketing efforts
                  effectively.
                </li>
                <li>
                  Essential Email Marketing Setup: Initial setup and strategy
                  for email marketing campaigns.
                </li>
              </ul>
              <Link className="main-button" href="#">
                <span>Order</span>
                <ButtonArrow />
              </Link>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="package"
            >
              <h2>Professional Marketing Package</h2>
              <h3>From €3,500</h3>
              <p>
                This package includes all the features of the Enhanced package
                and adds:
              </p>
              <ul>
                <li>All services from the Enhanced Marketing Package.</li>
                <li>
                  Content Marketing: Engage your audience with compelling,
                  high-quality content through content creation, strategy
                  development, and distribution.
                </li>
                <li>
                  Advanced Social Media Management: Build a strong social media
                  presence that drives engagement and growth by managing your
                  social media channels and executing campaigns.
                </li>
                <li>
                  Email Marketing Campaigns: Develop and execute effective email
                  marketing campaigns that convert.
                </li>
                <li>
                  Influencer Marketing Strategy: Identify and connect with key
                  influencers to amplify your brand's reach.
                </li>
                <li>
                  Video Marketing: Create engaging video content to capture your
                  audience’s attention and enhance your digital presence.
                </li>
              </ul>
              <Link className="main-button" href="#">
                <span>Order</span>
                <ButtonArrow />
              </Link>
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
              Ultimate <br />
              Marketing Package
            </h2>
            <h2>From €5,000</h2>
            <p>
              The Ultimate Marketing Package provides all previous services
              along with:
            </p>
            <Link className="main-button" href="#">
              <span>Order</span>
              <ButtonArrow />
            </Link>
          </div>
          <div>
            <ul>
              <li>All services from the Professional Marketing Package.</li>
              <li>
                Market Research & Analysis: Understand your market and stay
                ahead of the competition with in-depth market research and
                actionable insights.
              </li>
              <li>
                Comprehensive Campaign Management: Plan and execute targeted
                marketing campaigns that deliver results, covering everything
                from strategy development to execution and analysis.
              </li>
              <li>
                Advanced Public Relations: Build and maintain a positive public
                image with strategic public relations services, including
                crafting press releases, managing media relations, and handling
                crisis communication.
              </li>
              <li>
                Customer Journey Mapping: Create detailed maps of your
                customers' journeys to enhance their experience and improve
                retention.
              </li>
              <li>
                Performance Analytics: Detailed analysis of all marketing
                activities to measure effectiveness and ROI, with regular
                reporting and adjustments.
              </li>
              <li>
                Marketing Automation: Implement marketing automation tools to
                streamline and enhance your marketing efforts.
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompletePackages;
