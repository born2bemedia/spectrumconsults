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

const MarketingServices = () => {
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
              Marketing
              <br /> Consulting
            </motion.h2>
            <div>
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                Elevate your brand and connect with your audience through our
                dynamic marketing consulting services. Whether you want to
                enhance your digital presence, create compelling content, or
                drive targeted campaigns, our tailored solutions deliver
                measurable results and propel your brand forward.
              </motion.p>
              <div className="buttons-wrap">
                <Link href="/marketing-consulting" className="white-button">
                  Define your brand
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
              Brand Strategy <br />
              Development
            </h3>
            <p>
              Craft a powerful brand identity that resonates with your target
              audience. We help you define your brand's mission, vision, and
              values, creating a cohesive strategy differentiating you in the
              marketplace.
            </p>
          </div>
          <div>
            <span className="number">2</span>
            <h3>
              Digital Marketing <br />
              Strategy
            </h3>
            <p>
              Maximise your online impact with a comprehensive digital marketing
              strategy. We provide insights and tactics across SEO, SEM, social
              media, and email marketing to boost your online presence and
              engagement.
            </p>
          </div>
          <div>
            <span className="number">3</span>
            <h3>
              Content <br />
              Marketing
            </h3>
            <p>
              Engage your audience with compelling, high-quality content. Our
              content marketing services include content creation, strategy
              development, and distribution to ensure your message reaches and
              resonates with your target audience.
            </p>
          </div>
          <div>
            <span className="number">4</span>
            <h3>
              Social Media <br />
              Management
            </h3>
            <p>
              Build a solid social media presence that drives engagement and
              growth. We manage your social media channels, creating and
              executing campaigns that connect with your audience and enhance
              your brand's visibility.
            </p>
          </div>
          <div>
            <span className="number">5</span>
            <h3>
              SEO & <br />
              SEM
            </h3>
            <p>
              Improve your website's visibility and attract more traffic through
              expert SEO and SEM strategies. We optimise your website and manage
              paid search campaigns to ensure you rank higher and reach the
              right audience.
            </p>
          </div>
          <div>
            <span className="number">6</span>
            <h3>
              Email <br />
              Marketing
            </h3>
            <p>
              Develop and execute effective email marketing campaigns that
              convert. From crafting compelling newsletters to automated email
              sequences, we ensure your email marketing efforts drive results.
            </p>
          </div>
          <div>
            <span className="number">7</span>
            <h3>
              Market Research <br />& Analysis
            </h3>
            <p>
              Understand your market and stay ahead of the competition with
              in-depth market research. We provide actionable insights into
              market trends, customer behaviour, and competitive landscape to
              inform your marketing strategies.
            </p>
          </div>
          <div>
            <span className="number">8</span>
            <h3>
              Campaign <br />
              Management
            </h3>
            <p>
              Plan and execute targeted marketing campaigns that deliver
              results. Our campaign management services cover everything from
              strategy development to execution and analysis, ensuring your
              campaigns achieve their objectives.
            </p>
          </div>
          <div>
            <span className="number">9</span>
            <h3>
              Influencer <br />
              Marketing
            </h3>
            <p>
              Leverage the power of influencers to amplify your brand's reach.
              We connect you with the right influencers and manage partnerships
              to create authentic and impactful marketing campaigns.
            </p>
          </div>
          <div>
            <span className="number">10</span>
            <h3>
              Public <br />
              Relations
            </h3>
            <p>
              Build and maintain a positive public image with our strategic
              public relations services. We help you craft press releases,
              manage media relations, and handle crisis communication to keep
              your brand in a favourable light.
            </p>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default MarketingServices;
