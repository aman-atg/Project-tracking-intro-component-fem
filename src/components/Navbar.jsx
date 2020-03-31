import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <li>
          <img src="/images/logo.svg" alt="Brand Name" />
        </li>
        <span className="left">
          <li>Product</li>
          <li>Features</li>
          <li>Pricing</li>
          <span className="login">Login</span>
        </span>
      </nav>
    </div>
  );
};

export default Navbar;
