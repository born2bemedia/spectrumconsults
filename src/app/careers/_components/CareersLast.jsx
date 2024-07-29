"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import ButtonArrow from "@/icons/ButtonArrow";

const CareersLast = () => {
  return (
    <section className="results-last">
      <div className="_container">
        <div className="results-last__body">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Ready to Achieve Your <span>Success Story</span>?
          </motion.h2>
          <motion.div
            className="button-wrap"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Link href="/get-in-touch" className="main-button">
              <span>Start your journey with Spectrum Consults</span>
              <ButtonArrow />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CareersLast;
