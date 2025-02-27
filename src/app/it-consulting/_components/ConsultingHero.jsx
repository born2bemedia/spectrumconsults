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
              <span>Optimize</span> Your Digital <br />
              Workflow with <br />
              Expert IT Solutions
            </motion.h1>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              At Spectrum Consults, we equip freelancers, entrepreneurs, and
              personal brands with the right technology to enhance productivity,
              security, and efficiency. Whether you need a professional website,
              secure data protection, or seamless IT support, our tailored
              solutions ensure you stay ahead in the digital world.
              <br />
              <br />
              From website development to cybersecurity and remote IT
              assistance, our experts provide practical, reliable, and
              cost-effective IT solutions to optimize your workflow. Let us
              handle the tech so you can focus on growing your business.
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
              src={"/images/consulting/itHero.png"}
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
