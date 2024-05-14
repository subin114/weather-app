/* eslint-disable react/prop-types */
import "./WeatherButton.scss";

const WeatherButton = ({ cities, setCity, selectedCity, handleCityChange }) => {
  return (
    <div className="weather-button">
      <h2>Locations</h2>
      <button
        className={selectedCity === "" ? "active" : "remove"}
        onClick={() => handleCityChange("current")}
      >
        Current Location
      </button>

      {cities.map((city, idx) => (
        <button
          className={selectedCity === city ? "active" : "remove"}
          key={idx}
          onClick={() => setCity(city)}
        >
          {city}
        </button>
      ))}
    </div>
  );
};

export default WeatherButton;
