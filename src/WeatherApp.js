import React from "react";
import "./WeatherApp.css";
import Search from "./Search.js";

export default function weatherApp() {
  return (
    <div className="containerApp">
      <div className="card">
        <Search defaultCity="Lisbon" />
        <div className="title">
          The
          <div className="titleSpace">Weather</div>
        </div>
      </div>
      <footer className="code">
        <span> Open-source code by Sílvia Amorim, on </span>
        <a
          href="https://github.com/Siamorim/reactshecodesproject"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
        <span> and hosted on </span>
        <a
          href="https://angry-poincare-168aad.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          Netlify
        </a>
      </footer>
    </div>
  );
}
