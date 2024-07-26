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

const ResultsSlider = () => {
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
    if (sliderRef1.current && sliderRef2.current) {
      sliderRef1.current.slickPrev();
      sliderRef2.current.slickPrev();
    }
  };

  const handleNextClick = () => {
    if (sliderRef1.current && sliderRef2.current) {
      sliderRef1.current.slickNext();
      sliderRef2.current.slickNext();
    }
  };

  const syncSliders = (index) => {
    if (sliderRef1.current && sliderRef2.current) {
      sliderRef1.current.slickGoTo(index);
      sliderRef2.current.slickGoTo(index);
    }
  };

  return (
    <section className="results-wrap">
      <div className="_container">
        <div className="results-wrap__body">
          <span className="section-title">Case Study</span>
          <div className="results-info">
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
            <Slider
              {...SliderSettings}
              ref={sliderRef1}
              beforeChange={(oldIndex, newIndex) => syncSliders(newIndex)}
            >
              <div>
                <h2>Strategic Growth for a Tech Startup</h2>
              </div>
              <div>
                <h2>Operational Excellence for a Boutique Retailer</h2>
              </div>
              <div>
                <h2>Financial Health for a Freelance Designer</h2>
              </div>
              <div>
                <h2>Market Penetration for an Independent Author</h2>
              </div>
              <div>
                <h2>Business Process Reengineering for a Personal Coach</h2>
              </div>
              <div>
                <h2>Brand Development for a Fitness Influencer</h2>
              </div>
              <div>
                <h2>Digital Marketing for a Lifestyle Blogger</h2>
              </div>
              <div>
                <h2>Content Marketing for a Travel Photographer</h2>
              </div>
              <div>
                <h2>Social Media Management for an Artisan Baker</h2>
              </div>
              <div>
                <h2>Public Relations for a Fashion Designer</h2>
              </div>
            </Slider>
          </div>
          <div className="results-slider-wrap">
            <Slider
              {...SliderSettings}
              ref={sliderRef2}
              beforeChange={(oldIndex, newIndex) => syncSliders(newIndex)}
              className="results-slider"
            >
              <div className="slide1">
                <h3>
                  <span className="number">1</span>
                  <span>Client: Jane Doe, Tech Entrepreneur</span>
                </h3>
                <div>
                  <h4>Challenge:</h4>
                  <p>
                    Jane struggled with setting a clear strategic direction for
                    her tech startup. Despite having a promising product, she
                    faced difficulties in market positioning, which led to
                    inconsistent growth and market confusion. Additionally, her
                    team lacked a cohesive vision and strategic alignment.
                  </p>
                  <h4>Solution:</h4>
                  <p>
                    Spectrum Consults initiated a comprehensive strategic
                    planning process. We began with an in-depth analysis of the
                    current market landscape, competitive positioning, and
                    internal capabilities. This included workshops with key
                    stakeholders to gather insights and align on the company's
                    vision. We then developed a detailed strategic plan that
                    included:
                  </p>
                  <ul>
                    <li>
                      Vision and Mission Articulation: Clearly defining the
                      company's long-term vision and mission to guide
                      decision-making.
                    </li>
                    <li>
                      Goal Setting: Establishing short-term and long-term goals
                      that were realistic yet ambitious.
                    </li>
                    <li>
                      Market Positioning: Crafting a unique value proposition to
                      differentiate the product in the competitive tech market.
                    </li>
                    <li>
                      Roadmap Development: Creating a detailed roadmap with
                      specific milestones and timelines to track progress.
                    </li>
                  </ul>
                  <h4>Results:</h4>
                  <ul>
                    <li>
                      Clarity in Vision: Established a clear strategic direction
                      that unified the team and provided a focused path forward.
                    </li>
                    <li>
                      Growth Metrics: Achieved a 40% increase in market share
                      within 12 months through effective market positioning and
                      targeted marketing campaigns.
                    </li>
                    <li>
                      Operational Efficiency: Improved internal processes and
                      communication, leading to a 20% reduction in operational
                      costs.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="slide2">
                <h3>
                  <span className="number">2</span>
                  <span>Client: John Smith, Retail Entrepreneur</span>
                </h3>
                <div>
                  <h4>Challenge:</h4>
                  <p>
                    John's boutique retail business faced significant
                    operational challenges. Inefficient processes and high
                    overhead costs were cutting profits, and inventory
                    management was chaotic, leading to stockouts and overstock
                    situations. Customer satisfaction was declining due to
                    inconsistent service quality.
                  </p>
                  <h4>Solution:</h4>
                  <p>
                    We conducted a comprehensive operational audit to identify
                    inefficiencies and areas for improvement. Our approach
                    included:
                  </p>
                  <ul>
                    <li>
                      Process Mapping: Detailed mapping of all business
                      processes to identify bottlenecks and redundancies.
                    </li>
                    <li>
                      Best Practices Implementation: Introducing industry best
                      practices for inventory management, customer service, and
                      employee training.
                    </li>
                    <li>
                      Technology Integration: Implementing an inventory
                      management system to streamline stock control and reduce
                      human error.
                    </li>
                    <li>
                      Employee Training: Conducting training sessions to enhance
                      employee skills and ensure adherence to new processes.
                    </li>
                  </ul>
                  <h4>Results:</h4>
                  <ul>
                    <li>
                      Operational Improvement: Streamlined processes, reducing
                      operational costs by 25%.
                    </li>
                    <li>
                      Inventory Management: Implemented an efficient inventory
                      management system, decreasing stockouts by 30% and
                      reducing overstock by 20%.
                    </li>
                    <li>
                      Customer Satisfaction: Improved customer satisfaction
                      scores by 15% due to more consistent service quality and
                      better product availability.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="slide3">
                <h3>
                  <span className="number">3</span>
                  <span>Client: Lisa White, Freelance Graphic Designer</span>
                </h3>
                <div>
                  <h4>Challenge:</h4>
                  <p>
                    Lisa's freelance graphic design business was thriving
                    creatively, but she struggled with financial management.
                    Irregular income, lack of budgeting, and poor financial
                    planning led to cash flow issues and economic stress.
                  </p>
                  <h4>Solution:</h4>
                  <p>
                    We provided a comprehensive financial consulting service
                    tailored to freelancers. Our approach included:
                  </p>
                  <ul>
                    <li>
                      Financial Assessment: Conducting a thorough assessment of
                      Lisa's current financial situation, including income
                      sources, expenses, and financial habits.
                    </li>
                    <li>
                      Budgeting: Developing a detailed budget that accounted for
                      variable income and prioritized essential expenses.
                    </li>
                    <li>
                      Forecasting: Creating financial forecasts to anticipate
                      future income and expenses, helping Lisa plan for lean
                      periods.
                    </li>
                    <li>
                      Savings Strategy: Implementing a savings strategy to build
                      a financial cushion and reduce stress.
                    </li>
                    <li>
                      Invoicing System: Setting up an efficient invoicing system
                      to ensure timely payments and better cash flow management.
                    </li>
                  </ul>
                  <h4>Results:</h4>
                  <ul>
                    <li>
                      Budget Management: Developed a robust budgeting system
                      that improved cash flow management and reduced financial
                      stress.
                    </li>
                    <li>
                      Financial Stability: Achieved a 50% increase in savings
                      within six months, providing a financial safety net.
                    </li>
                    <li>
                      Revenue Growth: Boosted revenue by 30% through better
                      financial planning and targeted efforts to attract
                      higher-paying clients.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="slide4">
                <h3>
                  <span className="number">4</span>
                  <span>Client: Tom Green, Independent Author</span>
                </h3>
                <div>
                  <h4>Challenge:</h4>
                  <p>
                    Tom's self-published books had a loyal following, but he
                    struggled to penetrate new markets and significantly
                    increase sales. Despite having quality content, his
                    marketing efforts lacked direction and impact.
                  </p>
                  <h4>Solution:</h4>
                  <p>
                    Spectrum Consults conducted extensive market research to
                    identify potential new markets and develop a targeted market
                    penetration strategy. Our approach included:
                  </p>
                  <ul>
                    <li>
                      Market Analysis: Analyzing current market trends, reader
                      demographics, and competitive landscape to identify
                      untapped opportunities.
                    </li>
                    <li>
                      Targeted Marketing Campaigns: Designing and executing
                      marketing campaigns tailored to specific demographics and
                      regions.
                    </li>
                    <li>
                      Partnership Development: Establishing partnerships with
                      bookstores, online platforms, and influencers to broaden
                      reach.
                    </li>
                    <li>
                      Brand Positioning: Refining Tom's brand messaging to
                      resonate with new audiences while maintaining loyalty
                      among existing readers.
                    </li>
                    <li>
                      Digital Marketing: Enhancing digital marketing efforts,
                      including social media promotions, email marketing, and
                      content marketing.
                    </li>
                  </ul>
                  <h4>Results:</h4>
                  <ul>
                    <li>
                      Market Expansion: Successfully entered three new markets
                      within a year, significantly expanding Tom's reader base.
                    </li>
                    <li>
                      Sales Growth: Increased book sales by 60% in new markets
                      through effective marketing campaigns and partnerships.
                    </li>
                    <li>
                      Brand Recognition: Enhanced brand recognition and
                      credibility, leading to increased opportunities for
                      speaking engagements and collaborations.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="slide5">
                <h3>
                  <span className="number">5</span>
                  <span>Client: Sarah Brown, Personal Development Coach</span>
                </h3>
                <div>
                  <h4>Challenge:</h4>
                  <p>
                    Sarah's coaching business was growing, but inefficiencies in
                    business processes were limiting her ability to scale.
                    Administrative tasks were consuming valuable time, and
                    client management became increasingly complex.
                  </p>
                  <h4>Solution:</h4>
                  <p>
                    We worked with Sarah to redesign her business processes and
                    leverage technology for growth. Our approach included:
                  </p>
                  <ul>
                    <li>
                      Process Analysis: Conducting a thorough analysis of
                      existing workflows to identify bottlenecks and
                      inefficiencies.
                    </li>
                    <li>
                      Workflow Redesign: Redesigning workflows to eliminate
                      unnecessary steps and streamline operations.
                    </li>
                    <li>
                      Technology Integration: Implementing a customer
                      relationship management (CRM) system to automate client
                      management and administrative tasks.
                    </li>
                    <li>
                      Time Management: Introducing time management techniques
                      and tools to optimize Sarah's schedule and improve
                      productivity.
                    </li>
                    <li>
                      Scalability Planning: Developing a plan to scale the
                      business, including hiring additional coaches and
                      expanding service offerings.
                    </li>
                  </ul>
                  <h4>Results:</h4>
                  <ul>
                    <li>
                      Process Efficiency: Streamlined business processes,
                      reducing time spent on administrative tasks by 40%.
                    </li>
                    <li>
                      Client Management: Implemented a CRM system, improving
                      client management and retention by 25%.
                    </li>
                    <li>
                      Scalability: Enabled business scalability, resulting in a
                      50% increase in the client base and the ability to offer
                      new services.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="slide6">
                <h3>
                  <span className="number">6</span>
                  <span>Client: Emma Lee, Fitness Influencer</span>
                </h3>
                <div>
                  <h4>Challenge:</h4>
                  <p>
                    Emma had a growing following on social media but lacked a
                    cohesive brand identity. Her content was inconsistent, and
                    she struggled to differentiate herself in a crowded fitness
                    market.
                  </p>
                  <h4>Solution:</h4>
                  <p>
                    We developed a comprehensive brand strategy for Emma,
                    focusing on creating a robust and cohesive brand identity
                    and enhancing her online presence. Our approach included:
                  </p>
                  <ul>
                    <li>
                      Brand Audit: Conducting a thorough audit of Emma's current
                      brand and social media presence to identify strengths and
                      areas for improvement.
                    </li>
                    <li>
                      Brand Strategy Development: Defining Emma's mission,
                      vision, and values to create a unique and compelling brand
                      identity.
                    </li>
                    <li>
                      Content Strategy: Developing a content strategy aligned
                      with her brand and resonated with her target audience.
                    </li>
                    <li>
                      Visual Identity: Designing a consistent visual identity,
                      including logos, color schemes, and typography.
                    </li>
                    <li>
                      Engagement Tactics: Implementing engagement tactics to
                      increase interaction with followers and build a loyal
                      community.
                    </li>
                  </ul>
                  <h4>Results:</h4>
                  <ul>
                    <li>
                      Brand Identity: Established a robust and cohesive brand
                      identity that differentiated Emma from competitors.
                    </li>
                    <li>
                      Online Growth: Increased social media following by 70%
                      through consistent branding and targeted content.
                    </li>
                    <li>
                      Engagement: Enhanced audience engagement, resulting in
                      higher interaction rates and stronger community loyalty.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="slide7">
                <h3>
                  <span className="number">7</span>
                  <span>Client: David King, Lifestyle Blogger</span>
                </h3>
                <div>
                  <h4>Challenge:</h4>
                  <p>
                    David had a popular lifestyle blog but struggled to maximize
                    his online impact and monetize his content. Despite quality
                    content, his blog's traffic and engagement were stagnant.
                  </p>
                  <h4>Solution:</h4>
                  <p>
                    We created a comprehensive digital marketing strategy for
                    David, focusing on increasing traffic, engagement, and
                    revenue. Our approach included:
                  </p>
                  <ul>
                    <li>
                      SEO Optimization: Conducting an SEO audit and implementing
                      optimization techniques to improve search engine rankings.
                    </li>
                    <li>
                      Content Marketing: Developing a content marketing strategy
                      to create high-quality, engaging content that resonated
                      with his audience.
                    </li>
                    <li>
                      Social Media Marketing: Enhancing social media marketing
                      efforts to drive traffic to the blog and increase
                      engagement.
                    </li>
                    <li>
                      Email Marketing: Setting up email marketing campaigns to
                      nurture leads and drive conversions.
                    </li>
                    <li>
                      Monetization Strategy: Identifying and implementing
                      monetization opportunities, including affiliate marketing,
                      sponsored content, and product sales.
                    </li>
                  </ul>
                  <h4>Results:</h4>
                  <ul>
                    <li>
                      Traffic Increase: Boosted website traffic by 80% through
                      effective SEO and content marketing.
                    </li>
                    <li>
                      Monetization: Implemented monetization strategies,
                      increasing revenue by 50%.
                    </li>
                    <li>
                      Engagement: Improved engagement rates across all digital
                      channels, leading to a more active and loyal audience.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="slide8">
                <h3>
                  <span className="number">8</span>
                  <span>Client: Laura Wilson, Travel Photographer</span>
                </h3>
                <div>
                  <h4>Challenge:</h4>
                  <p>
                    Laura needed to enhance her online presence and attract more
                    clients through compelling content. Despite having stunning
                    photography, her online engagement and client acquisition
                    were low.
                  </p>
                  <h4>Solution:</h4>
                  <p>
                    We provided Laura with a comprehensive content marketing
                    service, focusing on creating and distributing high-quality
                    content. Our approach included:
                  </p>
                  <ul>
                    <li>
                      Content Strategy Development: Developing a content
                      strategy that highlighted Laura's unique style and
                      storytelling abilities.
                    </li>
                    <li>
                      Blog Development: Creating a blog to share travel stories,
                      tips, and behind-the-scenes insights, enhancing her online
                      presence.
                    </li>
                    <li>
                      Social Media Content: Crafting engaging social media
                      content to showcase her photography and connect with her
                      audience.
                    </li>
                    <li>
                      Email Campaigns: Implementing email marketing campaigns to
                      nurture leads and promote new projects.
                    </li>
                    <li>
                      SEO Optimization: Optimizing her website and content for
                      search engines to increase visibility and attract organic
                      traffic.
                    </li>
                  </ul>
                  <h4>Results:</h4>
                  <ul>
                    <li>
                      Content Reach: Increased content reach by 60% through
                      strategic distribution and SEO optimization.
                    </li>
                    <li>
                      Client Acquisition: Attracted 30% more clients through
                      engaging content and improved online visibility.
                    </li>
                    <li>
                      Brand Visibility: Enhanced brand visibility and
                      credibility, positioning Laura as a leading travel
                      photographer.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="slide9">
                <h3>
                  <span className="number">9</span>
                  <span>Client: Mike Brown, Artisan Baker</span>
                </h3>
                <div>
                  <h4>Challenge:</h4>
                  <p>
                    Mike's artisan bakery was well-loved locally but struggled
                    to build a strong social media presence to drive sales and
                    attract new customers.
                  </p>
                  <h4>Solution:</h4>
                  <p>
                    We managed Mike's social media channels, creating and
                    executing campaigns that connected with his audience and
                    promoted his bakery. Our approach included:
                  </p>
                  <ul>
                    <li>
                      Social Media Audit: Conducting a thorough audit of Mike's
                      current social media presence to identify strengths and
                      areas for improvement.
                    </li>
                    <li>
                      Content Calendar: Developing a content calendar to plan
                      and schedule posts consistently.
                    </li>
                    <li>
                      Engaging Content: Creating visually appealing and engaging
                      content that showcased Mike's products and the artisan
                      process.
                    </li>
                    <li>
                      Community Engagement: Implementing strategies to engage
                      with the local community and encourage user-generated
                      content.
                    </li>
                    <li>
                      Promotional Campaigns: Running targeted promotional
                      campaigns to attract new customers and boost sales.
                    </li>
                  </ul>
                  <h4>Results:</h4>
                  <ul>
                    <li>
                      Follower Growth: Increased social media followers by 90%,
                      significantly expanding his online presence.
                    </li>
                    <li>
                      Sales Increase: Boosted bakery sales by 35% through
                      targeted social media campaigns and promotions.
                    </li>
                    <li>
                      Brand Loyalty: Enhanced brand loyalty and customer
                      engagement, resulting in a stronger community connection.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="slide10">
                <h3>
                  <span className="number">10</span>
                  <span>Client: Olivia Black, Fashion Designer</span>
                </h3>
                <div>
                  <h4>Challenge:</h4>
                  <p>
                    Olivia's fashion brand needed to build and maintain a
                    positive public image, increase media coverage, and
                    effectively handle crisis communication.
                  </p>
                  <h4>Solution:</h4>
                  <p>
                    We provided comprehensive public relations services for
                    Olivia, focusing on building her brand's reputation and
                    managing media relations. Our approach included:
                  </p>
                  <ul>
                    <li>
                      Media Relations: Establishing and nurturing relationships
                      with critical fashion industry media and influencers.
                    </li>
                    <li>
                      Press Releases: Crafting and distributing press releases
                      to announce new collections, events, and milestones.
                    </li>
                    <li>
                      Crisis Communication: Developing a crisis communication
                      plan to swiftly and effectively handle potential issues.
                    </li>
                    <li>
                      Event Management: Organizing and promoting fashion shows,
                      launch events, and media briefings to increase visibility.
                    </li>
                    <li>
                      Brand Storytelling: Enhancing Olivia's brand storytelling
                      to create a compelling narrative that resonated with her
                      audience.
                    </li>
                  </ul>
                  <h4>Results:</h4>
                  <ul>
                    <li>
                      Media Coverage: Secured coverage in major fashion
                      publications, increasing brand visibility and credibility.
                    </li>
                    <li>
                      Brand Image: Maintained a positive brand image through
                      effective PR strategies and crisis management.
                    </li>
                    <li>
                      Customer Trust: Increased customer trust and brand
                      credibility, leading to higher engagement and sales.
                    </li>
                  </ul>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSlider;
