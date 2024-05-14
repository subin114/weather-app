/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react/prop-types */
import "./WeatherDetail.scss";

const WeatherDetail = ({ weather }) => {
  console.log(weather);

  return (
    <div className="weather-detail">
      <h2>Details</h2>
      <ul>
        <li>
          <span>Wind</span>
          {(weather?.wind.speed).toFixed(1)}km/h
        </li>
        <li>
          <span>Clouds</span>
          {weather?.clouds.all}%
        </li>
        <li>
          <span>Humidity</span>
          {weather?.main.humidity}%
        </li>
        <li>
          <span>Fahrenheit</span>
          {Math.trunc((weather?.main.temp * 9) / 5 + 32)}°F
        </li>
      </ul>
    </div>
  );
};

export default WeatherDetail;
