import React, { useState, useEffect } from "react";
import s from "./WeatherBlock.css";
import classNames from "classnames/bind";
import getWeatherURL from "../../core/utils/getWeatherURL";
import withFetch from "../../hoc/withFetch";
import { RangeStepInput } from "react-range-step-input";
import forceNumber from "force-number";

import sun from "../../assets/images/weather128/sun.png";

const WeatherBlock = ({ data }) => {
  getWeatherURL();
  // localStorage.setItem("city_name", data.name);
  const [temp, setTemp] = useState(data.main?.temp);
  const [iconAlt, setIconAlt] = useState(data.weather?.description);
  const [icon, setIcon] = useState(data.weather[0]?.icon);
  const [unixTime, setUnixTime] = useState(data?.dt);

  //multiclass switch by https://www.npmjs.com/package/classnames
  let cx = classNames.bind(s);
  let className = cx({
    wraper: true,
    minusTen: temp <= 10,
    ten: temp >= 10,
    plusThirteen: temp >= 30,
  });

  useEffect(() => {
    setTemp(data.main?.temp);
    setIconAlt(data.weather?.description);
    setIcon(data.weather[0]?.icon);
    setUnixTime(data?.dt);
  }, [data]);

  const onChange = (e) => {
    const newTemp = forceNumber(e.target.value);
    setTemp(newTemp);
  };

  let date = new Date().toLocaleDateString("ua-UA");
  let time = new Date().toLocaleTimeString("ua-UA");

  return (
    <section className={s.container}>
      <div className={className}>
        <h2>Weather</h2>
        <span>{date}</span>
        <span>{time}</span>
        <img
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={iconAlt}
        ></img>
        <h1>{String(Math.round(temp))} &deg;</h1>
        <h3>in {String(data?.name || "")}</h3>
      </div>
      <RangeStepInput
        className={s.slider}
        min={-30}
        max={40}
        value={temp}
        step={1}
        onChange={onChange}
      />
    </section>
  );
};

const WeatherWithFetch = withFetch(
  WeatherBlock,
  localStorage.getItem("DAY_URL")
);

export default WeatherWithFetch;
