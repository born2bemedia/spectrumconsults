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
              <Link href="tel:+442070434509">+442070434509</Link>
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
              <Link href="mailto:info@spectrumconsults.io">
                info@spectrumconsults.io
              </Link>
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
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.2670007719175!2d-0.09089912349586167!3d51.526662471817744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761d64c8d91b11%3A0x8fd10f948b8c6ef5!2s128%20City%20Rd%2C%20London%20EC1V%202NX%2C%20UK!5e0!3m2!1sen!2sua!4v1722269102410!5m2!1sen!2sua"
                  width="600"
                  height="250"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </motion.div>
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
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.3437224311087!2d-0.0841568234960013!3d51.525255171817456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761cb0066b63d9%3A0x821e1f04046884b6!2s62%20Great%20Eastern%20St%2C%20London%20EC2A%203QR%2C%20UK!5e0!3m2!1sen!2sua!4v1722268951602!5m2!1sen!2sua"
                  width="600"
                  height="250"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectAddress;
