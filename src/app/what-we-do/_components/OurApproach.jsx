"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";

const OurApproach = () => {
  return (
    <section className="our-approach">
      <div className="_container">
        <div className="our-approach__body">
          <motion.span
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="section-label"
          >
            Our Approach
          </motion.span>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            At Spectrum Consults, we believe in a personalised and collaborative
            approach to consulting. Our process begins with understanding your
            unique challenges and objectives. We work closely with you to tailor
            our services to your specific needs, ensuring that our solutions are
            not only practical but also aligned with your vision. Our approach
            involves:
          </motion.p>

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
                  Initial <br />
                  Consultation
                </h3>
                <div>
                  <p>
                    <b>In-Depth Discovery:</b> We conduct a thorough analysis of
                    your business, including interviews with key stakeholders,
                    reviewing existing processes, and understanding your goals.
                  </p>
                </div>
                <div>
                  <p>
                    <b>Customised Assessment:</b> Based on the discovery phase,
                    we develop a comprehensive assessment that identifies
                    strengths, weaknesses, opportunities, and threats.
                  </p>
                </div>
              </div>
              <div className="step">
                <h2>02</h2>
                <h3>
                  Customised <br />
                  Solutions
                </h3>
                <div>
                  <p>
                    <b>Strategic Planning:</b> We craft bespoke strategies that
                    align with your business objectives, focusing on long-term
                    growth and sustainability.
                  </p>
                </div>
                <div>
                  <p>
                    <b>Tailored Recommendations:</b> Our recommendations are
                    specific, actionable, and designed to address your unique
                    challenges and opportunities.
                  </p>
                </div>
              </div>
              <div className="step">
                <h2>03</h2>
                <h3>
                  Collaborative <br />
                  Execution
                </h3>
                <div>
                  <p>
                    <b>Implementation Support:</b> We work alongside your team
                    to ensure the smooth execution of the strategies, providing
                    hands-on support and expertise.
                  </p>
                </div>
                <div>
                  <p>
                    <b>Ongoing Collaboration:</b> Regular check-ins and progress
                    updates ensure the implementation stays on track and adapts
                    to emerging challenges.
                  </p>
                </div>
              </div>
              <div className="step">
                <h2>04</h2>
                <h3>
                  Continuous <br />
                  Support
                </h3>
                <div>
                  <p>
                    <b>Performance Monitoring:</b> We monitor the performance of
                    implemented strategies to ensure they are delivering the
                    expected results.
                  </p>
                </div>
                <div>
                  <p>
                    <b>Adaptation and Improvement:</b> Continuous feedback loops
                    and performance reviews allow us to adapt strategy and
                    improve as needed.
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

export default OurApproach;
