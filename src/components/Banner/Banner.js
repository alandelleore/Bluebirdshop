import React from "react";
import banner from "../../assets/banner.jpg";
import "./Banner.css";

function Banner() {
  return (
    <>
      <div className="bannerContainer">
        <img src={banner} alt="banner" className="banner" />
      </div>
    </>
  );
}

export default Banner;
