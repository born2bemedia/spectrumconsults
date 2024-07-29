"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import ButtonArrow from "@/icons/ButtonArrow";

const HomeSolutions = () => {
  return (
    <section className="home-solutions">
      <div className="what-we-do">
        <div className="_container">
          <motion.span
            className="section-label"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            What We Do
          </motion.span>
          <div className="row">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Transforming <br />
              Visions into Reality
            </motion.h2>
            <div>
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                Our approach centres on understanding your unique business
                challenges and crafting bespoke solutions that align with your
                vision. Our comprehensive consulting services encompass
                strategic planning, operational improvement, and innovative
                growth strategies. By leveraging our deep expertise and
                collaborative methodology, we drive sustainable growth and
                ensure your business competes and thrives in a dynamic
                marketplace.
              </motion.p>
              <motion.div
                className="button-wrap"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <Link href="/what-we-do" className="main-button">
                  <span>Book a free consultation</span>
                  <ButtonArrow />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <div className="client-results">
        <div className="_container">
          <motion.span
            className="section-label"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Client Results
          </motion.span>
          <div className="row">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="white"
            >
              Success Stories <br />
              that Inspire
            </motion.h2>
            <div>
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="white"
              >
                Keep up with the ever-evolving market landscape. Our Industry
                News section brings you the latest updates, trends, and insights
                from across various sectors, helping you stay informed and make
                strategic decisions.
              </motion.p>
              <motion.div
                className="button-wrap"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <Link href="/client-results" className="main-button">
                  <span>See client success</span>
                  <ButtonArrow />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <div className="industry-news">
        <div className="_container">
          <motion.span
            className="section-label"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Industry News
          </motion.span>
          <div className="row">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="white"
            >
              Stay Ahead <br />
              with the Latest <br />
              Industry Trends
            </motion.h2>
            <div>
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="white"
              >
                Keep up with the ever-evolving market landscape. Our Industry
                News section brings you the latest updates, trends, and insights
                from across various sectors, helping you stay informed and make
                strategic decisions.
              </motion.p>
              <motion.div
                className="button-wrap"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <Link href="/industry-news" className="main-button">
                  <span>Read industry news</span>
                  <ButtonArrow />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <div className="articles">
        <div className="_container">
          <motion.span
            className="section-label"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Articles
          </motion.span>
          <div className="row">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Insights and <br />
              Expertise
            </motion.h2>
            <div>
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                Dive into our collection of articles written by industry
                experts. From in-depth analysis to practical tips, our articles
                provide valuable knowledge to help you navigate the complexities
                of business and marketing.
              </motion.p>
              <motion.div
                className="button-wrap"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <Link href="/articles" className="main-button">
                  <span>Explore articles</span>
                  <ButtonArrow />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <div className="careers">
        <div className="_container">
          <motion.span
            className="section-label"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Careers
          </motion.span>
          <div className="row">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="white"
            >
              Join Our <br/>Dynamic Team
            </motion.h2>
            <div>
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="white"
              >
                Are you ready to take your career to the next level? At Spectrum
                Consults, we are always looking for talented individuals who
                share our passion for excellence and innovation. Explore our
                current job openings and become part of a team that makes a
                difference.
              </motion.p>
              <motion.div
                className="button-wrap"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <Link href="/careers" className="main-button">
                  <span>View open positions</span>
                  <ButtonArrow />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSolutions;
