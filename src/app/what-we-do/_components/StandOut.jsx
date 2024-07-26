"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";

const StandOut = () => {
  return (
    <section className="stand-out">
      <div className="_container">
        <div className="stand-out__body">
          <div className="top-row">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              How We Stand Out
              <br />
              from Competitors
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Spectrum Consults distinguishes itself from competitors through
              our unique value propositions:
            </motion.p>
          </div>

          <div className="stand-out-wrap">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2>
                <span>01</span>
                Customised Strategies
              </h2>
              <p>
                <b>Tailored Approach:</b> Unlike cookie-cutter solutions, we
                tailor our strategies to fit your needs.
              </p>
              <p>
                <b>Bespoke Solutions:</b> Creating bespoke solutions that align
                with your unique goals and challenges.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2>
                <span>02</span>
                Holistic Approach
              </h2>
              <p>
                <b>Comprehensive Services:</b> We address all aspects of your
                business, from strategy and operations to marketing and finance.
              </p>
              <p>
                <b>Integrated Solutions:</b> Providing integrated solutions that
                ensure all parts of your business work harmoniously.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2>
                <span>03</span>
                Transparent Communication
              </h2>
              <p>
                <b>Open Dialogue:</b> We maintain open and honest communication,
                ensuring you are informed immediately.
              </p>
              <p>
                <b>Regular Updates:</b> Providing regular updates and reports to
                keep you apprised of progress and results.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2>
                <span>03</span>
                Result-Oriented Focus
              </h2>
              <p>
                <b>Measurable Outcomes:</b> Our primary goal is to deliver
                tangible, measurable results that drive your success.
              </p>
              <p>
                <b>Performance Tracking:</b> Using performance tracking to
                measure success and make data-driven decisions.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StandOut;
