import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>ECOMMERCE.</h1>
        <p> Quality is always a first priority</p>

        <p>Copyrights 2025 &copy; Hiranmay, Naman, Gourab</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="https://www.linkedin.com/in/hiranmaya-panda-698597257/">LinkedIn @Hiranmay</a>
        <a href="www.linkedin.com/in/naman21kumar">LinkedIn @Naman</a>
        <a href="https://www.linkedin.com/in/gourab-panda-681725258/">LinkedIn @Gourab</a>
        <a href="/ ">Instagram</a>
        <a href="/ ">Youtube</a>
        <a href="/ ">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;
