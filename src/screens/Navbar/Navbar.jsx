import React from "react";
import { useState, useEffect } from "react";
import "./Navbar.css";

import hamBtn from "./hamburger-menu.svg";

export function Navbar() {
  const [showLinks, setShowLinks] = useState(true);
  const [showBtn, setShowBtn] = useState(false);

  const handleClick = () => setShowLinks(!showLinks);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setShowLinks(true);
        setShowBtn(false);
      } else {
        setShowLinks(false);
        setShowBtn(true);
      }
    };

    handleResize(); // inicial
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="navbar-container">
      <div className="navbar-name">
        <div>Dan Andrei</div>
        {showBtn && (
          <img src={hamBtn} alt="hamburguer menu" onClick={handleClick} />
        )}
      </div>
      {showLinks && (
        <div className="navbar-links-container">
          <a href="#home">Home</a>
          <a href="#aboutme">About</a>
          <a href="#technologies">Technologies</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </div>
      )}
    </div>
  );
}
