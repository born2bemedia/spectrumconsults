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
          <div>
            <span className="number">5</span>
            <h3>Business Process Reengineering</h3>
            <p>
              Transform your business processes to achieve significant
              performance improvements. We help you redesign workflows,
              eliminate inefficiencies, and leverage technology to drive growth.
            </p>
          </div>
          <div>
            <span className="number">6</span>
            <h3>
              Change <br />
              Management
            </h3>
            <p>
              Our change management services help you navigate organisational
              changes smoothly and effectively. They also ensure your team is
              aligned and engaged.
            </p>
          </div>
          <div>
            <span className="number">7</span>
            <h3>
              Performance <br />
              Management
            </h3>
            <p>
              Enhance your team's performance with our comprehensive management
              solutions. We provide tools and strategies to set goals, measure
              progress, and improve productivity.
            </p>
          </div>
          <div>
            <span className="number">8</span>
            <h3>
              Risk <br />
              Management
            </h3>
            <p>
              Identify, assess, and mitigate risks to protect your business. Our
              risk management services help you develop robust strategies to
              manage potential threats and ensure business continuity.
            </p>
          </div>
          <div>
            <span className="number">9</span>
            <h3>
              Leadership <br />
              Development
            </h3>
            <p>
              Cultivate strong leaders within your organisation. We offer
              customised leadership development programs that equip your team
              with the skills and confidence to lead effectively.
            </p>
          </div>
          <div>
            <span className="number">10</span>
            <h3>
              Innovation & <br />
              Growth Strategy
            </h3>
            <p>
              Foster a culture of innovation and drive sustainable growth. Our
              experts work with you to identify new opportunities, create
              innovative solutions, and implement growth strategies that keep
              you ahead of the competition.
            </p>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default BusinessServices;
