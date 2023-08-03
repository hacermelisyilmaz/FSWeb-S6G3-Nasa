import React from "react";
import MainLeft from "./MainLeft.js";
import MainPicture from "./MainPicture.js";
import MainRight from "./MainRight.js";

function Main({ apodData }) {
  return (
    <div className="Main flex-container">
      <MainLeft pOD={apodData} />
      <MainPicture pOD={apodData} />
      <MainRight />
    </div>
  );
}

export default Main;
