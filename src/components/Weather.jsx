import "../styles/Weather.css";
import { FiSearch } from "react-icons/fi";
import cloudy from "../images/cloudy.png";
import misty from '../images/misty.png';
import rainy from '../images/rainy.png';
import snow from '../images/snow.png';
import sunny from '../images/sunny.png';
import { MdOutlineWaves } from "react-icons/md";
import { FaWind } from "react-icons/fa";
import { useState } from "react";

const Weather = () => {
  const API_KEY = "9f939a64d5e157faa014c84073b8a07d";

  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState(null);
  const [weatherImage, setWeatherImage] = useState(cloudy);
  
  
  const search = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`
      );


      if(!response.ok){
        throw new Error('Network response was not ok')
      }
      const data = await response.json();
      console.log(data);
      setWeatherData(data);

      const weatherCondition = data.weather[0].main;
      updateImage(weatherCondition);

    } catch (error) {
      console.error(error);
    }
  };


  const updateImage  = (condition) => {
    switch(condition) {
      case 'Clear':
        setWeatherImage(sunny);
        break;
      case 'Clouds':
        setWeatherImage(cloudy);
        break;
      case 'Misty':
        setWeatherImage(misty);
        break;
        case 'Haze':
          setWeatherImage(misty);
          break;
      case 'Fog':
        setWeatherImage(misty);
        break;
      case 'Rain':
        setWeatherImage(rainy);
        break;
        case 'Drizzle':
          setWeatherImage(rainy);
          break;
      case 'Snow':
        setWeatherImage(snow);
        break;
      default:
        setWeatherImage(cloudy);
        break;
    }
  }

  const handleSearch = (e) => {
    e.preventDefault();
    search();
  };


  return (
    <div className="weather">
      <div className="weather-box">
      <h1>Weather App </h1>
        <div className="search-bar">
          <input
            type="text"
            placeholder="search"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <i onClick={handleSearch}>
            <FiSearch />
          </i>
        </div>

        {weatherData && (
          <div className="weather-details">
            <img src={weatherImage} alt={cloudy} className="weather-icon" />
            <p className="temp">{weatherData.main.temp}°C</p>
            <p className="location">{weatherData.name}</p>
          </div>
        )}

        {weatherData && (
          <div className="weather-data">
            <div className="humid">
              <i>
                <MdOutlineWaves />
              </i>
              <p>{weatherData.main.humidity}%</p>
              <span>Humidity</span>
            </div>

            <div className="wind">
              <i>
                <FaWind />
              </i>
              <p>{weatherData.wind.speed} Km</p>
              <span>Wind</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;
