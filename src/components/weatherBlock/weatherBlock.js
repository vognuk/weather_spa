import React from "react";
import s from "./WeatherBlock.css";
import classNames from "classnames/bind";
import getWeatherURL from "../../core/utils/getWeatherURL";
import withFetch from "../../hoc/withFetch";
import sun from "../../assets/images/weather128/sun.png";

let cx = classNames.bind(s);

const WeatherBlock = ({ data }) => {
  getWeatherURL();
  localStorage.setItem("city_name", data.name);

  let className = cx({
    container: true,
    containerTen: data.main.temp >= 10,
    containerMinusTen: data.main.temp <= -10,
    containerPlusThirteen: data.main.temp >= 30,
  });

  console.log(typeof data.main.temp);
  return (
    <>
      <div className={className}>
        <h1>Weather</h1>
        <img src={sun} alt="Sun"></img>
        <p>{String(Math.round(data.main?.temp || 0))}</p>
        <p>in {String(data?.name || "")}</p>
      </div>
    </>
  );
};

const WeatherWithFetch = withFetch(
  WeatherBlock,
  localStorage.getItem("DAY_URL")
);

export default WeatherWithFetch;
