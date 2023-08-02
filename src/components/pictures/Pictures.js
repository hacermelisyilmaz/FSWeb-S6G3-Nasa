import React from "react";
import PictureComp from "./PictureComp.js";

function Pictures(props) {
  const { data } = props;
  //console.log("Pictures: ", data);
  return (
    <div className="Pictures flex-container">
      {data.map((picData) => {
        if (!picData.hdurl) {
          picData.hdurl = picData["thumbnail_url"];
        }
        return <PictureComp pictureData={picData} />;
      })}
    </div>
  );
}

export default Pictures;
