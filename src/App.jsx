import "./App.scss";
import { useEffect, useState } from "react";
import WeatherBox from "./components/WeatherBox";
import WeatherButton from "./components/WeatherButton";
import WeatherDetail from "./components/WeatherDetail";
import ClipLoader from "react-spinners/ClipLoader";

function App() {
  const [weather, setWeather] = useState(null);
  const cities = ["Seoul", "Jeju", "Paris", "London"];
  const [city, setCity] = useState("");

  let API_KEY = {
    key: import.meta.env.VITE_WEATHER_KEY,
  };

  const [loading, setLoading] = useState(false);
  const [apiError, setAPIError] = useState("");

  /** 현재 위치 (위도, 경도) 받아오는 함수 */
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
    });
  };

  /** 현재 날씨 받아오는 함수 */
  const getWeatherByCurrentLocation = async (lat, lon) => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY.key}&units=metric`;
      setLoading(true);
      let response = await fetch(url);
      let data = await response.json();
      setWeather(data);
      setLoading(false);
    } catch (error) {
      setAPIError(error.message);
      setLoading(false);
    }
  };

  /** 도시별 날씨 받아오는 함수 */
  const getWeatherByCity = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY.key}&units=metric`;
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      setWeather(data);
      setLoading(false);
    } catch (error) {
      setAPIError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (city === "") {
      getCurrentLocation();
    } else {
      getWeatherByCity();
    }
  }, [city]);

  /** Current Location 버튼 클릭 함수 */
  const handleCityChange = (city) => {
    if (city === "current") {
      setCity("");
    } else {
      setCity(city);
    }
  };

  return (
    <div>
      {loading ? (
        <div className="container center">
          <ClipLoader
            color="#f88c6b"
            loading={loading}
            size={70}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : !apiError ? (
        <div className="container">
          <section>
            <WeatherDetail weather={weather} />
            <WeatherButton
              cities={cities}
              setCity={setCity}
              handleCityChange={handleCityChange}
              selectedCity={city}
            />
          </section>
          <section>
            <WeatherBox weather={weather} />
          </section>
        </div>
      ) : (
        apiError
      )}
    </div>
  );
}

export default App;
