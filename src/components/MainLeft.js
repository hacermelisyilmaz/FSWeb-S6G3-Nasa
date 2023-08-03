import React from "react";
import MainLeftHeader from "./MainLeftHeader";
import MainLeftInfo from "./MainLeftInfo";
import MainLeftFooter from "./MainLeftFooter";

function MainLeft({ pOD }) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <div className="Main-Left flex-container">
      <MainLeftHeader />
      <MainLeftInfo months={months} pOD={pOD} />
      <MainLeftFooter />
    </div>
  );
}

export default MainLeft;
