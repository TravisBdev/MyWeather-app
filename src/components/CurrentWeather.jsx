import "../current-weather.css";

export default function CurrentWeather({ data }) {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city-name">{data.city}</p>
          <p className="weather-description">({data.weather[0].description})</p>
        </div>
        <img
          src={`icons/${data.weather[0].icon}.png`}
          alt="weather"
          className="weather-icon"
        />
      </div>
      <div className="bottom">
        <p className="temp">{Math.round(data.main.temp)}°F</p>
        <div className="details">
          {/* <div className="param-row">
            <span className="param-label">Details</span>
          </div> */}
          <div className="param-row">
            <span className="param-label">Real Feel</span>
            <span className="param-value">
              {Math.round(data.main.feels_like)} °F
            </span>
          </div>
          <div className="param-row">
            <span className="param-label">Wind Speed</span>
            <span className="param-value">
              {Math.round(data.wind.speed)} mph
            </span>
          </div>
          <div className="param-row">
            <span className="param-label">Humidity</span>
            <span className="param-value">{data.main.humidity} %</span>
          </div>
          <div className="param-row">
            <span className="param-label">Barometer</span>
            <span className="param-value">{data.main.pressure} hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
}
