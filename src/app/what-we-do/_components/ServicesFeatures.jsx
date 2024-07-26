"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";

const ServicesFeatures = () => {
  return (
    <section className="our-approach features">
      <div className="_container">
        <div className="our-approach__body">
          <div className="top-row">
            <motion.span
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="section-label"
            >
              Features of Our Services
            </motion.span>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Spectrum Consults offers a wide range of features that set our
              services apart. These include:
            </motion.p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="steps-wrap"
          >
            <div className="steps-row">
              <div className="step">
                <h2>01</h2>
                <h3>
                  Comprehensive <br />
                  Solutions
                </h3>
                <div>
                  <p>
                    <b>End-to-End Services:</b> From strategic planning to
                    execution, we provide a complete suite of consulting
                    services.
                  </p>
                </div>
                <div>
                  <p>
                    <b>Holistic Approach:</b> Addressing all aspects of your
                    business, including operations, finance, marketing, and
                    human resources.
                  </p>
                </div>
              </div>
              <div className="step">
                <h2>02</h2>
                <h3>
                  Industry <br />
                  Expertise
                </h3>
                <div>
                  <p>
                    <b>Diverse Experience:</b> Our consultants have extensive
                    experience across various industries, bringing valuable
                    insights and expertise.
                  </p>
                </div>
                <div>
                  <p>
                    <b>Specialised Knowledge:</b> Leveraging industry-specific
                    knowledge to provide tailored solutions.
                  </p>
                </div>
              </div>
              <div className="step">
                <h2>03</h2>
                <h3>
                  Personalised <br />
                  Attention
                </h3>
                <div>
                  <p>
                    <b>Tailored Solutions:</b> We treat each client as unique,
                    offering customised solutions that address specific
                    challenges and goals.
                  </p>
                </div>
                <div>
                  <p>
                    <b>Dedicated Support:</b> Providing one-on-one support
                    ensures your needs are met and exceeded.
                  </p>
                </div>
              </div>
              <div className="step">
                <h2>04</h2>
                <h3>
                  Innovative <br />
                  Tools
                </h3>
                <div>
                  <p>
                    <b>Cutting-Edge Technology:</b> Leveraging the latest tools
                    and technologies to deliver effective and efficient
                    solutions.
                  </p>
                </div>
                <div>
                  <p>
                    <b>Digital Transformation:</b> Helping businesses embrace
                    digital transformation to stay competitive in the digital
                    age.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesFeatures;
