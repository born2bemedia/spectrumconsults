"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import ButtonArrow from "@/icons/ButtonArrow";

const ResultsHero = () => {
  return (
    <section className="results-hero">
      <div className="_container">
        <div className="results-hero__body">
          <div className="col-01">
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Transformative <br />
              <span>Success</span> Stories
            </motion.h1>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              At Spectrum Consults, we take pride in the success of our clients.
              Our personalised consulting services have empowered private
              clients and entrepreneurs to achieve their goals, overcome
              challenges, and drive their ventures to new heights. Below,
              explore ten comprehensive case studies that showcase how our
              expertise in business and marketing consulting has made a lasting
              impact on our clients' journeys.
            </motion.h2>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="col-02"
          >
            <Image
              src={"/images/results/resultsHero.webp"}
              width={540}
              height={380}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ResultsHero;
