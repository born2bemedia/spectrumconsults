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
            Our Step-by-Step Approach
          </motion.h2>
          <motion.h3
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Your Path to IT Success. At Spectrum Consults, we follow a
            structured and collaborative approach to ensure your IT consulting
            experience is seamless and practical. From setting up your digital
            infrastructure to optimizing performance and security, we work with
            you every step of the way to enhance your technology capabilities. 
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
                  We begin with a comprehensive consultation to understand your
                  IT needs, digital challenges, and business objectives. This
                  helps us tailor our services to your specific requirements.
                </p>
              </div>
              <div>
                <h2>
                  IT Assessment <br />& Planning
                </h2>
                <p>
                  Our team conducts an in-depth assessment of your existing IT
                  setup, identifying gaps and opportunities for improvement.
                  Based on this, we create a strategic IT roadmap customized for
                  your workflow.
                </p>
              </div>
              <div>
                <h2>
                  Solution <br />
                  Development
                </h2>
                <p>
                  We develop and recommend tailored solutions, whether website
                  development, cybersecurity enhancements, cloud infrastructure
                  setup, or workflow automation. Our experts ensure everything
                  is aligned with your goals.
                </p>
              </div>
              <div>
                <h2>
                  Implementation <br />& Setup
                </h2>
                <p>
                  Once the strategy is approved, we will implement your IT
                  solutions. This includes setting up websites, configuring
                  business email, optimizing networks, and integrating digital
                  tools.
                </p>
              </div>
              <div>
                <h2>
                  Security & <br />
                  Performance <br />
                  Optimization
                </h2>
                <p>
                  Ensuring efficiency and security is a top priority. We
                  optimize your systems for peak performance, conduct security
                  audits, and implement protective measures to safeguard your
                  digital assets.
                </p>
              </div>
              <div>
                <h2>
                  IT Support & <br />
                  Troubleshooting
                </h2>
                <p>
                  We provide ongoing IT support, resolving any technical issues
                  you may encounter. We ensure seamless operations, whether it’s
                  software troubleshooting, remote assistance, or system
                  upgrades.
                </p>
              </div>
              <div>
                <h2>
                  Continuous <br />
                  Improvement & <br />
                  Updates
                </h2>
                <p>
                  Technology evolves rapidly, and so do our solutions. We help
                  you stay ahead with regular system updates, performance
                  enhancements, and recommendations for emerging technologies.
                </p>
              </div>
              <div>
                <h2>
                  Feedback
                  <br />& Collaboration
                </h2>
                <p>
                  Your feedback is invaluable. We maintain open communication,
                  ensuring our IT services adapt to your evolving needs and
                  continue to support your success.
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
            <Link href="/get-in-touch" className="main-button">
              <span>Learn more about the process</span>
              <ButtonArrow />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
