import "./Menu.css";
import { PropTypes } from "prop-types";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export const Menu = ({ isActive }) => {
  const tlRef = useRef(null);
  useLayoutEffect(() => {
    if (isActive) {
      tlRef.current = gsap
        .timeline()
        .to(".menu", {
          x: 0,
          opacity: 1,
          duration: 0.6,
        })
        .to(".menu", {
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
          delay: -0.4,
          duration: 0.6,
        })
        .to(".menu", {
          backdropFilter: "blur(5px)",
          delay: -0.3,
        })
        .to(".menu-list", {
          y: 0,
          opacity: 1,
          delay: -0.4,
          duration: 0.6,
        });
    } else if (isActive === false) {
      tlRef.current.reverse();
    }
  }, [isActive]);
  return (
    <nav className="menu">
      <ul className="menu-list">
        <li className="menu-item">Home</li>
        <li className="menu-item">About</li>
        <li className="menu-item">Address</li>
        <li className="menu-item">Contacts</li>
        <li className="menu-item">Profile</li>
      </ul>
    </nav>
  );
};

Menu.propTypes = {
  isActive: PropTypes.bool,
};
