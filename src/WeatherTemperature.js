import React from "react";

export default function WeatherTemperature({ unit, celsius, onUnitChange }) {
  const f = (celsius * 9) / 5 + 32;

    return (
      <div className="WeatherTemperature">
        <span className="temperature">
          {Math.round(unit === "c" ? celsius : f)}
        </span>        
        <span className="unit">{unit === "c" ? (
          <>°C | <a href="/" onClick={(event) => { event.preventDefault(); onUnitChange("f"); }}>°F</a></>
        ) : (
          <><a href="/" onClick={(event) => { event.preventDefault(); onUnitChange("c"); }}>°C</a> | °F</>
        )}</span>
      </div>
    );
}