import React from "react";
import facebook from "../../images/facebook.png";
import twitter from "../../images/twitter.png";
import instagram from "../../images/instagram.png";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className="bg-black p-4">
      <div className="text-center">
        <h6 className="text-white">Follow on</h6>
        <img src={facebook} alt="" />
        <img src={twitter} alt="" />
        <img src={instagram} alt="" />
      </div>

      <p className="text-center text-white mt-5">
        <small>copyright &copy; {year} sportsp.inc</small>
      </p>
    </div>
  );
};

export default Footer;
