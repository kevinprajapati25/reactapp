import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      {/* <div className="container-fluid"> */}
        <nav className="navbar navbar-expand-lg navbar-dark navo ">
          <NavLink className="navbar-brand link" to="/">
            DevD
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink exact activeClassName="actives" className="nav-link text-capitalize links " to="/">
                  Home 
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact activeClassName="actives" className="nav-link text-capitalize links " to="/about">
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact activeClassName="actives" className="nav-link text-capitalize links" to="/services">
                  services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact activeClassName="actives" className="nav-link text-capitalize links" to="/contact">
                  contact us
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      {/* </div> */}
    </>
  );
};
export default Navbar;
