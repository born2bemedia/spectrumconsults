"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import ButtonArrow from "@/icons/ButtonArrow";

const WhyChoose = () => {
  return (
    <section className="why-choose">
      <div className="_container">
        <div className="why-choose__top">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Why Choose Our Business Consultants?
          </motion.h2>
          <motion.h3
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Choosing the right business consultant is crucial to achieving your
            goals. <br />
            Here's why our consultants stand out:
          </motion.h3>
          <motion.div
            className="why-choose-wrap"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="why-choose-row">
              <div>
                <h2>
                  Expertise <br />
                  and Experience
                </h2>
                <p>
                  Our team comprises seasoned professionals with extensive
                  industry experience. We bring a wealth of knowledge and proven
                  strategies to address your unique business challenges.
                </p>
              </div>
              <div>
                <h2>
                  Tailored <br />
                  Solutions
                </h2>
                <p>
                  We don't believe in one-size-fits-all. Our consultants work
                  closely with you to develop customised solutions that align
                  with your specific needs, objectives, and industry dynamics.
                </p>
              </div>
              <div>
                <h2>
                  Innovative <br />
                  Approach
                </h2>
                <p>
                  We stay ahead by embracing the latest trends and technologies.
                  Our innovative approach ensures you receive cutting-edge
                  solutions that drive sustainable growth and success.
                </p>
              </div>
              <div>
                <h2>
                  Collaborative <br />
                  Partnership
                </h2>
                <p>
                  We view our clients as partners. Our collaborative approach
                  fosters solid relationships and ensures we work together
                  towards your business goals.
                </p>
              </div>
              <div>
                <h2>
                  Measurable
                  <br />
                  Results
                </h2>
                <p>
                  We are committed to delivering results. Our strategies are
                  designed to provide measurable outcomes, helping you track
                  progress and achieve your business objectives.
                </p>
              </div>
              <div>
                <h2>
                  Comprehensive
                  <br />
                  Services
                </h2>
                <p>
                  From strategic planning and operational improvement to
                  financial consulting and leadership development, we offer
                  various services to support all aspects of your business.
                </p>
              </div>
              <div>
                <h2>
                  Commitment
                  <br />
                  to Excellence
                </h2>
                <p>
                  We strive for excellence in everything we do. Our dedication
                  to high standards and continuous improvement means receiving
                  the best possible service.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="why-choose-bottom"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Link href="#" className="main-button">
              <span>Learn more about our consultants</span>
              <ButtonArrow />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
