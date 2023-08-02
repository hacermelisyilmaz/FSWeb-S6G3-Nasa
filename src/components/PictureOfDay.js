/* import React from "react";
import axios from "axios";
import PictureComp from "./PictureComp.js";

function PictureOfDay() {
  axios
    .get(
      "https://api.nasa.gov/planetary/apod?api_key=WJnS0fGtrkgAxSmM3KEbPn7PwROQPg79530w3J62"
    )
    .then((response) => {
      console.log(response);
      return (
        <div className="PictureOfDay">
          <PictureComp pictureData={response.data} />
        </div>
      );
    })
    .catch((response) => {
      console.error(response);
    })
    .finally(console.log("Accio data!"));
}

export default PictureOfDay; */
