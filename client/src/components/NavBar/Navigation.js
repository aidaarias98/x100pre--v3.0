//navbar component that is called in the APP.js
//that way its basically made global in each page

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/x100pre-logo.png";
import "./Navigation.css";
import { Button } from "../Button/Button";

function Navigation() {
  //usestate hook when clicking on mobile menu
  const [click, setClick] = useState(false);
  //useState for button
  const [button, setButton] = useState(true);
  //setting to the opposite of line 14
  const handleClick = () => setClick(!click);
  //close menu function
  const closeMobileMenu = () => setClick(false);

  //function that that will display the button based on screen size
  const showButton = () => {
    if (window.innerWidth <= 960) {
      //removes it when it hits mobile
      setButton(false);
    } else {
      setButton(true);
    }
  };
  //only renders the cart button once even if you refresh
  useEffect(() => {
    showButton();
  }, []);

  //whenever it resizes screen show the button
  window.addEventListener("resize", showButton);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img src={Logo} alt="logo" style={{ width: "50px" }}></img>
          <p className="logotitle">x100pre Records </p>
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          {/* //setting up the mobile menu implementing usestate  */}
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>

        {/* when you click out on something in mobile menu exit  */}
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/aboutus" className="nav-links" onClick={closeMobileMenu}>
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/products"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contactus"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link className="nav-links-mobile" onClick={closeMobileMenu}>
              Cart
            </Link>
          </li>
        </ul>
        {/* implementing the button component using useState hook */}
        {button && <Button buttonStyle="btn--outline">Cart</Button>}
      </div>
    </nav>
  );
}

export default Navigation;
