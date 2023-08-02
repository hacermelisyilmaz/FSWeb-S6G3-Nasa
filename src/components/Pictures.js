import React, { useState } from "react";
import { data } from "../data.js";
import PictureComp from "./PictureComp.js";
//import PictureOfDay from "./PictureOfDay.js";

function Pictures() {
  const [pictureData, setPictureData] = useState(data);

  return (
    <div className="Pictures">
      {/* <PictureOfDay /> */}

      <div className="flex-container">
        <h2>Astronomy Pictures from Previous Days:</h2>
        {pictureData.map((picData) => {
          if (!picData.hdurl) {
            picData.hdurl = picData["thumbnail_url"];
          }
          return <PictureComp key={picData.id} pictureData={picData} />;
        })}
      </div>
    </div>
  );
}

export default Pictures;
