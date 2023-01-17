import "../current-weather.css";

export default function CurrentWeather() {
  return (
    <div className="weather">
      <div className="top">
        <p className="city-name">Los Angeles</p>
        <p className="weather-description">Foggy</p>
      </div>
      <img src="icons/01d.png" alt="weather" className="weather-icon" />
    </div>
  );
}
