"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";

const PriceList = () => {
  return (
    <section className="download-pricelist">
      <div className="_container">
        <div className="download-pricelist__body">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Download <br />
            Our Complete <br />
            Price List
          </motion.h2>
          <div>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Interested in understanding our service offerings in detail?
              Download our complete price list to explore the range of
              consulting solutions we provide. Whether you need business
              consulting or marketing consulting services, our transparent
              pricing will help you make informed decisions. Simply click the
              link below to get started.
            </motion.p>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="button-wrap"
            >
              <Link href="#" className="white-button">Download price list</Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceList;
