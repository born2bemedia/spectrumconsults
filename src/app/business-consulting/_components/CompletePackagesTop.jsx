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
            Business Consulting <br />
            Complete Packages
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Unlock your business's full potential with our comprehensive
            business consulting packages. Each package is crafted to build upon
            the previous, providing a robust foundation and advanced growth
            strategies. With services ranging from market analysis and risk
            management to change management and innovation strategies, we equip
            your business with the tools needed to thrive in a competitive
            market. Choose the package that aligns with your business goals, and
            let us guide you to success.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default CompletePackagesTop;
