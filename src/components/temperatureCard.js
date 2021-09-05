import React, { useEffect, useState } from "react";
import FourColumn from "./fourColumn";

const TempCard = ({ tempInfo }) => {
  const { temp, weathermood, name, country } = tempInfo;

  const [weatherState, setWeatherState] = useState("");

  useEffect(() => {
    if (weathermood) {
      switch (weathermood) {
        case "Clouds":
          setWeatherState("wi-day-cloudy");
          break;
        case "Haze":
          setWeatherState("wi-fog");
          break;
        case "Clear":
          setWeatherState("wi-day-sunny");
          break;
        case "Mist":
          setWeatherState("wi-dust");
          break;
        default:
          setWeatherState("wi-day-sunny");
          break;
      }
    }
  }, [weathermood]);
  return (
    <article className="widget">
      <div className="weatherIcon">
        <i className={`wi ${weatherState}`}></i>
      </div>
      <div className="weatherInfo">
        <div className="temperature">
          <span>{temp}&deg;</span>
        </div>
        <div className="description">
          <div className="weatherCondition">{weathermood}</div>
          <div className="place">
            {name},{country}
          </div>
        </div>
      </div>
      <div className="date">{new Date().toLocaleString()}</div>
      <FourColumn tempInfo={tempInfo} />
    </article>
  );
};
export default TempCard;
