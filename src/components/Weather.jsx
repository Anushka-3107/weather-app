import '../styles/Weather.css';
import { FiSearch } from "react-icons/fi";
import cloudy from '../images/cloudy.png';
// import misty from '../images/misty.png';
// import rainy from '../images/rainy.png';
// import snow from '../images/snow.png';
// import sunny from '../images/sunny.png';
import { MdOutlineWaves } from "react-icons/md";
import { FaWind } from "react-icons/fa";

const Weather = () => {
  return (
    <div className='weather'>
    <div className='weather-box'>
      <div className='search-bar'>
      <input type='text' placeholder='search'/>
      <i><FiSearch /></i>
      </div>

      <div className='weather-details'>
          <img src={cloudy} alt={cloudy} className='weather-icon'/>
           <p className='temp'>16°C</p>
           <p className='location'>London</p>
      </div>

      <div className='weather-data'>
      <div className='humid'>
            <i><MdOutlineWaves /></i>
            <p>60%</p>
            <span>Humidity</span>
           </div>

           <div className='wind'>
            <i><FaWind /></i>
            <p>6.1 Km</p>
            <span>Wind</span>
           </div>
      </div>


     
    </div>
    </div>
    
  )
};

export default Weather


