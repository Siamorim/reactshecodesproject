import React from "react";
import WeatherIcon from "./WeatherIcon.js";

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
    let temperature = Math.round(props.data.main.temp);
    return `${temperature}ºC`;
  }

  return (
    <div className="WeatherForecastCalculation col">
      {formatDay()}
      <WeatherIcon imag={props.data.weather[0].icon} />
      {temperature()}
    </div>
  );
}
