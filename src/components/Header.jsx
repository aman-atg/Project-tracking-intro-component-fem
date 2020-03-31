import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="content">
        <h2>
          <span className="new">New</span> Monograph Dashboard
        </h2>
        <h1>Powerful Insights into your team</h1>
        <p>Project planning and time tracking for agile teams</p>
        <div className="header_footer">
          <button>Schedule a Demo </button> <span>to see a preview</span>
        </div>
      </div>
      <div className="image">
        <img
          src="/images/illustration-devices.svg"
          type="Illustration Devices"
        />
      </div>
    </div>
  );
};

export default Header;
