"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";

const HomeStory = () => {
  return (
    <section className="home-story">
      <div className="_container">
        <div className="home-story__body">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Our Story
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Spectrum Consults was founded to provide individuals with access to
            top-tier consulting services that truly understand their unique
            challenges. Our story concerns passion, dedication, and a relentless
            quest for excellence. From humble beginnings, we have evolved into a
            trusted partner for businesses across various industries, known for
            our ability to adapt to the ever-changing market landscape. Our
            narrative is woven with tales of transformation, success, and a
            shared commitment to making a meaningful impact on the businesses we
            serve.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default HomeStory;
