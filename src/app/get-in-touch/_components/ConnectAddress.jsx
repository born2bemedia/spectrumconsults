"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";

const ConnectAddress = () => {
  return (
    <section className="connect-address">
      <div className="_container">
        <div className="connect-address__body">
          <div className="left">
            <div>
              <motion.span
                className="section-label"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                Call us
              </motion.span>
              <Link href="#">NUMBER</Link>
            </div>
            <div>
              <motion.span
                className="section-label"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                Email us
              </motion.span>
              <Link href="#">EMAIL</Link>
            </div>
          </div>
          <div className="right">
            <div>
              <motion.span
                className="section-label"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                Registered address
              </motion.span>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="map"
              ></motion.div>
            </div>
            <div>
              <motion.span
                className="section-label"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                Office address
              </motion.span>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="map"
              ></motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectAddress;
