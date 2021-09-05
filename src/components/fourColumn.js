import React from "react";
const FourColumn = ({ tempInfo }) => {
  const { humidity, pressure, speed, sunset} = tempInfo;

  let sec = sunset;
  let sunsetTime = new Date(sec * 1000);
  let timeStr = `${sunsetTime.getHours()}:${sunsetTime.getMinutes()}`;
  return (
    <div className="extra-temp">
      <div className="temp-info-minmax">
        <div className="two-sided-section">
          <p>
            <i className="wi wi-sunset"></i>
          </p>
          <p className="extra-info-leftside">
            {timeStr} <br />
            Sunset
          </p>
        </div>

        <div className="two-sided-section">
          <p>
            <i className="wi wi-humidity"></i>
          </p>
          <p className="extra-info-leftside">
            {humidity} <br />
            Humidity
          </p>
        </div>
      </div>
      <div className="weather-extra-info">
        <div className="two-sided-section">
          <p>
            <i className="wi wi-rain"></i>
          </p>
          <p className="extra-info-leftside">
            {pressure} <br />
            Pressure
          </p>
        </div>

        <div className="two-sided-section">
          <p>
            <i className="wi wi-strong-wind"></i>
          </p>
          <p className="extra-info-leftside">
            {speed} <br />
            Speed
          </p>
        </div>
      </div>
    </div>
  );
};
export default FourColumn;
