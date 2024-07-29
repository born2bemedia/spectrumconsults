"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import ButtonArrow from "@/icons/ButtonArrow";

const CareersHero = () => {
  return (
    <section className="careers-hero">
      <div className="_container">
        <div className="careers-hero__body">
          <div className="col-01">
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Join Our Team at <br />
              Spectrum Consults
            </motion.h1>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              We believe in fostering a dynamic and inclusive workplace where
              innovation thrives and talent flourishes. Join a team dedicated to
              driving growth, delivering excellence, and making a positive
              impact. Explore our current job openings and discover how you can
              contribute to our mission and grow your career with us.
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
              src={"/images/careers/careersHero.webp"}
              width={540}
              height={380}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CareersHero;
