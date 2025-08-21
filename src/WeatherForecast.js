import React, { useState } from "react"
import WeatherForecastDay from "./WeatherForecastDay"
import "./WeatherForecast.css";
import axios from "axios"

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecastData, setForecastData] = useState(null)
  function handleResponse(response) {
    console.log(response.data)
    setForecastData(response.data.daily)
    setLoaded(true);
  }
  console.log(props);
  if (loaded) {
    return(
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <WeatherForecastDay data={forecastData[0]} />
          </div>
        </div>
      </div>
    );
  } else {
    const key = "7fd5430a29oa8949b4d239de06t9a3d4"
    const city = props.city
    const forecastUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${key}&untis={metric}`
    axios.get(forecastUrl).then(handleResponse);
    return null;
  }
}