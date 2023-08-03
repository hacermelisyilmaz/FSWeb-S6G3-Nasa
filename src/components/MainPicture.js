import React, { useEffect, useState } from "react";

function MainPicture({ pOD }) {
  const [imgOfDay, setImgOfDay] = useState();
  useEffect(() => {
    pOD && setImgOfDay(pOD.hdurl);
  }, [pOD]);
  return (
    <div className="Main-Picture flex-container">
      <a className="prev-img">
        <img src={imgOfDay} />
      </a>
      <a className="img-of-day">
        <img src={imgOfDay} />
      </a>
      <a className="next-img">
        <img src={imgOfDay} />
      </a>
    </div>
  );
}

export default MainPicture;
