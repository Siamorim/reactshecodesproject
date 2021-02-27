import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="line">
      <div className="row">
        <div className="col-6">
          <div id="cityNow">
            <span>
              {" "}
              <span role="img" aria-label="world">
                🗺️
              </span>
              Lisbon,{" "}
            </span>
            <span className="country" id="country">
              PT
            </span>
          </div>
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
