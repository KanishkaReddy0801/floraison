import React, { useState, useEffect } from "react";
import { BiX } from "react-icons/bi";
import { BiMenu } from "react-icons/bi";
import logo from "../assets/logo.svg";
import "../App.css";
import "./Css/menu.css";

export default function Menu() {
  const dropdownItems = [
    { id: 1, link: '/', name: "Home" },
    { id: 2, link: 'https://www.floraison.in/our-company/', name: "Our Company" },
    { id: 3, link: 'https://www.floraison.in/our-leadership/', name: "Our Leadership" },
    { id: 4, link: 'https://www.floraison.in/our-execution/', name: "Our Execution" },
    { id: 5, link: 'https://www.floraison.in/local-expertise/', name: "Local Expertise" },
    { id: 6, link: 'https://www.floraison.in/work-with-us/', name: "Work With Us" },
    { id: 7, link: 'https://www.floraison.in/resource-center/', name: "Resource Centre" },
    { id: 8, link: 'https://www.floraison.in/contact-us/', name: "Contact Us" },
  ];
  
  const [show, setShow] = useState(false);
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    if (show) {
      let timeoutId;
      const animationDelay = 100; // Delay between each item animation (in milliseconds)
      
      // Animate the items one by one
      for (let i = 0; i < dropdownItems.length; i++) {
        timeoutId = setTimeout(() => {
          setVisibleItems(prevItems => [...prevItems, i]);
        }, i * animationDelay);
      }
      
      // Clear the timeout when the component is unmounted or the menu is closed
      return () => {
        clearTimeout(timeoutId);
      };
    } else {
      // Reset the visible items when the menu is closed
      setVisibleItems([]);
    }
  }, [show]);

  function showMenu() {
    setShow(true);
  }

  function closeMenu() {
    setShow(false);
  }

  return (
    <>
      <header>
        <img src={logo} alt="Logo" className="logo"></img>
        <div className="menuBar">
          <h3>Menu <BiMenu className="open" onClick={showMenu} /></h3>
          {show ? (
            <div className="menu">
              <BiX className="close" onClick={closeMenu} />
              {dropdownItems.map((item, index) => {
                const isVisible = visibleItems.includes(index);
                return (
                  <ol key={item.id}>
                    <a
                      href={item.link}
                      className={isVisible ? 'fade-in' : 'fade-out'}
                    >
                      {item.name}
                    </a>
                  </ol>
                );
              })}
            </div>
          ) : null}
        </div>
      </header>
    </>
  );
}
