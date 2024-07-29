"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";

const ConnectSoc = () => {
  return (
    <section className="connect-soc">
      <div className="_container">
        <div className="connect-soc__body">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Follow Us on <br />
            Social Media
          </motion.h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="soc"
          >
            <Link href="#">
              <img src="/images/facebook.svg" />
            </Link>
            <Link href="#">
              <img src="/images/instagram.svg" />
            </Link>
            <Link href="#">
              <img src="/images/x.svg" />
            </Link>
            <Link href="#">
              <img src="/images/youtube.svg" />
            </Link>
            <Link href="#">
              <img src="/images/tiktok.svg" />
            </Link>
          </motion.div>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            We're excited to connect with you and discuss how <br />
            Spectrum Consults can help you achieve your <br />
            business goals. Reach out through any of the <br />
            channels above, and let's start a conversation.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default ConnectSoc;
