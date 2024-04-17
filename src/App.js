import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import Services from "./pages/Services";
import Partner from "./pages/Partner";
import Contact from "./pages/Contact";
import About from "./pages/About";
import SignUp from "./pages/User/SignUp";
import Login from "./pages/User/Login";

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
        <Route path="/service" element={<Services />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign_up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Preloader stopPreloader={() => setShowNavbar(true)} />
      <Footer />
    </Router>
  );
};

export default App;
