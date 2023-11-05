import React, { useState } from "react";

import imageHero from "./images/image-hero-desktop.png";
import imageHeroMobile from "./images/image-hero-mobile.png";
import logoSvg from "./images/logo.svg";
import menuSvg from "./images/icon-menu.svg";
import closeSvg from "./images/icon-close-menu.svg";
import client2 from "./images/client-audiophile.svg";
import client1 from "./images/client-databiz.svg";
import client4 from "./images/client-maker.svg";
import client3 from "./images/client-meet.svg";
import arrowUp from "./images/icon-arrow-up.svg";
import arrowDown from "./images/icon-arrow-down.svg";

// dropdown icons
import calendar from "./images/icon-calendar.svg";
import planning from "./images/icon-planning.svg";
import reminders from "./images/icon-reminders.svg";
import todo from "./images/icon-todo.svg";

const clients = [client1, client2, client3, client4];

function App() {
  const [imgSrc, setImgSrc] = useState(imageHero);
  const [mobileView, setMobileView] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  function changeOpenStatus() {
    setIsOpen(!isOpen);
  }

  function changeImgSrc() {
    if (window.innerWidth >= 868) {
      setImgSrc(imageHero);
      setMobileView(true);
      setIsOpen(false);
    } else {
      setImgSrc(imageHeroMobile);
      setMobileView(false);
    }
  }

  window.addEventListener("resize", changeImgSrc);

  return (
    <>
      {/* dark bg on mobile menu open */}
      <div className={isOpen ? "dark-bg" : "dark-bg hidden"}></div>
      <Navbar
        mobileView={mobileView}
        onChangeOpen={changeOpenStatus}
        isOpen={isOpen}
      />
      {/* mobile menu */}
      <div className={isOpen ? "mobile-menu" : "mobile-menu hidden"}>
        {" "}
        <NavMenu mobileView={mobileView} className={"nav-mobile-menu"} />
        <NavButtons className={"nav-mobile-buttons "} />
      </div>
      <HeroSection heroImg={imgSrc} />
      <AttributionP />
    </>
  );
}

// navbar
function Navbar({ mobileView, onChangeOpen, isOpen }) {
  return (
    <nav className="navbar">
      <div className="left-side-nav">
        <img src={logoSvg} alt="" />

        {mobileView && (
          <NavMenu mobileView={mobileView} className={"nav-desktop-menu"} />
        )}
      </div>

      <div className="right-side-nav">
        {mobileView && <NavButtons />}
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

function NavButtons({ className }) {
  return (
    <div className={className}>
      <a href="#" role="button">
        Login
      </a>
      <Button className={"register-btn"}>Register</Button>
    </div>
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
        <div className="clients-container">
          {clients.map((client) => {
            return (
              <img
                className="client"
                src={client}
                alt={"client" + clients.indexOf(client)}
              />
            );
          })}
        </div>
      </div>
      <img className="hero-image" src={heroImg} alt="hero" />
    </div>
  );
}

function AttributionP() {
  return (
    <p className="attribution-p">
      Challenge by{" "}
      <a
        className="attribution-link"
        href="https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5"
      >
        Frontend Mentor
      </a>
      . Coded by{" "}
      <a className="attribution-link" href="https://github.com/LukaszManiak">
        Łukasz Maniak
      </a>
      .
    </p>
  );
}

function NavMenu({ mobileView, className }) {
  const [openFeatures, setOpenFeatures] = useState(false);
  const [openCompany, setOpenCompany] = useState(false);

  function handleFeaturesClick() {
    setOpenFeatures(!openFeatures);
  }
  function handleCompanyClick() {
    setOpenCompany(!openCompany);
  }

  return (
    <>
      <ul className={className}>
        <li onClick={() => handleFeaturesClick()} className="nav-menu-item">
          Features
          <img
            className="arrow"
            src={!openFeatures ? arrowDown : arrowUp}
            alt="arrow down"
          />
        </li>
        <div
          className={
            openFeatures
              ? mobileView
                ? `drop-list-container features`
                : "drop-list-mobile-container  "
              : "hidden"
          }
        >
          <ul className="drop-list">
            <li>
              <img src={todo} alt="arrow down" /> <a>Todo List</a>
            </li>
            <li>
              <img src={calendar} alt="arrow down" />
              <a href="#" role="button">
                {" "}
                Calendar
              </a>
            </li>
            <li>
              <img src={reminders} alt="arrow down" />
              <a href="#" role="button">
                {" "}
                Reminders
              </a>
            </li>
            <li>
              {" "}
              <img src={planning} alt="arrow down" />
              <a href="#" role="button">
                {" "}
                Planning
              </a>
            </li>
          </ul>
        </div>
        <li onClick={() => handleCompanyClick()} className="nav-menu-item">
          Company
          <img
            className="arrow"
            src={!openCompany ? arrowDown : arrowUp}
            alt="arrow down"
          />
        </li>
        <div
          className={
            openCompany
              ? mobileView
                ? `drop-list-container company`
                : "drop-list-mobile-container "
              : "hidden"
          }
        >
          <ul className="drop-list">
            <li>
              <a href="#" role="button">
                History
              </a>
            </li>
            <li>
              <a href="#" role="button">
                Our Team
              </a>
            </li>
            <li>
              <a href="#" role="button">
                Blog
              </a>
            </li>
          </ul>
        </div>
        <li className="nav-menu-item">
          <a href="#" role="button">
            Careers
          </a>
        </li>

        <li className="nav-menu-item">
          <a href="#" role="button">
            About
          </a>
        </li>
      </ul>
    </>
  );
}

function DropList({ children, className }) {
  return (
    <div className={`drop-list-container ${className}`}>
      <ul className="drop-list">{children}</ul>
    </div>
  );
}
export default App;
