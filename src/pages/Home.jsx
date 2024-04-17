import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa";
import "../asset/css/home.css";
import modImage from "../asset/images/strategies/modern strategy.png";
import infImage from "../asset/images/strategies/influencer marketing.png";
import videoImage from "../asset/images/strategies/video marketing.png";
import liveImage from "../asset/images/strategies/live streaming.png";
import storyImage from "../asset/images/strategies/stories and fleet.png";
import dataImage from "../asset/images/strategies/data analytics.png";
import emImage from "../asset/images/strategies/embracing.png";
import micrImage from "../asset/images/strategies/micro moments.png";
import hashImage from "../asset/images/strategies/hashtags compaign.png";
import useImage from "../asset/images/strategies/UGC.png";
import social1Image from "../asset/images/strategies/social commerce.png";
import social2Image from "../asset/images/strategies/social listening.png";
import int2Image from "../asset/images/int2.png";
import helpIamge from "../asset/images/help.png";

import ideaImage from "../asset/images/ideas.png";
import sketchImage from "../asset/images/sketch.png";
import discussImage from "../asset/images/discuss.png";
import reviseImage from "../asset/images/revise.png";
import aproveImage from "../asset/images/approve.png";
import launchImage from "../asset/images/launch.png";

import haiderImage from "../asset/images/haider.jpg";
import fizbaImage from "../asset/images/fizba.jpg";
import zeeImage from "../asset/images/ZEE.jpg";

import blogImage1 from "../asset/images/blog-item-01.png";
import blogImage2 from "../asset/images/blog-item-02.png";
import blogImage3 from "../asset/images/blog-item-03.png";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Home = () => {
  const [counterOn, setCounterOn] = useState(false);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
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
      <div className="welcome-area" id="welcome">
        <div className="header-text">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4">
              <div className="lg:col-span-8">
                <h1 className="text-4xl font-bold font-serif">
                  We provide the best <strong>strategy</strong> to grow up your{" "}
                  <strong>business</strong>
                </h1>
                <p>
                  Join us in crafting conversations that matter. Empower your
                  brand through meaningful engagement and social influence
                </p>
                <Link
                  to="#features"
                  className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 inline-block mt-4 btn-quit"
                >
                  Get Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slider */}
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <div className="features-small-item">
              <div className="icon">
                <img src={modImage} alt="" />
              </div>
              <h5 className="features-title">Modern Strategy</h5>
              <p>
                Customize anything in this template to fit your website needs
              </p>
            </div>
          </div>
          <div>
            <div className="features-small-item">
              <div className="icon">
                <img src={infImage} alt="" />
              </div>
              <h5 className="features-title">Influencer Marketing</h5>
              <p>
                Customize anything in this template to fit your website needs
              </p>
            </div>
          </div>
          <div>
            <div className="features-small-item">
              <div className="icon">
                <img src={videoImage} alt="" />
              </div>
              <h5 className="features-title">Video Marketing</h5>
              <p>
                Customize anything in this template to fit your website needs
              </p>
            </div>
          </div>
          <div>
            <div className="features-small-item">
              <div className="icon">
                <img src={liveImage} alt="" />
              </div>
              <h5 className="features-title">Live Streaming</h5>
              <p>
                Customize anything in this template to fit your website needs
              </p>
            </div>
          </div>

          <div>
            <div className="features-small-item">
              <div className="icon">
                <img src={social1Image} alt="" />
              </div>
              <h5 className="features-title">Social Commerce</h5>
              <p>
                Customize anything in this template to fit your website needs
              </p>
            </div>
          </div>
          <div>
            <div className="features-small-item">
              <div className="icon">
                <img src={storyImage} alt="" />
              </div>
              <h5 className="features-title">Stories and Fleets</h5>
              <p>
                Customize anything in this template to fit your website needs
              </p>
            </div>
          </div>
          <div>
            <div className="features-small-item">
              <div className="icon">
                <img src={dataImage} alt="" />
              </div>
              <h5 className="features-title">Data Analytics</h5>
              <p>
                Customize anything in this template to fit your website needs
              </p>
            </div>
          </div>
          <div>
            <div className="features-small-item">
              <div className="icon">
                <img src={emImage} alt="" />
              </div>
              <h5 className="features-title">Embracing New Platforms</h5>
              <p>
                Customize anything in this template to fit your website needs
              </p>
            </div>
          </div>
          <div>
            <div className="features-small-item">
              <div className="icon">
                <img src={micrImage} alt="" />
              </div>
              <h5 className="features-title">Micro-Moments</h5>
              <p>
                Customize anything in this template to fit your website needs
              </p>
            </div>
          </div>
          <div>
            <div className="features-small-item">
              <div className="icon">
                <img src={hashImage} alt="" />
              </div>
              <h5 className="features-title">Hashtag Campaigns</h5>
              <p>
                Customize anything in this template to fit your website needs
              </p>
            </div>
          </div>
          <div>
            <div className="features-small-item">
              <div className="icon">
                <img src={useImage} alt="" />
              </div>
              <h5 className="features-title">User-Generated Content (UGC)</h5>
              <p>
                Customize anything in this template to fit your website needs
              </p>
            </div>
          </div>
          <div>
            <div className="features-small-item">
              <div className="icon">
                <img src={social2Image} alt="" />
              </div>
              <h5 className="features-title">Social Listening</h5>
              <p>
                Customize anything in this template to fit your website needs
              </p>
            </div>
          </div>
        </Slider>
      </div>

      {/* **************************************  */}
      {/* Project about  */}
      {/* **************************************  */}
      <section className="section pt-28 pb-0" id="features-project">
        <div className="container-project">
          <div className="flex flex-wrap items-center">
            <div
              className="lg:w-5/12 md:w-full sm:w-full mb-10 lg:mb-0"
              data-scroll-reveal="enter left move 30px over 0.6s after 0.4s"
            >
              <img src={int2Image} className="rounded-lg mx-auto" alt="App" />
            </div>
            <div className="lg:w-6/12 md:w-full sm:w-full mx-8">
              <div className="left-heading">
                <h2 className="text-3xl font-bold leading-tight mb-6 lg:text-4xl">
                  Let's discuss about your project
                </h2>
              </div>
              <div className="left-text">
                <p className="text-lg text-white leading-relaxed mb-6">
                  Your project is our focus. We're eager to delve into the
                  details, understand your vision, and collaborate to bring it
                  to life. Let's start a conversation that leads to your
                  project's success.
                </p>
              </div>
            </div>
          </div>
          {/* <div className="flex justify-center">
            <div className="w-10/12 border-b border-gray-400"></div>
          </div> */}
        </div>
      </section>

      {/* **************************************  */}
      {/* We can help you to grow your business */}
      {/* **************************************  */}
      <section className="section pb-16 " id="features-project">
        <div className="container-bs-help">
          <div className="flex flex-wrap">
            <div className="lg:w-6/12 md:w-full sm:w-full mb-10 lg:mb-0 bs-grow ">
              <div className="left-heading">
                <h2 className="text-3xl lg:text-4xl font-bold">
                  We can help you to grow your business
                </h2>
              </div>
              <div className="left-text">
                <p className="text-lg text-white leading-relaxed">
                  Experience exponential growth for your business with our
                  tailored solutions. Let our expertise pave the way for your
                  success as we work together to expand your brand, reach new
                  audiences, and achieve your goals.
                </p>
              </div>
            </div>
            <div className="lg:w-6/12 md:w-full sm:w-full">
              <img src={helpIamge} className="rounded-lg mx-auto" alt="App" />
            </div>
          </div>
        </div>
      </section>
      {/* ************************************** */}
      {/* Work Process */}
      <section className="mini" id="work-process">
        <div className="mini-content">
          <div className="container">
            <div className="row custom-row">
              <div>
                <div className="info">
                  <h1 className="text-3xl font-bold leading-tight mb-6 lg:text-4xl">
                    Work Process
                  </h1>
                  <p className="text-lg text-white leading-relaxed mb-6">
                    The use of a streamlined approach to achieve success. In
                    order to transform concepts into effective results, we
                    carefully analyze, strategies, and carry them out. Journey
                    with us as we innovate and work together to attain our
                    goals.
                  </p>
                </div>
              </div>
            </div>
            {/* Mini Box Start */}
            <div className="row custom-row">
              <div className="col-lg-2 col-md-3 col-sm-6 col-6">
                <Link to="#" className="mini-box">
                  <img src={ideaImage} alt="" />
                  <strong>Get Ideas</strong>
                  <span>Godard pabst prism fam cliche.</span>
                </Link>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-6 col-6">
                <Link to="#" className="mini-box">
                  <img src={sketchImage} alt="" />
                  <strong>Sketch Up</strong>
                  <span>Godard pabst prism fam cliche.</span>
                </Link>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-6 col-6">
                <Link to="#" className="mini-box">
                  <img src={discussImage} alt="" />
                  <strong>Discuss</strong>
                  <span>Godard pabst prism fam cliche.</span>
                </Link>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-6 col-6">
                <Link to="#" className="mini-box">
                  <img src={reviseImage} alt="" />
                  <strong>Revise</strong>
                  <span>Godard pabst prism fam cliche.</span>
                </Link>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-6 col-6">
                <Link to="#" className="mini-box">
                  <img src={aproveImage} alt="" />
                  <strong>Approve</strong>
                  <span>Godard pabst prism fam cliche.</span>
                </Link>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-6 col-6">
                <Link to="#" className="mini-box">
                  <img src={launchImage} alt="" />
                  <strong>Launch</strong>
                  <span>Godard pabst prism fam cliche.</span>
                </Link>
              </div>
            </div>
            {/* Mini Box End */}
          </div>
        </div>
      </section>

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
      {/* Demo Section  */}
      <section className="demo">
        <div className="demo-box">
          <p>Save time and grow your business with us!</p>
          <button className="demo-btn">VIEW ON-DEMAND DEMO</button>
        </div>
      </section>
      {/* *********************************** */}
      {/*************Price Section  ********  */}
      {/* *********************************** */}
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
                  value-driven options that ensure you get the most out of every
                  investment.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center">
            {/* Starter Plan */}
            <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
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
            </div>

            {/* Premium Plan */}
            <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
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
            </div>

            {/* Advanced Plan */}
            <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
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
            </div>
          </div>
        </div>
      </section>
      {/* *********************************** */}
      {/*************Project Section  ********  */}
      {/* *********************************** */}
      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
        <section
          className="counter"
          style={{ overflow: "hidden", position: "relative" }}
        >
          <div className="content">
            <div className="container">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="count-item decoration-bottom text-center">
                    <strong class="text-4xl font-bold">
                      {counterOn && (
                        <CountUp start={0} end={126} duration={2} delay={0} />
                      )}
                    </strong>
                    <span className="block">Projects</span>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="count-item decoration-top text-center">
                    <strong class="text-4xl font-bold">
                      {counterOn && (
                        <CountUp start={0} end={63} duration={2} delay={0} />
                      )}
                    </strong>
                    <span className="block">Happy Clients</span>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="count-item decoration-bottom text-center">
                    <strong class="text-4xl font-bold">
                      {counterOn && (
                        <CountUp start={0} end={18} duration={2} delay={0} />
                      )}
                    </strong>

                    <span className="block">Awards Wins</span>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="count-item text-center">
                    {" "}
                    <strong class="text-4xl font-bold">
                      {counterOn && (
                        <CountUp start={0} end={27} duration={2} delay={0} />
                      )}
                    </strong>
                    <span className="block">Countries</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollTrigger>
      {/* *********************************** */}
      {/* *************blog************** */}
      {/* *********************************** */}
      <section className="section" id="blog">
        <div className="container">
          {/* Section Title */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-12">
              <div className="center-heading">
                <h2 className="section-title">Blog Entries</h2>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6 lg:col-start-4">
              <div className="center-text">
                <p className="text-center">
                  Exploring insights and inspiration through our blog entries.
                  Dive into a world of valuable content where we share
                  expertise, trends, and perspectives. Join the conversation as
                  we uncover new horizons and offer fresh perspectives on the
                  topics that matter most.
                </p>
              </div>
            </div>
          </div>

          {/* Blog Posts */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Blog Post 1 */}
            <div className="col-span-1 lg:col-span-1">
              <div className="blog-post-thumb">
                <div className="img">
                  <img src={blogImage1} alt="Blog 1" />
                </div>
                <div className="blog-content">
                  <h3 className="text-xl font-bold">
                    <Link to="#" className="text-blue-500">
                      Vivamus ac vehicula dui
                    </Link>
                  </h3>
                  <div className="text">
                    Cras aliquet ligula dui, vitae fermentum velit tincidunt id.
                    Praesent eu finibus nunc. Nulla in sagittis eros. Aliquam
                    egestas augue.
                  </div>
                  <Link
                    to="#"
                    className="main-button block mt-4 bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            {/* Blog Post 2 */}
            <div className="col-span-1 lg:col-span-1">
              <div className="blog-post-thumb">
                <div className="img">
                  <img src={blogImage2} alt="Blog 2" />
                </div>
                <div className="blog-content">
                  <h3 className="text-xl font-bold">
                    <Link to="#" className="text-blue-500">
                      Phasellus convallis augue
                    </Link>
                  </h3>
                  <div className="text">
                    Aliquam commodo ornare nisl, et scelerisque nisl dignissim
                    ac. Vestibulum finibus urna ut velit venenatis, vel ultrices
                    sapien mattis.
                  </div>
                  <Link
                    to="#"
                    className="main-button block mt-4 bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            {/* Blog Post 3 */}
            <div className="col-span-1 lg:col-span-1">
              <div className="blog-post-thumb">
                <div className="img">
                  <img src={blogImage3} alt="Blog 3" />
                </div>
                <div className="blog-content">
                  <h3 className="text-xl font-bold">
                    <Link to="#" className="text-blue-500">
                      Nam gravida purus non
                    </Link>
                  </h3>
                  <div className="text">
                    Maecenas eu erat vitae dui convallis consequat vel gravida
                    nulla. Vestibulum finibus euismod odio, ut tempus enim
                    varius eu.
                  </div>
                  <Link
                    to="#"
                    className="main-button block mt-4 bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
