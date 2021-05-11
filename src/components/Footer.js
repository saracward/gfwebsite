import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <>
    <div className="footer">
      <i class="fab fa-facebook-square"></i>
      <i class="fab fa-instagram-square"></i>
    </div>

    <div>
           <a
        href="https://www.gocalavera.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p className="calavera">Powered by Calavera
        {/* <img
          src="https://res.cloudinary.com/dvug8hy5k/image/upload/v1620533450/Portfolio1/Calavera_oxwdwu.png"
          alt="Logo"
          className="logo"
        /> */}
      </p></a>
    </div>
    </>
  );
};

export default Footer;
