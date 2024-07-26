"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import ButtonArrow from "@/icons/ButtonArrow";

const WhatWeDoHero = () => {
  return (
    <section className="what-hero">
      <div className="_container">
        <div className="what-hero__body">
          <div className="col-01">
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <span>Elevate</span> Your Project <br />
              with Spectrum <br />
              Consults
            </motion.h1>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              We go beyond traditional consulting to provide a holistic and
              innovative approach tailored to your needs. Our comprehensive
              range of services, cutting-edge methodologies, and client-centric
              values set us apart from the competition. Discover how our
              collaborative approach and advanced techniques work and why
              clients choose us for sustainable growth and success. Choose
              Spectrum Consults and embark on a journey towards excellence and
              lasting impact.
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
              src={"/images/whatWeDo/whatWeDoHero.webp"}
              width={540}
              height={380}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoHero;
