
import {  useState } from "react";
import { fetchCityWeather } from "./api/fetchApi";
import "./App.css";
import Loading from "./components/renderLoader";
function App() {
  const [city, setCity] = useState("");
  const [cityWeather, setCityWeather] = useState(null);
  const [cityData, setCityData] = useState(null);
  const [notFoundCity, setNotFoundCity] = useState(false);
const [warning, setWarning] = useState("");
const [loading, setLoading] = useState(false);;
  const getAndSetData=async ()=>{
if (!city) {
setWarning("نام شهر را وارد کن");
setCityData(null); 
}else{
  setLoading(true);
  setLoading(true);
  const data = await fetchCityWeather(city);
  if (data.cod==="404" || data===undefined||!data) {
    console.log("داده وجود ندتره");
    setNotFoundCity(true)
  }else{
    setCityData(data);    
    setCityWeather(data.weather[0]);
    setNotFoundCity(false);
  }
  setCity("");
  setWarning("");
  setLoading(false);
  setLoading(false);
}

  }
  const getWeather = async (e) => {
    if (e.key === "Enter") {
        getAndSetData()
    }
  };
  const getWeatherFun= ()=>{
    getAndSetData()
  }
  return (
    <div className="main-container">
   <div className="search_Wrapper">
      <h1 className="title">beh-var-weather-app</h1>
        <input
        className="search"
        placeholder="نام شهر..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={getWeather}
      ></input>
    
      <button 
      className="submit_button"
      type="submit"
      onClick={getWeatherFun}
      >Go</button>
</div>
{warning&&<h1 className="warning">{warning}</h1>}
      {notFoundCity ? <div className="city">
        <h3>شهر مورد نظر پیدا نشد.</h3>
        </div>:<>
    
            <div className="city">
       {loading?<Loading size={100}/>:<>{cityData && <div>
       <>
       <h2 className="city-name">
       <span>{cityData.name}</span>
       <sup>{cityData?.sys?.country}</sup>
     </h2>
     <div className="city-temp">
       {Math.round(cityData.main?.temp)}
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
    </>
        </div>}</>}
            </div>
   
        </>
       
        }
    
    </div>
  );
}

export default App;
