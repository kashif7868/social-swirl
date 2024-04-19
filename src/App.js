import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import Partner from "./pages/Partner";
import Contact from "./pages/Contact";
import About from "./pages/About";
import SignUp from "./pages/User/SignUp";
import Login from "./pages/User/Login";
import Services from "./pages/Services";
import DigitalMarketing from "./pages/AllServices/Digital_marketing";
import ContactCreator from "./pages/AllServices/Content_creator";
import BrandMarketing from "./pages/AllServices/Brand_marketing";
import EmailMarketing from "./pages/AllServices/Email_marketing";
import Fiver from "./pages/AllServices/Fiverr";
import GoogleAds from "./pages/AllServices/Google_ads";
import OurTeam from "./pages/AllServices/Our_team";
import Popular from "./pages/AllServices/Popular";
import Youtube from "./pages/AllServices/Youtube";
import Upwork from "./pages/AllServices/Upwork";
// import TestPage from "./pages/TestPage";

const App = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNavbar(true);
    }, 2000); // Preloader will be shown for 2 seconds before Navbar appears

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign_up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/service" element={<Services />} />
        {/* <Route path="/test" element={<TestPage />} /> */}

        {/* All Service pages will be here */}
        <Route path="/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/content-creator" element={<ContactCreator />} />
        <Route path="/brand-marketing" element={<BrandMarketing />} />
        <Route path="/email-marketing" element={<EmailMarketing />} />
        <Route path="/fiver" element={<Fiver />} />
        <Route path="/google-ads" element={<GoogleAds />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/youtube" element={<Youtube />} />
        <Route path="/upwork" element={<Upwork />} />
      </Routes>
      <Preloader stopPreloader={() => setShowNavbar(true)} />
      <Footer />
    </Router>
  );
};

export default App;
