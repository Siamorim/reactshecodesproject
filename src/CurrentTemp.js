import React from "react";
import "./CurrentTemp.css";

export default function CurrentTemp() {
  return (
    <div className="Today">
      <div className="row">
        <div className="col">
          <div className="TempToday">
            <img src="" alt="Clear" className="icon" id="icon" />
            <span className="temp" id="temp">
              22
            </span>
            <span className="units">
              <span href="#" id="celsius-link" className="active">
                ºC
              </span>{" "}
              |
              <span href="#" id="fahrenheit-link">
                ºF
              </span>
            </span>
          </div>
        </div>
        <div className="col">
          <div className="realFeel">
            <em>
              <span className="imgReal">🌡</span> Feels like:
              <span id="real">110</span>º
            </em>
          </div>
        </div>
        <div className="w-100"></div>
        <div className="col">
          <div className="description" id="description">
            Sunny
          </div>
        </div>
        <div className="col">
          <div className="humidity">
            <em>
              <span className="imgHum">🌢</span> Humidity:
              <span id="humidity">100</span> %
            </em>
          </div>
        </div>
        <div className="w-100"></div>
        <div className="col">
          <div className="wind">
            <em>
              <span role="img" aria-label="imgWin">
                💨
              </span>
              Wind:
              <span id="wind">20</span> km/h
            </em>
          </div>
        </div>
      </div>
    </div>
  );
}
