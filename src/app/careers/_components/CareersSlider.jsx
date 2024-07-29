"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import ButtonArrow from "@/icons/ButtonArrow";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import JobButton from "@/components/JobButton";

const CareersSlider = () => {
  const sliderRef1 = useRef(null);
  const sliderRef2 = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const SliderSettings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
  };

  const handlePrevClick = () => {
    if (sliderRef1.current) {
      sliderRef1.current.slickPrev();
    }
  };

  const handleNextClick = () => {
    if (sliderRef1.current) {
      sliderRef1.current.slickNext();
    }
  };

  return (
    <section className="careers-wrap">
      <div className="_container">
        <div className="careers-wrap__body">
          <span className="section-title">Job Offers</span>
          <div className="careers-info">
            <div className="buttons-wrap">
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
          <div className="careers-slider-wrap">
            <Slider
              {...SliderSettings}
              ref={sliderRef1}
              className="careers-slider"
            >
              <div className="slide1">
                <h2>Marketing Specialist</h2>

                <div className="job-info">
                  <div>
                    <span className="circle"></span>
                    <h3>Responsibilities:</h3>
                    <ul>
                      <li>
                        Develop and implement marketing strategies to promote
                        Spectrum Consults' services.
                      </li>
                      <li>
                        Manage and optimise digital marketing campaigns across
                        various channels, including social media, email, and
                        search engines.
                      </li>
                      <li>
                        Conduct market research to identify trends and
                        opportunities for growth.
                      </li>
                      <li>
                        Create engaging content for marketing materials,
                        websites, and social media platforms.
                      </li>
                      <li>
                        Analyse campaign performance and generate reports to
                        measure effectiveness and ROI.
                      </li>
                      <li>
                        Collaborate with the sales team to align marketing
                        efforts with business objectives.
                      </li>
                      <li>
                        Coordinate and execute marketing events, webinars, and
                        trade shows.
                      </li>
                      <li>
                        Maintain and update the company's CRM system with
                        marketing data.
                      </li>
                    </ul>
                  </div>
                  <div>
                    <span className="circle"></span>
                    <h3>Requirements:</h3>
                    <ul>
                      <li>
                        Bachelor's degree in Marketing, Business, or a related
                        field.
                      </li>
                      <li>
                        Proven experience in marketing, preferably within the
                        consulting industry.
                      </li>
                      <li>
                        Strong understanding of digital marketing tools and
                        platforms.
                      </li>
                      <li>
                        Excellent written and verbal communication skills.
                      </li>
                      <li>
                        Ability to analyse data and draw actionable insights.
                      </li>
                      <li>
                        Proficiency in marketing software and tools such as
                        Google Analytics, HubSpot, and social media platforms.
                      </li>
                      <li>Creative thinking and problem-solving skills.</li>
                      <li>
                        Ability to work independently and as part of a team.
                      </li>
                    </ul>
                  </div>
                </div>

                <JobButton jobName={"Marketing Specialist"} />
              </div>
              <div className="slide2">
                <h2>Business Analyst</h2>

                <div className="job-info">
                  <div>
                    <span className="circle"></span>
                    <h3>Responsibilities:</h3>
                    <ul>
                      <li>
                        Conduct detailed business analysis to understand client
                        needs and identify opportunities for improvement.
                      </li>
                      <li>
                        Gather and document business requirements and translate
                        them into technical specifications.
                      </li>
                      <li>
                        Analyse and interpret complex data to provide actionable
                        insights and recommendations.
                      </li>
                      <li>
                        Develop and maintain project plans, ensuring timely
                        delivery of business analysis activities.
                      </li>
                      <li>
                        Collaborate with stakeholders to ensure alignment of
                        project goals and deliverables.
                      </li>
                      <li>
                        Facilitate workshops and meetings to elicit requirements
                        and validate solutions.
                      </li>
                      <li>
                        Prepare comprehensive reports and presentations to
                        communicate findings and recommendations.
                      </li>
                      <li>
                        Support the implementation of business solutions and
                        monitor their performance.
                      </li>
                    </ul>
                  </div>
                  <div>
                    <span className="circle"></span>
                    <h3>Requirements:</h3>
                    <ul>
                      <li>
                        Bachelor's degree in Business Administration, Economics,
                        or a related field.
                      </li>
                      <li>
                        Minimum of 3 years of experience in business analysis or
                        a similar role.
                      </li>
                      <li>Strong analytical and problem-solving skills.</li>
                      <li>
                        Proficiency in data analysis tools such as Excel, SQL,
                        and business intelligence software.
                      </li>
                      <li>Excellent communication and presentation skills.</li>
                      <li>
                        Ability to manage multiple projects and meet deadlines.
                      </li>
                      <li>
                        Experience with project management methodologies and
                        tools.
                      </li>
                      <li>
                        Strong attention to detail and organisational skills.
                      </li>
                    </ul>
                  </div>
                </div>

                <JobButton jobName={"Business Analyst"} />
              </div>

              <div className="slide3">
                <h2>IT Project Manager</h2>

                <div className="job-info">
                  <div>
                    <span className="circle"></span>
                    <h3>Responsibilities:</h3>
                    <ul>
                      <li>
                        Lead and manage IT projects from initiation to
                        completion, ensuring projects are delivered on time,
                        within scope, and budget.
                      </li>
                      <li>
                        Develop detailed project plans, including timelines,
                        milestones, and resource allocation.
                      </li>
                      <li>
                        Coordinate internal resources and third parties/vendors
                        for the successful execution of projects.
                      </li>
                      <li>
                        Identify and manage project risks and issues and develop
                        mitigation strategies.
                      </li>
                      <li>
                        Communicate project status, progress, and challenges to
                        stakeholders regularly.
                      </li>
                      <li>
                        Ensure all project documentation is complete, accurate,
                        and up-to-date.
                      </li>
                      <li>
                        Foster a collaborative team environment and provide
                        leadership and direction to project teams.
                      </li>
                      <li>
                        Conduct post-project evaluations to identify areas for
                        improvement and share lessons learned.
                      </li>
                    </ul>
                  </div>
                  <div>
                    <span className="circle"></span>
                    <h3>Requirements:</h3>
                    <ul>
                      <li>
                        Bachelor's degree in Information Technology, Computer
                        Science, or a related field.
                      </li>
                      <li>
                        PMP or equivalent project management certification is
                        preferred.
                      </li>
                      <li>
                        Minimum of 5 years of experience in IT project
                        management.
                      </li>
                      <li>
                        Proven track record of successfully delivering IT
                        projects.
                      </li>
                      <li>
                        Strong knowledge of project management methodologies,
                        including Agile and Scrum.
                      </li>
                      <li>
                        Excellent leadership, communication, and interpersonal
                        skills.
                      </li>
                      <li>
                        Ability to manage multiple projects simultaneously and
                        prioritise tasks effectively.
                      </li>
                      <li>
                        Proficiency in project management software such as MS
                        Project, JIRA, and Trello.
                      </li>
                    </ul>
                  </div>
                </div>

                <JobButton jobName={"IT Project Manager"} />
              </div>
              <div className="slide4">
                <h2>Human Resources Manager</h2>

                <div className="job-info">
                  <div>
                    <span className="circle"></span>
                    <h3>Responsibilities:</h3>
                    <ul>
                      <li>
                        Oversee the recruitment and selection process, including
                        job postings, candidate screening, interviews, and
                        onboarding.
                      </li>
                      <li>
                        Develop and implement HR policies and procedures to
                        ensure compliance with labour laws and company
                        standards.
                      </li>
                      <li>
                        Manage employee relations, including conflict
                        resolution, performance management, and disciplinary
                        actions.
                      </li>
                      <li>
                        Coordinate training and development programs to enhance
                        employee skills and career growth.
                      </li>
                      <li>
                        Administer compensation and benefits programs, including
                        payroll processing and benefits enrollment.
                      </li>
                      <li>
                        Maintain accurate and up-to-date employee records and HR
                        documentation.
                      </li>
                      <li>
                        Provide guidance and support to managers and employees
                        on HR-related matters.
                      </li>
                      <li>
                        Conduct regular HR audits and prepare reports for senior
                        management.
                      </li>
                    </ul>
                  </div>
                  <div>
                    <span className="circle"></span>
                    <h3>Requirements:</h3>
                    <ul>
                      <li>
                        Bachelor's degree in Human Resources, Business
                        Administration, or a related field.
                      </li>
                      <li>
                        Minimum of 5 years of experience in human resources
                        management.
                      </li>
                      <li>
                        Strong knowledge of HR best practices and labour laws.
                      </li>
                      <li>Excellent interpersonal and communication skills.</li>
                      <li>
                        Ability to handle sensitive and confidential information
                        with discretion.
                      </li>
                      <li>
                        Proficiency in HR software and systems, such as HRIS and
                        applicant tracking systems.
                      </li>
                      <li>Strong organisational and problem-solving skills.</li>
                      <li>
                        Experience in developing and implementing HR policies
                        and programs.
                      </li>
                    </ul>
                  </div>
                </div>

                <JobButton jobName={"Human Resources Manager"} />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersSlider;
