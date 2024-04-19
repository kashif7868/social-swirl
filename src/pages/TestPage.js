import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ScrollTrigger from "react-scroll-trigger";

const TestPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScrollEnter = () => {
    setIsVisible(true);
  };

  const handleScrollExit = () => {
    setIsVisible(false);
  };

  return (
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
                  value-driven options that ensure you get the most out of every
                  investment.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center">
            {/* Starter Plan */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
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
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
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
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
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
  );
};

export default TestPage;
