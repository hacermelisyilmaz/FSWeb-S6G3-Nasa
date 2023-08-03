import React, { useEffect, useState } from "react";

function MainLeftInfo({ months, pOD }) {
  const [title, setTitle] = useState();
  const [date, setDate] = useState();
  const [copyright, setCopyright] = useState();

  useEffect(() => {
    pOD && setTitle(pOD.title);
    pOD && setDate(pOD.date);
    pOD && setCopyright(pOD.copyright);
  }, [pOD]);

  let displayDate = " ";

  if (date) {
    const parts = date.split("-");

    const year = parts[0];
    const month = months[Number(parts[1] - 1)];
    const day = parts[2];

    displayDate = `${year}, ${month} ${day}`;
  }

  return (
    <div className="Main-Info flex-container">
      <p className="date">{displayDate}</p>
      <h1 className="title">{title}</h1>
      <p className="copyright">{copyright}</p>
    </div>
  );
}

export default MainLeftInfo;
