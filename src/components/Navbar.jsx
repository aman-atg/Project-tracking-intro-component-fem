import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <li className="brand">
          <img src="/images/logo.svg" alt="Brand Name" />
        </li>
        <span className="left">
          <li>Product</li>
          <li>Features</li>
          <li>Pricing</li>
          <li className="dot">●</li>
          <li className="login">Login</li>
        </span>
      </nav>
    </div>
  );
};

export default Navbar;
