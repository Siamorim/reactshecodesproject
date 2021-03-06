import React, { useState } from "react";
import axios from "axios";
import "./ForecastWeather.css";
import WeatherForecastCalculation from "./WeatherForecastCalculation.js";

export default function ForecastWeather(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function displayForecast(response) {
    console.log(response.data);
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded && props.lat === forecast.lat && props.lon === forecast.lon) {
    return (
      <div className="WeatherForecast row">
        <WeatherForecastCalculation
          data={forecast.daily[1]}
          unit={props.unit}
        />
        <WeatherForecastCalculation
          data={forecast.daily[2]}
          unit={props.unit}
        />
        <WeatherForecastCalculation
          data={forecast.daily[3]}
          unit={props.unit}
        />
        <WeatherForecastCalculation
          data={forecast.daily[4]}
          unit={props.unit}
        />
        <WeatherForecastCalculation
          data={forecast.daily[5]}
          unit={props.unit}
        />
        <WeatherForecastCalculation
          data={forecast.daily[6]}
          unit={props.unit}
        />
      </div>
    );
    // {forecast.list.slice(0,5).map(function(forecastItem) {
    // return <WeatherForecastCalculation data={forecast.Item} />}}
  } else {
    let apiKey = "f3b0d7fc3c211aec3174c405320dd931";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.lat}&lon=${props.lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayForecast);
    return null;
  }
}
