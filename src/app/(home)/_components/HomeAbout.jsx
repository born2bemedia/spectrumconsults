"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import ButtonArrow from "@/icons/ButtonArrow";

const HomeAbout = () => {
  return (
    <section className="home-about">
      <div className="_container">
        <div className="home-about__top">
          <motion.span
            className="section-label"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            About Us
          </motion.span>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            At Spectrum Consults, we specialise in offering bespoke business and
            marketing consulting solutions. Our seasoned experts are dedicated
            to providing personalised guidance and innovative strategies to help
            our clients navigate the competitive landscape. We are committed to
            building lasting relationships through a collaborative approach,
            ensuring measurable success and growth for our clients.
          </motion.p>
        </div>
        <motion.img
          className="about-img"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          src="/images/home/homeAbout1.webp"
          alt="homeAbout1"
        ></motion.img>

        <div className="home-about__bottom">
          <motion.span
            className="section-label"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Our Mission
          </motion.span>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Our mission is to empower entrepreneurs with the <br />
            insights, strategies, and tools necessary to achieve <br />
            their marketing and operational goals. We are <br />
            dedicated to driving growth, enhancing market <br />
            presence, and fostering innovation. By leveraging <br />
            our expertise, we aim to create sustainable value <br />
            and help our clients realise their fullest potential in <br />
            their respective industries.
          </motion.p>
          <motion.img
            src="/images/home/homeAbout2.webp"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            alt="homeAbout2"
          ></motion.img>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
