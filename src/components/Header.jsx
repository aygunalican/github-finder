import React from "react";
import "../assets/css/header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="images-container">
        <img
          src="https://i.pinimg.com/736x/34/54/59/345459f28f9c4708d2964b7326443198.jpg"
          alt="Image 1"
          className="header-img"
        />
        <h1 className="adventure-font">Movies Finder</h1>
        <img
          src="https://i.pinimg.com/736x/ee/d4/f0/eed4f00f55a686c440c03ac053fa8665.jpg"
          alt="Image 2"
          className="header-img se2c"
        />
      </div>
    </header>
  );
};

export default Header;
