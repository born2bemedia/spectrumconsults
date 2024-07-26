"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";

const OurTechniques = () => {
  return (
    <section className="our-techniques">
      <div className="_container">
        <div className="our-techniques__body">
          <div className="top-row">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Our Techniques <br />
              and Methodologies
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Our expertise is built on a foundation of proven techniques and
              advanced methodologies. We leverage the latest industry best
              practices and innovative approaches to deliver exceptional
              results. Some of our fundamental techniques include:
            </motion.p>
          </div>

          <div className="techniques-wrap">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="row"
            >
              <h3>Advanced Analytics</h3>
              <p>
                Utilising sophisticated data analytics tools to gather insights
                on market trends, customer behaviours, and business performance.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="row"
            >
              <h3>Predictive Modelling</h3>
              <p>
                Employing predictive modelling to forecast future trends and
                inform strategic decisions.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="row"
            >
              <h3>Flexible Project Management</h3>
              <p>
                Adopting agile practices to ensure flexibility and rapid
                adaptation to changing market conditions.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="row"
            >
              <h3>Iterative Development</h3>
              <p>
                Implementing solutions in iterative cycles to improve and adapt
                based on feedback and results continuously.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="row"
            >
              <h3>User-Centric Approach</h3>
              <p>
                Focusing on the needs and experiences of end-users to drive
                innovative solutions.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="row"
            >
              <h3>Prototyping and Testing</h3>
              <p>
                Rapid prototyping and testing of ideas to identify the most
                effective solutions.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="row"
            >
              <h3>Efficiency and Value Creation</h3>
              <p>
                Focusing on eliminating waste and optimising processes to
                deliver maximum value.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="row"
            >
              <h3>Continuous Improvement</h3>
              <p>
                Embracing a culture of continuous improvement to enhance
                efficiency and effectiveness.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="row"
            >
              <h3>Industry Comparisons</h3>
              <p>
                Comparing your performance with industry standards to identify
                best practices and areas for improvement.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="row"
            >
              <h3>Goal Setting</h3>
              <p>
                Setting ambitious yet achievable goals based on benchmark data.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTechniques;
