"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import ConnectForm from "./ConnectForm";

export const ConnectBlock = ({ title, subtitle }) => {
  return (
    <section className="connect">
      <div className="_container">
        <div className="connect__top">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            dangerouslySetInnerHTML={{ __html: title }}
            
          />
          {subtitle && (
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              {subtitle}
            </motion.p>
          )}
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
            <Image width={540} height={790} src="/images/home/connect.webp" alt="connect" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
