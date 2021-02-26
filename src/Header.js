import React from "react";

export default function Header() {
  return (
    <div className="line">
      <div className="row">
        <div className="col-6">
          <h1>
            {" "}
            <span role="img" aria-label="world">
              🗺️
            </span>
            Lisbon
          </h1>
          <span>, </span>
          <span className="country" id="country">
            PT
          </span>
        </div>
        <div className="col-6">
          <div className="todayDay" id="todayDay">
            Saturday, November 30 2020 18:19pm
          </div>
        </div>
      </div>
    </div>
  );
}
