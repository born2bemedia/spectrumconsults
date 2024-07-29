"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import ButtonArrow from "@/icons/ButtonArrow";

const HomeHero = () => {
  return (
    <section className="home-hero">
      <div className="_container">
        <div className="home-hero__body">
          <div className="col-01">
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Start <span>journey</span>
              <br /> toward success with
              <br /> Spectrum Consults
            </motion.h1>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Enrol now and see how we can
              <br /> transform your future.
            </motion.h2>
            <motion.div
              className="button-wrap"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <Link href="/get-in-touch" className="main-button">
                <span>Book a free consultation</span>
                <ButtonArrow />
              </Link>
            </motion.div>
          </div>

          <div
            className="col-02"
          >
            <Image
              src={"/images/home/homeHero.svg"}
              width={540}
              height={380}
              sizes="(max-width: 768px) 100%, 540px"
              alt="homeHero"
              loading="lazy"
            />
            <Image
              src={"/images/home/homeHeroPhoto.png"}
              width={273}
              height={380}
              alt="homeHero2"
              loading="lazy"
              className="home-photo"
              sizes="(max-width: 768px) 180px, 273px"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
