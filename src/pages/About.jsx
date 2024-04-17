import React from "react";
import aboutBg from "../asset/images/banner/au-b.jpg";
import eventImage from "../asset/images/banner/au-p.jpg";
import hrImage from "../asset/images/team/WaleedsProfile-b636718d.jpeg";
import frontImage from "../asset/images/team/haider.jpg";
import front2Image from "../asset/images/team/fizba.jpg";
import graphicImage from "../asset/images/team/WhatsApp Image 2023-08-15 at 15.31.04.jpg";
import "../asset/css/about.css";

const About = () => {
  return (
    <main>
      <section className="about-headings relative">
        <div className="image-container relative">
          <img src={aboutBg} alt="About Us Banner" className="w-full h-auto" />
          <div className="about-us-heading text-overlay absolute inset-0 flex items-center justify-center">
            <h2 className="text-4xl font-bold text-white">About Us</h2>
          </div>
          <p class="about-us-p">
            Social Swirl is a dynamic and innovative software company founded by
            Danial Khan in 2022. Based in United Kingdom. Social Swirl
            specialises in Software and media solutions with a focus on new
            creations. The company's mission is to provide high-quality software
            solutions and media that help businesses and individuals optimise
            their online presence and achieve their goals. With a team of
            experienced professionals and a commitment to excellence, Social
            Swirl is dedicated to providing personalised, reliable, and
            affordable services to its clients. AIMS Our mission is to provide
            high-quality software solutions and media services that help
            businesses and individuals optimise their online presence and
            achieve their goals. At Social Swirl, we are committed to delivering
            personalised, reliable, and affordable services to our clients, with
            a focus on new creations and cutting- edge technologies.We maintain
            a team of experienced professionals who are dedicated to providing
            exceptional customer service and support, and we strive to build
            strong and lasting relationships with our clients based on trust,
            transparency, and open communication.
          </p>
        </div>
      </section>

      <section className="about-details">
        <div className="det p-4 about-details-right-side">
          <h1 className="text-3xl font-bold">Events And Updates</h1>
          <p className="text-lg mt-4">
            We are delighted to announce an exciting new development at Social
            Swirl: the launch of our highly anticipated Business Outsourcing
            Project. At Social Swirl, we have always been committed to
            delivering exceptional services and innovative solutions to meet the
            evolving needs of our clients. With our new Business Outsourcing
            Project, we are taking our commitment to the next level by offering
            comprehensive outsourcing solutions tailored to enhance the
            efficiency and productivity of your business operations.
          </p>
        </div>
        <div className="left-side-img">
          <img
            src={eventImage}
            alt="Events and Updates"
            className="w-full h-auto "
          />
        </div>
      </section>
      <section className="product slider-container relative flex flex-col items-center">
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
      <section className="about-quote">
        <h2 className="text-2xl font-bold">Do you like what you see?</h2>
        <p className="text-lg mt-4">
          Tell us about your project and Let's build your project together.
        </p>
        <button className="quote-btn bg-blue-500 text-white px-4 py-2 rounded-md mt-4">
          Get a Quote
        </button>
      </section>
    </main>
  );
};

export default About;
