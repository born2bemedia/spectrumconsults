"use client";
import Image from "next/image";
import React, { useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import ButtonArrow from "@/icons/ButtonArrow";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ItServices = () => {
  const sliderRef = useRef(null);
  const SliderSettings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handlePrevClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNextClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <section className="services-wrap">
      <div className="_container">
        <div className="services-wrap__body">
          <span className="section-title">Discover Our Services</span>
          <div className="service-info">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              IT
              <br /> Consulting
            </motion.h2>
            <div>
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                Empower your success with cutting-edge IT solutions tailored for
                freelancers, entrepreneurs, and personal brands. From seamless
                digital infrastructure to secure and efficient tech setups, we
                provide the essential tools and support you need to thrive in
                the digital world.
              </motion.p>
              <div className="buttons-wrap">
                <Link href="/it-consulting" className="white-button">
                  Optimise your tech now
                </Link>
                <div className="arrows">
                  <img
                    src="/images/home/arrowPrev.svg"
                    alt="Previous"
                    onClick={handlePrevClick}
                  />
                  <img
                    src="/images/home/arrowNext.svg"
                    alt="Next"
                    onClick={handleNextClick}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="service-slider-wrap">
        <Slider ref={sliderRef} {...SliderSettings} className="service-slider">
          <div>
            <span className="number">1</span>
            <h3>
              Website <br />
              Development
            </h3>
            <p>
              Establish a strong online presence with a custom-built website
              tailored to your needs. We create sleek, responsive,
              high-performing sites that showcase your work and attract your
              audience.
            </p>
          </div>
          <div>
            <span className="number">2</span>
            <h3>
              Landing Page <br />
              Development
            </h3>
            <p>
              Maximize conversions with a high-impact landing page. We design
              and optimize pages that capture attention, drive engagement, and
              turn visitors into clients.
            </p>
          </div>
          <div>
            <span className="number">3</span>
            <h3>
              E-commerce <br />
              Setup
            </h3>
            <p>
              Launch and manage your online store easily. We provide seamless
              e-commerce solutions that integrate secure payments, intuitive
              navigation, and a user-friendly shopping experience.
            </p>
          </div>
          <div>
            <span className="number">4</span>
            <h3>
              Domain & Hosting <br />
              Setup
            </h3>
            <p>
              Secure your digital identity with the right domain and hosting. We
              help you choose, register, and set up reliable hosting for a
              smooth, uninterrupted online experience.
            </p>
          </div>
          <div>
            <span className="number">5</span>
            <h3>
              Cloud Storage & <br />
              Collaboration
            </h3>
            <p>
              Keep your work safe and accessible from anywhere. We set up cloud
              storage solutions that streamline file sharing, backup, and team
              collaboration.
            </p>
          </div>
          <div>
            <span className="number">6</span>
            <h3>
              Business Email <br />
              Setup
            </h3>
            <p>
              Elevate your professionalism with a custom business email. We
              configure and integrate domain-based email solutions for secure
              and seamless communication.
            </p>
          </div>
          <div>
            <span className="number">7</span>
            <h3>
              Cybersecurity <br />
              Consultation
            </h3>
            <p>
              Protect your data and online presence from threats. Our
              cybersecurity solutions help you secure accounts, set up
              two-factor authentication, and implement best security practices.
            </p>
          </div>
          <div>
            <span className="number">8</span>
            <h3>
              Remote <br />
              IT Support
            </h3>
            <p>
              Get expert tech assistance whenever you need it. We provide
              on-demand troubleshooting, software setup, and performance
              optimization to keep your systems running smoothly.
            </p>
          </div>
          <div>
            <span className="number">9</span>
            <h3>
              Workstation & Home <br />
              Office Setup
            </h3>
            <p>
              Optimize your workspace for peak productivity. We help configure
              hardware, network settings, and software to create an efficient
              and comfortable work environment.
            </p>
          </div>
          <div>
            <span className="number">10</span>
            <h3>
              Backup & <br />
              Data Recovery
            </h3>
            <p>
              Safeguard your files and easily recover lost data. We set up
              automated backup solutions and provide data recovery support to
              ensure you never lose essential information.
            </p>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default ItServices;
