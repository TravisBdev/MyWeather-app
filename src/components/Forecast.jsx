import "../forecast.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export default function Forecast({ data }) {
  const dayOfWeek = new Date().getDay();
  const dailyForecast = WEEK_DAYS.slice(dayOfWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayOfWeek)
  );

  return (
    <>
      <label className="title">Daily</label>
      <Accordion allowZeroExpanded>
        {data.list.slice(0, 7).map((item, index) => (
          <AccordionItem key={index}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-forecast">
                  <img
                    src={`icons/${item.weather[0].icon}.png`}
                    alt="weather forecast"
                    className="small-icon"
                  />
                  <label className="day">{dailyForecast[index]}</label>
                  <label className="daily-description">
                    {item.weather[0].description}
                  </label>
                  <label className="minMax-temp">
                    {Math.round(item.main.temp_min)} °F /{" "}
                    {Math.round(item.main.temp_max)} °F
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="details-grid">
                <div className="daily-grid-item">
                  <label>Pressure</label>
                  <label>{item.main.pressure} hPa</label>
                </div>
                <div className="daily-grid-item">
                  <label>Humidity</label>
                  <label>{item.main.humidity} %</label>
                </div>
                <div className="daily-grid-item">
                  <label>Clouds</label>
                  <label>{item.clouds.all} %</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
}
