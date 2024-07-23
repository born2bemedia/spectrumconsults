"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";

const CompletePackagesTop = () => {
  return (
    <section className="complete-packages-top">
      <div className="_container">
        <div className="complete-packages-top__body">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Marketing Consulting <br />
            Complete Packages
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Transform your marketing efforts with Spectrum Consults'
            comprehensive consulting packages. Our packages are designed to
            offer a step-by-step enhancement of your marketing capabilities,
            starting with foundational brand strategies and advancing to
            full-scale market research and public relations. Whether you're
            looking to boost your online presence, engage your audience through
            compelling content, or leverage influencer partnerships, our
            packages provide the perfect blend of services to propel your brand
            forward. Select the package that best fits your marketing objectives
            and watch your brand soar.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default CompletePackagesTop;
