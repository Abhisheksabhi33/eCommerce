import React from "react";
import "./navbar.scss";
import { NavLink, useLocation } from "react-router-dom";

// icons and logo
import websiteLogo from "../../assets/images/websitelogo.png";
import * as FiIcons from "react-icons/fi";

const Navbar = () => {
  const location = useLocation();
  return (
    <>
      <nav className="navbar-container">
        <div className="left">
          <img className="logo" alt="website logo" src={websiteLogo} />
        </div>
        <div className="nav-links">
          <NavLink className="link" to="/">
            HOME
          </NavLink>
          <NavLink className="link" to="/journey">
            JOURNEY{" "}
            <hr
              className={
                location.pathname.includes("/journey")
                  ? "nav-active"
                  : "nav-inactive"
              }
            />
          </NavLink>
          <NavLink className="link" to="/team">
            TEAM{" "}
            <hr
              className={
                location.pathname.includes("/team")
                  ? "nav-active"
                  : "nav-inactive"
              }
            />
          </NavLink>
          <NavLink className="link" to="/store">
            STORE{" "}
            <hr
              className={
                location.pathname.includes("/store")
                  ? "nav-active"
                  : "nav-inactive"
              }
            />
          </NavLink>
          <NavLink className="link" to="/contact">
            CONTACT{" "}
            <hr
              className={
                location.pathname.includes("/contact")
                  ? "nav-active"
                  : "nav-inactive"
              }
            />
          </NavLink>
        </div>
        <div className="profile">
          <FiIcons.FiUser />
          <div>SOHAN</div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
