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
            className="why-choose-wrap"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="why-choose-row">
              <div>
                <h2>
                  Initial <br />
                  Consultation
                </h2>
                <p>
                  We start with a comprehensive consultation to understand your
                  business, marketing needs, and objectives. This helps us
                  tailor our services to your specific goals.
                </p>
              </div>
              <div>
                <h2>
                  Market Research <br />& Analysis
                </h2>
                <p>
                  Our team conducts thorough market research to gather insights
                  into your target audience, competitors, and industry trends.
                  This forms the foundation of our strategic planning.
                </p>
              </div>
              <div>
                <h2>
                  Strategy <br />
                  Development
                </h2>
                <p>
                  Based on our research, we develop a customised marketing
                  strategy that aligns with your business goals. This includes
                  brand positioning, digital marketing plans, content
                  strategies, and more.
                </p>
              </div>
              <div>
                <h2>Implementation</h2>
                <p>
                  We put the approved strategy into action, setting up your
                  digital presence, creating content, managing social media, and
                  executing campaigns. Our team ensures every aspect is
                  optimised for success.
                </p>
              </div>
              <div>
                <h2>
                  Ongoing
                  <br />
                  Management
                </h2>
                <p>
                  Continuous management and optimization are crucial. We monitor
                  all marketing activities, making necessary adjustments to
                  improve performance and achieve desired outcomes.
                </p>
              </div>
              <div>
                <h2>
                  Performance
                  <br />
                  Analytics
                </h2>
                <p>
                  We provide detailed analytics and reports to measure the
                  effectiveness of our marketing efforts. This includes tracking
                  key metrics, evaluating ROI, and identifying areas for
                  improvement.
                </p>
              </div>
              <div>
                <h2>
                  Continuous
                  <br />
                  Improvement
                </h2>
                <p>
                  Marketing is an ongoing process. We work with you to refine
                  strategies, explore new opportunities, and ensure your
                  marketing efforts evolve with market changes and business
                  growth.
                </p>
              </div>
              <div>
                <h2>
                  Feedback
                  <br />& Collaboration
                </h2>
                <p>
                  Your feedback is essential. We maintain open communication to
                  ensure our services meet your expectations and adapt to your
                  evolving needs.
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
              <span>Start your marketing journey</span>
              <ButtonArrow />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
