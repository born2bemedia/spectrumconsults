"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import ButtonArrow from "@/icons/ButtonArrow";

const ConsultingHero = () => {
  return (
    <section className="consulting-hero">
      <div className="_container">
        <div className="consulting-hero__body">
          <div className="col-01">
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Ignite Your Brand <br />
              with Strategic <br />
              <span>Marketing Solutions</span>
            </motion.h1>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              At Spectrum Consults, we understand the power of effective
              marketing in driving business success. Our tailored marketing
              consulting services are crafted to elevate your brand and connect
              with your audience meaningfully. Whether you aim to enhance your
              digital presence, create compelling content, or execute targeted
              campaigns, our marketing experts offer the insights and strategies
              you need to stand out in a crowded marketplace. Let us partner
              with you to amplify your brand's impact and achieve measurable
              results that propel your business forward.
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
              src={"/images/consulting/marketingHero.webp"}
              width={540}
              height={380}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ConsultingHero;
