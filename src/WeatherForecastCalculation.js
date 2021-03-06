import React from "react";
import WeatherIcon from "./WeatherIcon.js";
import "./WeatherForecastCalculation.css";
import CurrentWeather from "./CurrentWeather.js";

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
    let minTemp = Math.round(props.data.temp.min);
    let maxTemp = Math.round(props.data.temp.max);
    return (
      <div>
        <span className="minTemp">{minTemp}º/</span>
        <span className="maxTemp">{maxTemp}º</span>
      </div>
    );
  }

  function fahrenheit() {
    let minTemp = Math.round((props.data.temp.min * 9) / 5 + 32);
    let maxTemp = Math.round((props.data.temp.max * 9) / 5 + 32);
    return (
      <div>
        <span className="minTemp">{minTemp}º/</span>
        <span className="maxTemp">{maxTemp}º</span>
      </div>
    );
  }

  if (props.unit === "celsius") {
    return (
      <div className="weatherForecastCalculation col">
        <CurrentWeather info={props.info.feelsLike} />
        {formatDay()}
        <WeatherIcon imag={props.data.weather[0].icon} />
        {temperature()}
      </div>
    );
  } else {
    return (
      <div className="weatherForecastCalculation col">
        <CurrentWeather info={props.info.feelsLike} />
        {formatDay()}
        <WeatherIcon imag={props.data.weather[0].icon} />
        {fahrenheit()}
      </div>
    );
  }
}
