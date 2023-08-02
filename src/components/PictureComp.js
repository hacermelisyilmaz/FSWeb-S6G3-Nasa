import React, { useState } from "react";

function PictureComp({ pictureData }) {
  const [isClicked, setIsClicked] = useState(false);

  const style = {
    backgroundImage: `url(${pictureData.hdurl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div
      className="PictureComp"
      style={style}
      onClick={() => {
        setIsClicked(!isClicked);
      }}
    >
      <h3 className="comp-title">{pictureData.title}</h3>
      <h4 className="comp-date">{pictureData.date}</h4>
      {isClicked && <p>{pictureData.explanation}</p>}
    </div>
  );
}

export default PictureComp;
