import React from "react";
import "./Weatherapp.css";
import Search from "./Search.js";

export default function Weatherapp() {
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
        <a
          href="https://github.com/Siamorim/reactshecodesproject"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code on Github
        </a>
        <span> by Sílvia Amorim</span>
      </footer>
    </div>
  );
}
