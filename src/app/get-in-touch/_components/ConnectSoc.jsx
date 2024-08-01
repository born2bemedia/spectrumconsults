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
            <Link
              href="https://www.facebook.com/spectrumconsults.io"
              target="_blank"
            >
              <img src="/images/facebook.svg" alt="facebook" />
            </Link>
            <Link
              href="https://www.instagram.com/spectrumconsults.io"
              target="_blank"
            >
              <img src="/images/instagram.svg" alt="instagram" />
            </Link>
            <Link href="https://x.com/spectrumcons" target="_blank">
              <img src="/images/x.svg" alt="x" />
            </Link>
          </motion.div>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            We're excited to connect with you and discuss how 
            Spectrum Consults can help you achieve your 
            business goals. Reach out through any of the 
            channels above, and let's start a conversation.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default ConnectSoc;
