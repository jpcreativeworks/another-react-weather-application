import React from "react"
import WeatherIcon from "./WeatherIcon"

export default function WeatherForecastDay({data, unit}) {
  const toUnit = (c) => (unit === "c" ? c : (c * 9) / 5 + 32)
  let max = Math.round(toUnit(data.temperature.maximum));
  let min = Math.round(toUnit(data.temperature.minimum));
    

  const dayName = (() => {
    let d = new Date(data.time * 1000);
    return ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][d.getDay()];
  })();
  return (
    <div>
      <div className="WeatherForecast-day">{dayName}</div>
      <WeatherIcon code={data.condition.icon} size={24} />
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temperatures-max">
          {max}°{unit === "c" ? "C" : "F"}
        </span>{" "}<br />
        <span className="WeatherForecast-temperatures-min">
          {min}°{unit === "c" ? "C" : "F"}
        </span>
      </div>
    </div>
  )
}