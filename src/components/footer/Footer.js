import React from "react";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className="bg-black p-5">
      <p className="text-center text-white">
        <small>copyright &copy; {year}</small>
      </p>
    </div>
  );
};

export default Footer;
