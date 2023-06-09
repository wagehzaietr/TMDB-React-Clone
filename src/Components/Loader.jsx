import React from "react";
import '../Styles/Loader.css'

export const Loader = () => {
  return (
    <div>
      <div className="loader">
        <span className="loader-text">loading</span>
        <span className="load"></span>
      </div>
    </div>
  );
};

export default Loader