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
              <span>Transform</span> Your <br />
              Business with Expert <br />
              Guidance
            </motion.h1>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              At Spectrum Consults, we specialise in empowering businesses to
              achieve their highest potential. Our bespoke business consulting
              solutions are designed to address your unique challenges and drive
              success. From strategic planning and operational improvement to
              financial optimization and leadership development, our experts
              provide personalised guidance and innovative strategies to ensure
              your business thrives in today’s competitive landscape. Let us
              help you turn your vision into reality and set your business on
              the path to sustained growth and success.
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
              src={"/images/consulting/businessHero.webp"}
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
