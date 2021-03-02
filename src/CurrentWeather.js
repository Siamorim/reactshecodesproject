import React from "react";
import "./CurrentWeather.css";
import WeatherIcon from "./WeatherIcon.js";

export default function CurrentWeather(props) {
  return (
    <div className="WeatherAppBody">
      <div className="TempToday">
        <div className="row">
          <div className="col-6">
            <div className="float-left">
              <WeatherIcon imag={props.info.icon} />
            </div>
            <ul>
              <li>
                <div className="text-capitalize">{props.info.description}</div>
              </li>
              <li>
                <span className="temp" id="temp">
                  {Math.round(props.info.temperature)}
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
          <div className="col-6">
            <div className="WeatherConditions">
              <ul>
                <li>🌡Feels like: {Math.round(props.info.feelsLike)}º</li>
                <li>🌢 Humidity: {Math.round(props.info.humidity)}%</li>
                <li>💨Wind: {Math.round(props.info.wind)} km/h</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
