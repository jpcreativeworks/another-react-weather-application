import React, { useState, useEffect } from "react"
import WeatherForecastDay from "./WeatherForecastDay"
import "./WeatherForecast.css";
import axios from "axios"

export default function WeatherForecast({ city, unit }) {
  let [loaded, setLoaded] = useState(false);
  let [forecastData, setForecastData] = useState(null)

  useEffect(() => {
    setLoaded(false);
  }, [city]);

  function handleResponse(response) {
    console.log(response.data)
    setForecastData(response.data.daily)
    setLoaded(true);
  }
  if (loaded) {
    return(
      <div className="WeatherForecast">
        <div className="row">
          {forecastData.map((daily, index) =>
            index < 5 ? (
                <div className="col" key={index}>
                  <WeatherForecastDay data={daily} unit={unit} />
                </div>
              ) : null
          )} 
        </div>
      </div>
    );
  } else {
    const key = "7fd5430a29oa8949b4d239de06t9a3d4"
    const forecastUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${key}&units=metric`
    axios.get(forecastUrl).then(handleResponse);
    return null;
  }
}