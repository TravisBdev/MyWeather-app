import "../current-weather.css";

export default function CurrentWeather() {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city-name">Los Angeles</p>
          <p className="weather-description">Foggy</p>
        </div>
        <img src="icons/01d.png" alt="weather" className="weather-icon" />
      </div>
      <div className="bottom">
        <p className="temp">65°F</p>
        <div className="details">
          <div className="param-row">
            <span className="param-label">Details</span>
          </div>
          <div className="param-row">
            <span className="param-label">Real Feel</span>
            <span className="param-value">75°F</span>
          </div>
        </div>
      </div>
    </div>
  );
}
