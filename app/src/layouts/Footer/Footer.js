import React from "react";

import LinkedIn from "../../assets/icons/linkedin-brands.svg";
import GitHub from "../../assets/icons/github-brands.svg";
import Email from "../../assets/icons/at-solid.svg";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-links">
        <a href="https://www.linkedin.com/in/patricia-saraiva-dm/">
          <img
            className="social-media_icon"
            alt="LinkeDin icon"
            src={LinkedIn}
          />
        </a>
        <a href="https://github.com/PatriciaSaraiva">
          <img className="social-media_icon" alt="GitHub icon" src={GitHub} />
        </a>
        <a href="mailto:patricia.t.saraiva@gmail.com">
          <img className="social-media_icon" alt="at icon" src={Email} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
