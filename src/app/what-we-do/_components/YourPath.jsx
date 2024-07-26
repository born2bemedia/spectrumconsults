"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";

const YourPath = () => {
  return (
    <section className="your-path">
      <div className="_container">
        <div className="your-path__top">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Your Path to Marketing Success
          </motion.h2>
          <motion.h3
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            At Spectrum Consults, we believe in a systematic and collaborative
            approach to ensure your marketing consulting experience is seamless
            and effective. Here's how we work with you every step of the way to
            elevate your brand and achieve your marketing goals:
          </motion.h3>
          <motion.div
            className="your-path-wrap"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="your-path-row">
              <div>
                <h2>
                  Proven <br />
                  Success
                </h2>
                <p>
                  <b>Track Record:</b> We have a history of helping customers
                  achieve their goals and drive growth.
                </p>
                <p>
                  <b>Case Studies:</b> Showcasing success stories and
                  testimonials from satisfied clients.
                </p>
              </div>
              <div>
                <h2>
                  Expert <br />
                  Team
                </h2>
                <p>
                  <b>Seasoned Professionals:</b> Our team comprises
                  professionals with deep industry knowledge and expertise.
                </p>
                <p>
                  <b>Continuous Learning:</b> Commitment to continuous learning
                  and professional development to stay ahead of industry trends.
                </p>
              </div>
              <div>
                <h2>
                  Client-Centric <br />
                  Approach
                </h2>
                <p>
                  <b>Collaborative Partnership:</b> We prioritise your needs and
                  work collaboratively to achieve your objectives.
                </p>
                <p>
                  <b>Responsive Service:</b> Providing timely and responsive
                  service to address your concerns and needs.
                </p>
              </div>
              <div>
                <h2>
                  Innovative <br />
                  Solutions
                </h2>
                <p>
                  <b>Forward-Thinking:</b> We stay ahead of industry trends,
                  offering innovative solutions that give you a competitive
                  edge.
                </p>
                <p>
                  <b>Creative Problem-Solving:</b> Employing creative
                  problem-solving techniques to address complex challenges.
                </p>
              </div>
              <div>
                <h2>
                  Sustainable <br />
                  Results
                </h2>
                <p>
                  <b>Long-Term Value:</b> We focus on delivering solutions that
                  provide long-term value and sustainable success.
                </p>
                <p>
                  <b>Performance Metrics:</b> Using performance metrics to
                  measure success and ensure continuous improvement.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default YourPath;
