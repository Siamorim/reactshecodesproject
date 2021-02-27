import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div>
      {" "}
      <input
        type="text"
        placeholder="Enter a city..."
        className="city"
        id="cityInput"
        autocomplete="off"
        autoFocus="on"
      />
      <button
        type="button"
        className="btnCurrentlocation"
        id="btnCurrentlocation"
      >
        <em>Current location</em>
      </button>
      <input
        type="image"
        src="whitemag.png"
        className="magn"
        value="search"
        id="search"
        alt="magnifier"
      />
    </div>
  );
}
