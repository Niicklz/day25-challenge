import React from "react";
import "./Loader.css";
export const Loader = ({loaderStatus}) => {
  return (
    <div id="app" className={`app ${!loaderStatus? "hidden": ""}`} >
      <div className={`loader`}></div>
    </div>
  );
};
