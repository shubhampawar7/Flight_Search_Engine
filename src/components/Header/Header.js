import React from "react";
import planeIcon from '../../../src/assets/images/PlaneIcon.png';
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <img src={planeIcon} alt="planeIcon" className="headerLogo" />
      <h2 className="headerTitle">Flight Search Engine</h2>
    </div>
  );
};

export default Header;
