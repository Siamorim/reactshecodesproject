import React from "react";
import "./Weatherapp.css";
import Header from "./Header.js";
import Search from "./Search.js";
import CurrentTemp from "./CurrentTemp.js";

export default function Weatherapp() {
  return (
    <body>
      <div className="containerApp">
        <div className="card">
          <Header />
          <Search />
          <CurrentTemp />
          <div className="title">
            The
            <div className="titleSpace">Weather</div>
          </div>
          <div className="row NextDays" id="forecast"></div>
        </div>
        <div className="code">
          <a
            href="https://github.com/Siamorim/reactshecodesproject"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>
          <span> by Sílvia Amorim</span>
        </div>
      </div>
    </body>
  );
}
