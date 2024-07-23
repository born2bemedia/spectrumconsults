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

const BusinessServices = () => {
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
              Business
              <br /> Consulting
            </motion.h2>
            <div>
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                Unleash your business's true potential with our premier
                consulting services. Whether aiming to refine your operations,
                elevate your strategic vision, or drive profitability to new
                heights, our customised solutions suit your specific goals and
                aspirations.
              </motion.p>
              <div className="buttons-wrap">
                <Link href="/business-consulting" className="white-button">
                  Improve operations now
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
              Strategic <br />
              Planning
            </h3>
            <p>
              Develop a clear, actionable roadmap to achieve your business
              goals. Our strategic planning services help you define your
              vision, set realistic targets, and outline the steps needed to
              reach them.
            </p>
          </div>
          <div>
            <span className="number">2</span>
            <h3>
              Operational <br />
              Improvement
            </h3>
            <p>
              Optimise your business processes for maximum efficiency and
              effectiveness. We identify bottlenecks, streamline workflows, and
              implement best practices to enhance your operations.
            </p>
          </div>
          <div>
            <span className="number">3</span>
            <h3>
              Financial <br />
              Consulting
            </h3>
            <p>
              Strengthen your financial health with our expert advice. From
              budgeting and forecasting to financial analysis and risk
              management, we provide the insights you need to make informed
              decisions.
            </p>
          </div>
          <div>
            <span className="number">4</span>
            <h3>
              Market <br />
              Analysis
            </h3>
            <p>
              Gain a competitive edge with in-depth market research and
              analysis. We help you understand market trends, identify
              opportunities, and develop strategies to capture new markets.
            </p>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default BusinessServices;
