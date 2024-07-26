"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";

const ClientCentricValues = () => {
  return (
    <section className="our-approach values">
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
              Client-Centric Values
            </motion.span>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Our core values define who we are and guide our actions:
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
                <div className="value">
                  <h2>
                    Honesty and <br />
                    Transparency
                  </h2>
                  <p>
                    We uphold the highest standards of honesty and transparency
                    in all our dealings.
                  </p>
                </div>
                <div className="value">
                  <h2>
                    Forward- <br />
                    Thinking
                  </h2>
                  <p>
                    Commitment to forward-thinking and innovative solutions.
                  </p>
                </div>
              </div>
              <div className="step">
                <div className="value">
                  <h2>
                    Ethical <br />
                    Practices
                  </h2>
                  <p>Commitment to ethical practices in everything we do.</p>
                </div>
                <div className="value">
                  <h2>Teamwork</h2>
                  <p>
                    We believe in the power of teamwork and building strong,
                    cooperative relationships.
                  </p>
                </div>
              </div>
              <div className="step">
                <div className="value">
                  <h2>
                    High <br />
                    Standards
                  </h2>
                  <p>
                    We strive for excellence in everything we do, consistently
                    delivering high-quality services.
                  </p>
                </div>
                <div className="value">
                  <h2>Partnership</h2>
                  <p>
                    Fostering partnerships with clients to achieve mutual
                    success.
                  </p>
                </div>
              </div>
              <div className="step">
                <div className="value">
                  <h2>
                    Continuous <br />
                    Improvement
                  </h2>
                  <p>
                    Embracing a culture of continuous improvement to enhance our
                    services.
                  </p>
                </div>
                <div className="value">
                  <h2>
                    Client-
                    <br />
                    Centric Focus
                  </h2>
                  <p>
                    Our clients' success is our success. We are dedicated to
                    helping you achieve your business goals.
                  </p>
                </div>
              </div>
              <div className="step">
                <div className="value">
                  <h2>Creativity</h2>
                  <p>
                    We embrace creativity and constant improvement to stay ahead
                    in the industry.
                  </p>
                </div>
                <div className="value">
                  <h2>
                    Value
                    <br />
                    Creation
                  </h2>
                  <p>
                    Creating value for clients through our expertise and
                    dedication.
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

export default ClientCentricValues;
