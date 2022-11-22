import { useState } from "react";
import { fetchCityWeather } from "./api/fetchApi";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [cityWeather, setCityWeather] = useState({});
  const [cityData, setCityData] = useState(null);
  const getWeather = async (e) => {
    if (e.key === "Enter") {
      const data = await fetchCityWeather(city);
      console.log(data);
      setCityData(data);
      setCityWeather(data.weather[0]);
      setCity("");
    }
  };
  return (
    <div className="main-container">
        <h1 className="title">behvar-weather-app</h1>
      <input
        className="search"
        placeholder="search the city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={getWeather}
      ></input>
      {cityData && (
        <div className="city">
        
          <h2 className="city-name">
            <span>{cityData.name}</span>
            <sup>{cityData.sys.country}</sup>
          </h2>
          <div className="city-temp">
            {Math.round(cityData.main.temp)}
            <sup>&deg;C</sup>
          </div>
          <div className="info">
            <img
              className="city-icon"
              src={`https://openweathermap.org/img/wn/${cityWeather.icon}@2x.png`}
              alt={cityWeather.description}
            />
            <p>{cityWeather.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
