/* eslint-disable react/prop-types */
import "./WeatherButton.scss";

const WeatherButton = ({ cities, setCity }) => {
  console.log("cities??", cities);

  return (
    <div className="weather-button">
      <h2>Locations</h2>
      <button>Current Location</button>

      {cities.map((item, idx) => (
        <button key={idx} onClick={() => setCity(item)}>
          {item}
        </button>
      ))}
    </div>
  );
};

export default WeatherButton;
