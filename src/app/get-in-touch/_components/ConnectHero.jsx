"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import ButtonArrow from "@/icons/ButtonArrow";

const ConnectHero = () => {
  return (
    <section className="connect-hero">
      <div className="_container">
        <div className="connect-hero__body">
          <div className="col-01">
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Connect with <br />
              Spectrum Consults
            </motion.h1>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              We value your interest in Spectrum Consults and are here to assist
              you. We're eager to hear from you if you have a question, need
              more information about our services, or want to discuss a
              potential collaboration. Use the contact form below to get in
              touch, or reach out to us directly through our contact details and
              social media channels.
            </motion.h2>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="col-02"
          >
            <Image
              src={"/images/connect/connectHero.webp"}
              width={540}
              height={380}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ConnectHero;
