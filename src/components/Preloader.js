import React, { useState, useEffect } from "react";
import "../asset/css/preloader.css"; // Adjust the path as per your project structure

const Preloader = () => {
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPreloader(false);
    }, 3000); // Preloader will be shown for 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      id="preloader"
      className={`preloader ${showPreloader ? "visible" : "hidden"}`}
    >
      <div className="jumper">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Preloader;
