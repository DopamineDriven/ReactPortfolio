import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="navbar">
            <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="navbar-brand" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="navbar-brand" href="/contact">
                    Contact
                  </a>
                </li>
                <li className="nav-item">
                  <a className="navbar-brand" href="/portfolio">
                    Portfolio
                  </a>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar;