import React from "react";
import "./Weatherapp.css";
import Header from "./Header.js";
import Search from "./Search.js";
import CurrentTemp from "./CurrentTemp.js";
import Footer from "./Footer.js";

export default function Weatherapp() {
  return (
    <body>
      <div className="containerWeather">
        <div className="container-fluid">
          <Header />
          <Search />
          <CurrentTemp />
          <div className="title">
            The
            <div className="titleSpace">Weather</div>
          </div>
          <div className="row NextDays" id="forecast"></div>
        </div>
      </div>
      <Footer />
    </body>
  );
}
