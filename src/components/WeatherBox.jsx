/* eslint-disable react/prop-types */
import "./WeatherBox.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faArrowUp,
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";

const WeatherBox = ({ weather }) => {
  const iconUrl = `https://openweathermap.org/img/wn/${weather?.weather[0].icon}.png`;

  /** 현재 날짜 받아오는 함수 */
  // 응답에서 시간대 정보 가져오기
  const timezoneOffsetSeconds = weather?.timezone;

  // 현재 시간 구하기
  const currentTimeMillis = Date.now() + timezoneOffsetSeconds * 1000;
  const currentTime = new Date(currentTimeMillis);
  // console.log("currrrrr", currentTime);

  return (
    <div className="weather-box">
      <h2>Forcast</h2>

      {/* weather-info */}
      <div className="weather-info">
        <div className="weather-temp">
          <span className="temp-main">{Math.trunc(weather?.main.temp)}°</span>
          <span className="temp-avg">
            <span>
              <FontAwesomeIcon className="icon up" icon={faArrowUp} />
              {Math.trunc(weather?.main.temp_max)}°
            </span>
            <span>
              <FontAwesomeIcon className="icon down" icon={faArrowDown} />
              {Math.trunc(weather?.main.temp_min)}°
            </span>
          </span>
        </div>
        <div className="weather-next"></div>
      </div>

      {/* weather-name */}
      <div className="weather-name">
        <div className="weather-location">
          <span>
            <FontAwesomeIcon className="icon" icon={faLocationDot} />
            {weather?.name}
          </span>
          <span className="date">{currentTime.toLocaleString()}</span>
        </div>
        <span className="weather-desc">
          <img src={iconUrl} className="weather-icon" alt="Weather Icon" />
          {weather?.weather[0].description}
        </span>
      </div>
    </div>
  );
};

export default WeatherBox;
