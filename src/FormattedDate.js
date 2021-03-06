import React from "react";

export default function FormattedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let day = days[props.date.getDay()];
  let month = months[props.date.getMonth()];
  let year = props.date.getFullYear();
  let hours = props.date.getHours();
  let minutes = props.date.getMinutes();
  let date = props.date.getDate();

  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let partDay = "am";
  if (hours >= 12) {
    partDay = "pm";
  }

  return (
    <div>
      {" "}
      {day}, {date} {month} {year}, {hours}:{minutes} {partDay}
    </div>
  );
}
