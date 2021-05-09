import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <i class="fab fa-facebook-square"></i>
      <a
        href="https://www.gocalavera.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://res.cloudinary.com/dvug8hy5k/image/upload/v1620533450/Portfolio1/Calavera_oxwdwu.png"
          alt="Logo"
          className="logo"
        />
      </a>
      <i class="fab fa-instagram-square"></i>
    </div>
  );
};

export default Footer;
