"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import ConnectForm from "./ConnectForm";

export const HomeConnect = () => {
  return (
    <section className="connect">
      <div className="_container">
        <div className="connect__top">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Connect with <br />
            Spectrum Consults
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Embark on your path to success with our expert guidance! Share the
            vision of your project or business needs with us. Fill out the form
            below with your details, and one of our expert consultants will
            reach out to you promptly to discuss how we can help you achieve
            your goals.
          </motion.p>
        </div>
        <div className="connect__bottom">
          <motion.div
            className="col-01"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <ConnectForm />
          </motion.div>
          <motion.div
            className="col-02"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <img src="/images/home/connect.webp" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
