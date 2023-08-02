import React from "react";

function PictureComp({ pictureData }) {
  const style = {
    backgroundImage: `url(${pictureData.hdurl})`,
    backgroundSize: "cover",
  };

  return (
    <div className="PictureComp" style={style}>
      <h2 className="comp-title">{pictureData.title}</h2>
      <h3 className="comp-date">{pictureData.date}</h3>
    </div>
  );
}

export default PictureComp;
