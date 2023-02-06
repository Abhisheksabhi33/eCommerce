import React from "react";
import "./footer.css";
import instagramLogo from "../../assets/images/insta.png";
import facebookLogo from "../../assets/images/facebook.png";
import twitterLogo from "../../assets/images/twitter.png";

export default function Footer() {
  return (
    <>
      <footer className="footer-container">
        <div>stay in touch</div>
        <div className="social-media-icons-container">
          <img alt="website logo" src={twitterLogo} />
          <img alt="website logo" src={instagramLogo} />
          <img alt="website logo" src={facebookLogo} />
        </div>
      </footer>
    </>
  );
}
