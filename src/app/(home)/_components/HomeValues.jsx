"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";

const HomeValues = () => {
  return (
    <section className="home-values">
      <div className="_container">
        <div className="home-values__top">
          <motion.span
            className="section-label"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Our Values
          </motion.span>
          <motion.div
            className="values-wrap"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="values-row">
              <div>
                <h2>
                  Integrity <br />
                  in Action
                </h2>
                <p>
                  We believe in authenticity and transparency, ensuring that our
                  actions always align with our words.
                </p>
              </div>
              <div>
                <h2>
                  Pursuit of <br />
                  Excellence
                </h2>
                <p>
                  We strive for brilliance in everything we do, constantly
                  raising the bar to exceed expectations.
                </p>
              </div>
              <div>
                <h2>
                  Creative <br />
                  Innovation
                </h2>
                <p>
                  We thrive on creativity and originality, finding unique
                  solutions to the most complex challenges.
                </p>
              </div>
              <div>
                <h2>
                  Empowering <br />
                  Partnerships
                </h2>
                <p>
                  We build empowering relationships that celebrate collaboration
                  and mutual growth.
                </p>
              </div>
              <div>
                <h2>
                  Client-
                  <br />
                  Centred <br />
                  Excellence
                </h2>
                <p>
                  Our clients are the core of our universe, and their success
                  defines our own.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeValues;
