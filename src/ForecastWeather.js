import React, { useState } from "react";
import axios from "axios";
import "./ForecastWeather.css";
import WeatherForecastCalculation from "./WeatherForecastCalculation.js";

export default function ForecastWeather(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function displayForecast(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded && props.city === forecast.city.name) {
    return (
      <div className="WeatherForecast row">
        <WeatherForecastCalculation data={forecast.list[0]} />
        <WeatherForecastCalculation data={forecast.list[1]} />
        <WeatherForecastCalculation data={forecast.list[2]} />
        <WeatherForecastCalculation data={forecast.list[3]} />
        <WeatherForecastCalculation data={forecast.list[4]} />
      </div>
    );
    // {forecast.list.slice(0,5).map(function(forecastItem) {
    // return <WeatherForecastCalculation data={forecast.Item} />}}
  } else {
    let apiKey = "f6b05703004145fac5fd3f7a96bd1a10";
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayForecast);
    return null;
  }
}
