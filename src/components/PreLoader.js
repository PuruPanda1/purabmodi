import React from "react";
import "../preloader.css";

const PreLoader = () => {
  return (
    <div className="preloader-container">
      <div className="preloader-body">
        <span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </span>
        <div className="preloader-base">
          <span></span>
          <div className="preloader-face"></div>
        </div>
      </div>
      <div className="preloader-longfazers">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <h1 className="preloader-text">Loading</h1>
    </div>
  );
};

export default PreLoader;
