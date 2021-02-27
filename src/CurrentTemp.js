import React from "react";
import "./CurrentTemp.css";

export default function CurrentTemp() {
  return (
    <div className="Today">
      <div className="row">
        <div className="col-6">
          <div className="TempToday">
            <img src="" alt="Clear" className="icon" id="icon" />
            <ul>
              <li>
                <div className="description" id="description">
                  Sunny
                </div>
              </li>
              <li>
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
              </li>
            </ul>
          </div>
        </div>
        <div className="col-6">
          <div className="WeatherConditions">
            <ul>
              <li>
                <div>
                  <span className="imgReal">🌡</span> Feels like:
                  <span id="real">110</span>º
                </div>
              </li>
              <li>
                <div>
                  <span className="imgHum">🌢</span> Humidity:
                  <span id="humidity">100</span> %
                </div>
              </li>
              <li>
                <div>
                  <span role="img" aria-label="imgWin">
                    💨
                  </span>
                  Wind:
                  <span id="wind">20</span> km/h
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
