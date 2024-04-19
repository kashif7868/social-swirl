import React, { useState } from "react";
import dmbImage from "../../asset/images/banner/bm-b.jpg";
import dmpImage from "../../asset/images/banner/bm-p.jpg";
import dmp1Image from "../../asset/images/banner/bm-p1.jpg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import haiderImage from "../../asset/images/haider.jpg";
import fizbaImage from "../../asset/images/fizba.jpg";
import zeeImage from "../../asset/images/ZEE.jpg";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ScrollTrigger from "react-scroll-trigger";
import "../../asset/css/custom.css";
const Brand_marketing = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScrollEnter = () => {
    setIsVisible(true);
  };

  const handleScrollExit = () => {
    setIsVisible(false);
  };
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <>
      <section className="dm-headings">
        <div className="dm-image-container relative">
          <img src={dmbImage} alt="Digital Marketing Banner" />
          <div className="text-overlay absolute inset-0 flex flex-col justify-center items-center text-center">
            <h2 className="text-4xl font-bold text-white">Brand Marketing</h2>
            <p className="text-lg text-white">Services /Brand Marketing</p>
            <Link to="/service">
              <button className="normal4 px-6  text-white font-semibold rounded">
                Our Services
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="dm-details mt-8">
        <div className="flex flex-col md:flex-row">
          <img
            src={dmpImage}
            alt="Pay-Per-Click Advertising"
            className="md:w-1/3 mx-8"
          />
          <div className="det md:w-1/2 md:pl-8">
            <h1 className="text-2xl font-bold">Brand Identity</h1>

            <p className="text-justify">
              Developing a consistent and visually appealing brand identity
              through elements like logos, color schemes, typography, and visual
              style.
            </p>
            <p className="text-justify">
              Brand marketing revolves around establishing a clear and
              consistent brand identity. This includes visual elements like
              logos, color schemes, typography, and design elements that create
              a unique and recognizable look.
            </p>
            <p className="text-justify">
              Brand marketing helps define a brand's position in the market.
              This involves identifying where the brand fits in relation to
              competitors and how it addresses the specific needs of its target
              audience.
            </p>
            <p className="text-justify">
              Building a brand is a long-term endeavor. Effective brand
              marketing involves creating sustainable strategies that adapt to
              changing market trends and customer preferences. Brand marketing
              aims to create strong brand loyalty. Loyal customers not only make
              repeat purchases but also become advocates who refer others to the
              brand.
            </p>
          </div>
        </div>
      </section>

      <section className="dm-details2 mt-8">
        <div className="flex flex-col md:flex-row">
          <div className="det md:w-1/2 md:pr-8">
            <h1 className="text-2xl font-bold">Brand Positioning</h1>
            <p className="text-justify">
              Brand positioning is a critical strategic element in marketing
              that defines how a brand is perceived in the minds of consumers
              relative to its competitors. It's about identifying a unique and
              favorable place for the brand in the market and crafting a message
              that communicates this positioning to the target audience. Brand
              positioning is essential because it differentiates a brand from
              its competitors. In a crowded market, it's crucial to stand out
              and offer something distinct that resonates with your target
              audience. Brand positioning is about carving out a distinct and
              valuable space for your brand in the minds of consumers. It's a
              process that requires a deep understanding of your audience,
              competition, and your brand's strengths to create a memorable and
              compelling position that resonates with customers.
            </p>
            <p className="text-justify">
              The importance of brand recognition cannot be overstated. In a
              crowded marketplace where consumers are bombarded with choices,
              brands that are easily recognized and distinguished have a
              distinct competitive advantage. A strong brand recognition
              strategy fosters a sense of familiarity and trust among consumers,
              making them more likely to choose a recognizable brand over
              unfamiliar alternatives.
            </p>
          </div>
          <img
            src={dmp1Image}
            alt="Brand Recognition"
            className="md:w-1/3 mx-8"
          />
        </div>
      </section>
      {/* *********************************** */}
      {/*************Price Section  ********  */}
      {/* *********************************** */}
      <ScrollTrigger onEnter={handleScrollEnter} onExit={handleScrollExit}>
        <section className="section colored" id="pricing-plans">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="center-heading">
                  <h2 className="section-title">Pricing Plans</h2>
                </div>
              </div>
              <div className="offset-lg-3 col-lg-6">
                <div className="center-text">
                  <p>
                    Solutions tailored to your needs, backed by transparent
                    pricing. Choose from our range of pricing plans designed to
                    match your goals and budget. Empower your journey with
                    value-driven options that ensure you get the most out of
                    every investment.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center">
              {/* Starter Plan */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ duration: 0.5 }}
                className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8"
              >
                <div className="pricing-item">
                  <div className="pricing-header">
                    <h3 className="pricing-title">Starter</h3>
                  </div>
                  <div className="pricing-body">
                    <div className="price-wrapper bg-blue-500">
                      <span className="currency">$</span>
                      <span className="price">14.50</span>
                      <span className="period">monthly</span>
                    </div>
                    <ul className="list">
                      <li className="active">60 GB space</li>
                      <li className="active">600 GB transfer</li>
                      <li className="active">Pro Design Panel</li>
                      <li>15-minute support</li>
                      <li>Unlimited Emails</li>
                      <li>24/7 Security</li>
                    </ul>
                  </div>
                  <div className="pricing-footer">
                    <Link
                      to="#"
                      className="main-button demo-btn bg-blue-500 text-white"
                    >
                      Purchase Now
                    </Link>
                  </div>
                </div>
              </motion.div>

              {/* Premium Plan */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8"
              >
                <div className="pricing-item active">
                  <div className="pricing-header">
                    <h3 className="pricing-title">Premium</h3>
                  </div>
                  <div className="pricing-body">
                    <div className="price-wrapper bg-blue-500">
                      <span className="currency">$</span>
                      <span className="price">21.50</span>
                      <span className="period">monthly</span>
                    </div>
                    <ul className="list">
                      <li className="active">120 GB space</li>
                      <li className="active">1200 GB transfer</li>
                      <li className="active">Pro Design Panel</li>
                      <li className="active">15-minute support</li>
                      <li>Unlimited Emails</li>
                      <li>24/7 Security</li>
                    </ul>
                  </div>
                  <div className="pricing-footer">
                    <Link
                      to="#"
                      className="main-button demo-btn bg-blue-500 text-white"
                    >
                      Purchase Now
                    </Link>
                  </div>
                </div>
              </motion.div>

              {/* Advanced Plan */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ duration: 0.5, delay: 0.4 }}
                className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8"
              >
                <div className="pricing-item">
                  <div className="pricing-header">
                    <h3 className="pricing-title">Advanced</h3>
                  </div>
                  <div className="pricing-body">
                    <div className="price-wrapper bg-blue-500">
                      <span className="currency">$</span>
                      <span className="price">42.00</span>
                      <span className="period">monthly</span>
                    </div>
                    <ul className="list">
                      <li className="active">250 GB space</li>
                      <li className="active">5000 GB transfer</li>
                      <li className="active">Pro Design Panel</li>
                      <li className="active">15-minute support</li>
                      <li className="active">Unlimited Emails</li>
                      <li className="active">24/7 Security</li>
                    </ul>
                  </div>
                  <div className="pricing-footer">
                    <Link
                      to="#"
                      className="main-button demo-btn bg-blue-500 text-white"
                    >
                      Purchase Now
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </ScrollTrigger>

      {/* our team  */}
      <div className="team-main-container py-12 px-4">
        <h2 className="testinomal-heading text-3xl font-bold leading-tight mb-6 lg:text-4xl text-white text-center">
          What do they say about us?
        </h2>
        <p className="testinomal-p text-lg text-white leading-relaxed mb-6 mx-10">
          Hear from those who've experienced our excellence firsthand. Our
          clients' voices echo our dedication, quality, and impact. Discover how
          we've made a difference and why we're a trusted partner in their
          success stories.
        </p>

        {/* Slider for Our Team */}
        <section className="our-team">
          <div className="slider-main-container">
            <Slider {...sliderSettings}>
              <div className="flex flex-wrap justify-center items-center text-center our-team-main-container">
                <div className=" cursor-pointer bg-white shadow-lg rounded-lg p-8 transition-all duration-300 ease-in-out relative mb-8 mr-4 w-72">
                  <img
                    src={haiderImage}
                    alt="Haider Ashraf"
                    className="w-full rounded-full mb-4"
                  />
                  <div className="text-orange-500 mb-4 flex justify-center">
                    <FaStar className="text-yellow-500 text-2xl" />
                    <FaStar className="text-yellow-500 text-2xl" />
                    <FaStar className="text-yellow-500 text-2xl" />
                    <FaStar className="text-yellow-500 text-2xl" />
                    <FaStar className="text-yellow-500 text-2xl" />
                  </div>
                  <p className="text-gray-600 text-base leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloremque reiciendis aliquam est, ut libero doloribus
                  </p>
                  <h3 className="text-gray-900 text-lg mt-4">
                    Muhammad Haider Ashraf
                  </h3>
                </div>
              </div>
              <div className="flex flex-wrap justify-center items-center text-center">
                <div className="cursor-pointer bg-white shadow-lg rounded-lg p-8 transition-all duration-300 ease-in-out relative mb-8 mr-4 w-72">
                  <img
                    src={zeeImage}
                    alt="Zeeshan Anayiat"
                    className="w-full rounded-full mb-4"
                  />
                  <div className="text-orange-500 mb-4 flex justify-center">
                    <FaStar className="text-yellow-500 text-2xl" />
                    <FaStar className="text-yellow-500 text-2xl" />
                    <FaStar className="text-yellow-500 text-2xl" />
                    <FaStar className="text-yellow-500 text-2xl" />
                    <FaStar className="text-yellow-500 text-2xl" />
                  </div>
                  <p className="text-gray-600 text-base leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloremque reiciendis aliquam est, ut libero doloribus
                  </p>
                  <h3 className="text-gray-900 text-lg mt-4">
                    Zeeshan Anayiat
                  </h3>
                </div>
              </div>
              <div className="flex flex-wrap justify-center items-center text-center">
                <div className="cursor-pointer bg-white shadow-lg rounded-lg p-8 transition-all duration-300 ease-in-out relative mb-8 mr-4 w-72">
                  <img
                    src={fizbaImage}
                    alt="Fizba Azhar"
                    className="w-full rounded-full mb-4"
                  />
                  <div className="text-orange-500 mb-4 flex justify-center">
                    <FaStar className="text-yellow-500 text-2xl" />
                    <FaStar className="text-yellow-500 text-2xl" />
                    <FaStar className="text-yellow-500 text-2xl" />
                    <FaStar className="text-yellow-500 text-2xl" />
                    <FaStar className="text-yellow-500 text-2xl" />
                  </div>
                  <p className="text-gray-600 text-base leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloremque reiciendis aliquam est, ut libero doloribus
                  </p>
                  <h3 className="text-gray-900 text-lg mt-4">Fizba Azhar</h3>
                </div>
              </div>
            </Slider>
          </div>
        </section>
      </div>

      {/* Quite Section */}
      <section className="about-quote">
        <h2 className="text-2xl font-bold">Do you like what you see?</h2>
        <p className="text-lg mt-4">
          Tell us about your project and Let's build your project together.
        </p>
        <button className="quote-btn bg-blue-500 text-white px-4 py-2 rounded-md mt-4">
          Get a Quote
        </button>
      </section>
    </>
  );
};

export default Brand_marketing;
