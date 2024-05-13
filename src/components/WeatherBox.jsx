/* eslint-disable react/prop-types */
import "./WeatherBox.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const WeatherBox = ({ weather }) => {
  console.log("weather?!", weather);
  console.log("weather temp?!", weather?.main.temp);
  const iconUrl = `https://openweathermap.org/img/wn/${weather?.weather[0].icon}.png`;

  return (
    <div className="weather-box">
      <div className="weather-name">
        <FontAwesomeIcon className="icon" icon={faLocationDot} />
        {weather?.name}
      </div>
      <div className="weather-info">
        <img src={iconUrl} alt="Weather Icon" />
        <div className="weather-temp">
          <span>{Math.trunc(weather?.main.temp)}°</span>
          <span>
            ({Math.trunc((weather?.main.temp * 9) / 5 + 32)}
            °F)
          </span>
        </div>
        <span className="weather-desc">{weather?.weather[0].description}</span>
      </div>
    </div>
  );
};

export default WeatherBox;
