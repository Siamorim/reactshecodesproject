import React from "react";
import WeatherIcon from "./WeatherIcon.js";
import "./WeatherForecastCalculation.css";

export default function WeatherForecastCalculation(props) {
  function formatDay() {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let date = new Date(props.data.dt * 1000).getDay();
    //let day = days[date.getDay()];
    //return `${day}`;
    let day = days[date];
    return day;
  }

  function temperature() {
    let temperature = Math.round(props.data.temp.day);
    let minTemp = Math.round(props.data.temp.min);
    let maxTemp = Math.round(props.data.temp.max);
    return (
      <div>
        <div>{temperature}ºC</div>
        <span className="minTemp">{minTemp}/</span>
        <span className="maxTemp">{maxTemp}ºC</span>
      </div>
    );
  }

  function fahrenheit() {
    let temperature = Math.round((props.data.temp.day * 9) / 5 + 32);
    let minTemp = Math.round((props.data.temp.min * 9) / 5 + 32);
    let maxTemp = Math.round((props.data.temp.max * 9) / 5 + 32);
    <div>
      <div>{temperature}ºF</div>
      <span className="minTemp">{minTemp}/</span>
      <span className="maxTemp">{maxTemp}</span>
    </div>;
  }

  if (props.unit === "celsius") {
    return (
      <div className="weatherForecastCalculation col">
        {formatDay()}
        <WeatherIcon imag={props.data.weather[0].icon} />
        {temperature()}
      </div>
    );
  } else {
    return (
      <div className="weatherForecastCalculation col">
        {formatDay()}
        <WeatherIcon imag={props.data.weather[0].icon} />
        {fahrenheit()}
      </div>
    );
  }
}
