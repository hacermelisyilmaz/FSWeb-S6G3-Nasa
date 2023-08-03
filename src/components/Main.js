import React, { useEffect, useState } from "react";
import axios from "axios";
import MainLeft from "./MainLeft.js";
import MainPicture from "./MainPicture.js";
import MainRight from "./MainRight.js";

function Main() {
  const [apodData, setApodData] = useState();

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=WJnS0fGtrkgAxSmM3KEbPn7PwROQPg79530w3J62"
      )
      .then(function (response) {
        setApodData(response.data);
      })
      .catch(function (error) {
        console.error(error);
      })
      .finally(function () {
        console.log("Axios get request has been made");
      });
  }, []);

  return (
    <div className="Main flex-container">
      <MainLeft pOD={apodData} />
      <MainPicture pOD={apodData} />
      <MainRight />
    </div>
  );
}

export default Main;
