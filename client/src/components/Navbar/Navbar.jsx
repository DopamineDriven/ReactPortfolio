import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        Home
      </a>
      <a className="navbar-brand" href="/contact">
        Contact
      </a>
      <a className="navbar-brand" href="/portfolio">
        Portfolio
      </a>
    </nav>
  );
}

export default Navbar;