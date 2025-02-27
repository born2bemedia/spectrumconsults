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
              <h2>
                Basic IT <br />
                Package
              </h2>
              <h3>From €1,300</h3>
              <p>
                Kickstart your digital presence with the essentials. This
                package includes:
              </p>
              <ul>
                <li>
                  Website Development: Build a custom, responsive website
                  tailored to your brand.
                </li>
                <li>
                  Domain & Hosting Setup: Secure your domain and set up reliable
                  hosting for a smooth online experience.
                </li>
                <li>
                  Business Email Setup: Establish professional communication
                  with a custom email account.
                </li>
                <li>
                  Cloud Storage & Collaboration Setup: Get started with secure
                  file sharing and data backup solutions.
                </li>
              </ul>
              <OrderButton packageItem={"Basic IT Package"} />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="package"
            >
              <h2>Enhanced IT Package</h2>
              <h3>From €2,500</h3>
              <p>
                Expand your digital capabilities with added productivity and
                support. This package includes:
              </p>
              <ul>
                <li>All services from the Basic IT Package.</li>
                <li>
                  Landing Page Development: Create high-impact landing pages
                  designed to drive engagement.
                </li>
                <li>
                  Workflow Automation: Automate routine tasks to boost your
                  productivity and streamline operations.
                </li>
                <li>
                  Tech Stack Consultation: Receive expert guidance on selecting
                  the right software and tools for your needs.
                </li>
              </ul>
              <OrderButton packageItem={"Enhanced IT Package"} />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="package"
            >
              <h2>Professional IT Package</h2>
              <h3>From €3,500</h3>
              <p>
                Elevate your IT framework with advanced solutions and dedicated
                support. This package includes:
              </p>
              <ul>
                <li>All services from the Enhanced IT Package.</li>
                <li>
                  Cybersecurity Consultation: Protect your online assets with
                  expert security assessments and recommendations.
                </li>
                <li>
                  Two-Factor Authentication & Password Management: Enhance
                  account security with robust authentication solutions.
                </li>
                <li>
                  Remote IT Support: Access on-demand troubleshooting and
                  technical assistance to keep your systems running smoothly.
                </li>
              </ul>
              <OrderButton packageItem={"Professional IT Package"} />
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
              Ultimate IT
              <br />
              Package
            </h2>
            <h2>From €5,000</h2>

            <OrderButton packageItem={"Ultimate IT Package"} />
          </div>
          <div>
            <p>
              The Ultimate Marketing Package provides all previous services
              along with:
            </p>
            <ul>
              <li>All services from the Professional IT Package.</li>
              <li>
                E-commerce Setup: Launch a fully integrated online store with
                secure payment gateways.
              </li>
              <li>
                Device Optimization & Performance Tuning: Maximize the
                efficiency of your devices for peak performance.
              </li>
              <li>
                Backup & Data Recovery Solutions: Safeguard your critical data
                with automated backup and recovery services.
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompletePackages;
