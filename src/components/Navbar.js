import React, { useState, useEffect, useRef } from "react";
import image from "../img/ZOOZOOWIN.png";
import languageIcon from "../img/langToggle.webp";
import apkFile from "../components/app-release.apk";
import Notification from "../components/notification"; // Import the Notification component

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [notification, setNotification] = useState(null); // State for managing notification

  const menuRef = useRef(null);
  const languageRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        languageRef.current &&
        !languageRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
        setLanguageOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Function to toggle the menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setLanguageOpen(false);
  };

  // Function to toggle the language dropdown
  const toggleLanguageDropdown = () => {
    setLanguageOpen(!languageOpen);
    setMenuOpen(false);
  };

  const handleDownload = () => {
    setNotification("Your download is in progress...");
    setTimeout(() => {
      const link = document.createElement("a");
      link.href = apkFile;
      link.download = "app-release.apk";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setNotification("Download started! Please follow steps to install.");
    }, 3000);
    
    // Hide the notification after 3 seconds
    setTimeout(() => {
      setNotification(null);
    }, 6000); // 3 seconds for initial message + 3 seconds for download started message
  };

  const closeNotification = () => {
    setNotification(null);
  };

  const navLinkStyle = {
    position: "relative",
    padding: "0.5rem 1rem",
    transition: "all 0.3s ease-in-out",
    overflow: "hidden",
  };

  const navLinkHoverStyle = {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    background: "linear-gradient(135deg, #00FF00, #FFFF00)",
    transform: "skewX(-20deg)",
    zIndex: -1,
    transition: "all 0.3s ease-in-out",
  };

  const linkContainerStyle = {
    position: "relative",
    zIndex: 0,
  };

  const navStyle = {
    backgroundColor: scrolled ? "rgba(0, 0, 0, 0.9)" : "black",
    color: "white",
    padding: "0.3rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    transition: "background-color 0.3s ease",
  };

  return (
    <nav style={navStyle}>
      {notification && (
        <Notification message={notification} />
      )}
      {/* Left side logo and language selector */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.1rem" }}>
        <img
          src={image}
          alt="Logo"
          className="md:hidden sm:hidden lg:block"
          style={{ height: "40px", marginLeft: "2.5rem" }}
        />
        <img
          src={image}
          alt="Logo"
          className="md:block sm:block lg:hidden"
          style={{ height: "30px", marginLeft: "1rem" }}
        />
        <div style={{ position: "relative", marginTop: "0.75rem" }} ref={languageRef}>
          <button
            onClick={toggleLanguageDropdown}
            style={{ outline: "none", marginLeft: "1.25rem" }}
          >
            <img
              src={languageIcon}
              alt="Language Icon"
              className="md:hidden sm:hidden lg:block"
              style={{ height: "1.5rem", width: "1.5rem" }}
            />
            <img
              src={languageIcon}
              alt="Language Icon"
              className="md:block sm:block lg:hidden"
              style={{ height: "1.5rem", width: "1.5rem" }}
            />
          </button>
          {languageOpen && (
            <div
              style={{
                zIndex: 20,
                position: "absolute",
                marginTop: "0.5rem",
                width: "8rem",
                backgroundColor: "white",
                color: "black",
                borderRadius: "0.25rem",
                boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.15)",
              }}
            >
              <a href="#" style={{ display: "block", padding: "0.5rem 1rem" }}>
                English
              </a>
              <a href="#" style={{ display: "block", padding: "0.5rem 1rem" }}>
                Hindi
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Center links */}
      <div
        style={{ gap: "2rem", alignItems: "center" }}
        className="hidden md:flex"
      >
        <div style={linkContainerStyle}>
          <a
            href="#playwin"
            style={navLinkStyle}
            className="text-lg p-1 font-semibold ml-96"
            onMouseEnter={(e) => {
              const span = e.target.querySelector("span");
              if (span) {
                span.style.width = "100%";
                e.target.style.color = "black";
                span.style.left = "0";
              }
            }}
            onMouseLeave={(e) => {
              const span = e.target.querySelector("span");
              if (span) {
                span.style.width = "0";
                e.target.style.color = "white";
                span.style.left = "50%";
              }
            }}
          >
            PLAYWIN
            <span style={{ ...navLinkHoverStyle, width: "0" }}></span>
          </a>
        </div>
        <div style={linkContainerStyle}>
          <a
            href="#pattiking"
            style={navLinkStyle}
            className="text-lg font-semibold"
            onMouseEnter={(e) => {
              const span = e.target.querySelector("span");
              if (span) {
                span.style.width = "100%";
                e.target.style.color = "black";
                span.style.left = "0";
              }
            }}
            onMouseLeave={(e) => {
              const span = e.target.querySelector("span");
              if (span) {
                span.style.width = "0";
                e.target.style.color = "white";
                span.style.left = "50%";
              }
            }}
          >
            PATTIKING
            <span style={{ ...navLinkHoverStyle, width: "0" }}></span>
          </a>
        </div>
      </div>
      <button
        className="text-xs font-bold bg-gradient-to-b from-[#00FF0A] to-[#008A12] text-white p-1.5 rounded-lg flex relative overflow-hidden"
        onClick={handleDownload}
      >
        DOWNLOAD NOW
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent to-white opacity-50 transform -rotate-45 -translate-x-full transition-transform duration-1000"
          style={{ animation: "shine 3s infinite" }}
        ></div>
      </button>
      {/* Right side menu icon */}
      <div
        className="md:hidden"
        style={{ display: "flex", alignItems: "center" }}
        ref={menuRef}
      >
        <button onClick={toggleMenu} style={{ outline: "none" }}>
          {/* Hamburger icon */}
          <svg
            className="w-6 h-6 lg:hidden"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            backgroundColor: "black",
            color: "white",
            padding: "1rem",
            zIndex: 10,
            boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.15)",
          }}
        >
          <a href="#playwin" className="block py-2">
            PLAYWIN
          </a>
          <a href="#pattiking" className="block py-2">
            PATTIKING
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
