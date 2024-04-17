import React from "react";
import { Link } from "react-router-dom";
import digtalImage from "../asset/images/services/digital marketing.png";
import contentImage from "../asset/images/services/contentcreater.png";
import brandImage from "../asset/images/services/brand marketing.png";
import emailImage from "../asset/images/services/e mail marketing.png";
import fiverImage from "../asset/images/services/fiverr.png";
import googleImage from "../asset/images/services/googl ads.png";
import ourTeamImage from "../asset/images/services/our team.png";
import papularImage from "../asset/images/services/popular.png";
import youtubeImage from "../asset/images/services/youtube.png";
import upworkImage from "../asset/images/services/upworknew.png";

import ideaImage from "../asset/images/ideas.png";
import sketchImage from "../asset/images/sketch.png";
import discussImage from "../asset/images/discuss.png";
import reviseImage from "../asset/images/revise.png";
import aproveImage from "../asset/images/approve.png";
import launchImage from "../asset/images/launch.png";

import haiderImage from "../asset/images/haider.jpg";
import fizbaImage from "../asset/images/fizba.jpg";
import zeeImage from "../asset/images/ZEE.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa";

import martImage from "../asset/images/mort.png";
import elImage from "../asset/images/ELISHAPRO.png";
import goImage from "../asset/images/go trolly.png";

import hrImage from "../asset/images/team/WaleedsProfile-b636718d.jpeg";
import frontImage from "../asset/images/team/haider.jpg";
import front2Image from "../asset/images/team/fizba.jpg";
import graphicImage from "../asset/images/team/WhatsApp Image 2023-08-15 at 15.31.04.jpg";
import "../asset/css/service.css";
const Services = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  const singleSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <section className="hero-section">
        <div className="container">
          <div>
            <h1 className="text-white text-center">
              "Your Success Story Starts Here Embrace Our Services."
            </h1>
            <button className="normal3 " id="scrollButton">
              Our Services
            </button>
          </div>
        </div>
      </section>
      {/* Service Section  */}
      <section className="services" id="servicess">
        <h2 className="text-center">
          These are the <strong className="font-bold">SERVICES</strong> we are
          providing!
        </h2>
        <div className="container service-container grid grid-cols-3 gap-4">
          <img src={digtalImage} alt="" id="digitalMarketingImage" />
          <img src={contentImage} alt="" id="contentCreatorImage" />
          <img src={brandImage} alt="" id="brandMarketingImage" />
          <img src={emailImage} alt="" id="emailMarketingImage" />
          <img src={fiverImage} alt="" id="fiverImage" />
          <img src={googleImage} alt="" id="googleAdsImage" />
          <img src={ourTeamImage} alt="" id="ourTeamImage" />
          <img src={papularImage} alt="" id="popularImage" />
          <img src={youtubeImage} alt="" id="youtubeImage" />
          <img src={upworkImage} alt="UpworkImage" id="upworkImage" />
        </div>
      </section>
      {/* Demo Section  */}
      <section className="demo">
        <div className="demo-box text-center">
          <p>Save time and grow your business with us!</p>
          <button className="demo-btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            VIEW ON-DEMAND DEMO
          </button>
        </div>
      </section>
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
      {/* Recent Project */}
      <section className="flex flex-col items-center justify-center h-screen">
        <div className="max-w-3xl mx-auto heading">
          <h2 className="text-3xl font-bold mb-4">Recent Projects</h2>
          <p className="text-lg mb-8">
            These are the current projects our team is working on.
          </p>
          <div className="w-full">
            <Slider {...singleSliderSettings}>
              <div>
                <img src={martImage} className="w-full" alt="Project 1" />
              </div>
              <div>
                <img src={elImage} className="w-full" alt="Project 2" />
              </div>
              <div>
                <img src={goImage} className="w-full" alt="Project 3" />
              </div>
            </Slider>
          </div>
        </div>
      </section>

      {/* Our Company team  */}

      <section className="product slider-container relative flex flex-col items-center py-12">
        <h3 className="text-2xl font-bold">Our Team</h3>
        <p className="text-lg mt-4 text-center">
          Our team is a diverse tapestry of talent and expertise, woven together
          by a shared passion for innovation. With a blend of creativity,
          dedication, and experience, we collaborate seamlessly to turn ideas
          into reality. Together, we are the driving force behind every success
          story, united by a common goal to exceed expectations and shape
          remarkable outcomes.
        </p>
        <div className="next-prev-icons left absolute top-1/2 transform -translate-y-1/2">
          <i className="fa-solid fa-chevron-left text-3xl"></i>
        </div>
        <div className="product-container flex space-x-4">
          <div className="product-card flex flex-col items-center">
            <div className="product-image">
              <img
                src={hrImage}
                alt="Human Resources"
                className="product-thumb rounded-full"
              />
            </div>
            <div className="product-info">
              <h2 className="product-brand text-xl text-center">
                Human resources(HR)
              </h2>
            </div>
          </div>
          <div className="product-card flex flex-col items-center">
            <div className="product-image">
              <img
                src={frontImage}
                alt="Front-end Developer"
                className="product-thumb rounded-full"
              />
            </div>
            <div className="product-info">
              <h2 className="product-brand text-xl text-center">
                Front-end Developer
              </h2>
            </div>
          </div>
          <div className="product-card flex flex-col items-center">
            <div className="product-image">
              <img
                src={front2Image}
                alt="Front-end Developer"
                className="product-thumb rounded-full"
              />
            </div>
            <div className="product-info">
              <h2 className="product-brand text-xl text-center">
                Front-end Developer
              </h2>
            </div>
          </div>
          <div className="product-card flex flex-col items-center">
            <div className="product-image">
              <img
                src={graphicImage}
                alt="Graphic Designer"
                className="product-thumb rounded-full"
              />
            </div>
            <div className="product-info">
              <h2 className="product-brand text-xl text-center">
                Graphic Designer
              </h2>
            </div>
          </div>
        </div>
        <div className="next-prev-icons right absolute top-1/2 right-0 transform -translate-y-1/2">
          <i className="fa-solid fa-chevron-right text-3xl"></i>
        </div>
      </section>
    </>
  );
};

export default Services;
