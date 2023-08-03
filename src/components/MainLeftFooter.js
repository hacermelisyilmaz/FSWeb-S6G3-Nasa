import React from "react";

function MainLeftFooter() {
  return (
    <footer className="Main-Left-Footer flex-container">
      <div className="footote">APOD | nasa.gov - all rights reserved</div>
      <div className="prev-next">
        <a className="prev">Prev</a>
        <a className="next">Next</a>
      </div>
    </footer>
  );
}

export default MainLeftFooter;
