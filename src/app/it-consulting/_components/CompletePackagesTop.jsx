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
            IT Consulting <br />
            Complete Packages
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Empower your digital journey with Spectrum Consults’ all-inclusive
            IT consulting packages. Our packages offer a step-by-step
            enhancement of your technology capabilities, from establishing a
            robust online presence to ensuring your digital assets are secure
            and optimized for performance. Whether you’re just starting or
            looking to scale your tech infrastructure, our packages provide the
            perfect blend of services to keep you connected, secure, and
            efficient. Choose the package that best fits your IT needs and
            experience seamless digital growth. 
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default CompletePackagesTop;
