import React, { useState } from "react";
import PictureComp from "./PictureComp.js";

function Pictures(props) {
  const { data } = props;
  const [pictureData, setPictureData] = useState(data);
  return (
    <div className="Pictures flex-container">
      {pictureData.map((picData) => {
        if (!picData.hdurl) {
          picData.hdurl = picData["thumbnail_url"];
        }
        return <PictureComp key={picData.id} pictureData={picData} />;
      })}
    </div>
  );
}

export default Pictures;
