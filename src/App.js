import React, { useState } from "react";

import imageHero from "./images/image-hero-desktop.png";
import imageHeroMobile from "./images/image-hero-mobile.png";
import logoSvg from "./images/logo.svg";
import menuSvg from "./images/icon-menu.svg";
import closeSvg from "./images/icon-close-menu.svg";

function App() {
  const [imgSrc, setImgSrc] = useState(imageHero);
  const [mobileView, setMobileView] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  function changeOpenStatus() {
    setIsOpen(!isOpen);
  }

  function changeImgSrc() {
    if (window.innerWidth >= 768) {
      setImgSrc(imageHero);
      setMobileView(true);
    } else {
      setImgSrc(imageHeroMobile);
      setMobileView(false);
    }
  }

  window.addEventListener("resize", changeImgSrc);

  return (
    <>
      <Navbar
        mobileView={mobileView}
        onChangeOpen={changeOpenStatus}
        isOpen={isOpen}
      />
      <HeroSection heroImg={imgSrc} />
    </>
  );
}

// navbar
function Navbar({ mobileView, onChangeOpen, isOpen }) {
  return (
    <nav className="navbar">
      <div className="left-side-nav">
        <a href="#">
          <img src={logoSvg} alt="" />
        </a>

        {mobileView && (
          <ul className="nav-menu">
            <li className="nav-menu-item">
              <a href="#">Features</a>
            </li>
            <li className="nav-menu-item">
              <a href="#"> Company</a>
            </li>
            <li className="nav-menu-item">
              <a href="#">Careers</a>
            </li>
            <li className="nav-menu-item">
              <a href="#">About</a>
            </li>
          </ul>
        )}
      </div>

      <div className="right-side-nav">
        {mobileView && (
          <>
            <a href="#">Login</a>
            <Button className={"register-btn"}>Register</Button>
          </>
        )}
        {!mobileView && (
          <Button onClick={onChangeOpen} className={"hamburger-menu-btn"}>
            <img src={!isOpen ? menuSvg : closeSvg} alt="hamburger-menu-icon" />
          </Button>
        )}
      </div>
    </nav>
  );
}

function Button({ children, className, onClick }) {
  return (
    <button onClick={() => onClick()} className={className}>
      {children}
    </button>
  );
}

// hero section
function HeroSection({ heroImg }) {
  return (
    <div className="hero-section">
      <div className="hero-left">
        <h1>Make remote work</h1>
        <p className="hero-p">
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <Button className={"hero-btn"}>Learn more</Button>
      </div>
      <img className="hero-image" src={heroImg} alt="hero-image" />
    </div>
  );
}

export default App;
