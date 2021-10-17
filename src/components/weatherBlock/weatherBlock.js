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

  //multiclass switch by https://www.npmjs.com/package/classnames
  let cx = classNames.bind(s);
  let className = cx({
    container: true,
    containerTen: data.main.temp >= 10,
    containerMinusTen: data.main.temp <= -10,
    containerPlusThirteen: data.main.temp >= 30,
  });

  useEffect(() => {
    setTemp(data.main?.temp);
  }, [data]);

  const onChange = (e) => {
    const newTemp = forceNumber(e.target.value);
    setTemp(newTemp);
  };

  return (
    <section>
      <div className={className}>
        <h1>Weather</h1>
        <img src={sun} alt="Sun"></img>
        <p>{String(Math.round(temp))}</p>
        <p>in {String(data?.name || "")}</p>
      </div>
      <RangeStepInput
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
