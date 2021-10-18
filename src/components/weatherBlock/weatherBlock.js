import React, { useState, useEffect } from "react";
import s from "./WeatherBlock.css";
import classNames from "classnames/bind";
import getWeatherURL from "../../core/utils/getWeatherURL";
import withFetch from "../../hoc/withFetch";
import { RangeStepInput } from "react-range-step-input";
import forceNumber from "force-number";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const WeatherBlock = ({ data }) => {
  getWeatherURL();
  localStorage.setItem("current_city_name", data.name);
  const [temp, setTemp] = useState(data.main?.temp);
  const [iconAlt, setIconAlt] = useState(data.weather?.description);
  const [icon, setIcon] = useState(data.weather[0]?.icon);
  let date = new Date().toLocaleDateString("ua-UA");
  let time = new Date().toLocaleTimeString("ua-UA");

  useEffect(() => {
    setTemp(data.main?.temp);
    setIconAlt(data.weather?.description);
    setIcon(data.weather[0]?.icon);
    // window.addEventListener("storage", () => {});
  }, [data]);

  //Show warning after changing temperature value by slider.
  const notify = () =>
    toast.warn("Temperature value is false! Please reload page.", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  //Multiclass switch by https://www.npmjs.com/package/classnames for temperature color switcher.
  let cx = classNames.bind(s);
  let className = cx({
    wraper: true,
    minusTen: temp <= 10,
    ten: temp >= 10,
    plusThirteen: temp >= 30,
  });

  //Handling of slider move.
  const onChange = (e) => {
    const newTemp = forceNumber(e.target.value);
    setTemp(newTemp);
    notify();
  };

  return (
    <section className={s.container}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
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
        onClick={notify}
      />
    </section>
  );
};

const WeatherWithFetch = withFetch(
  WeatherBlock,
  localStorage.getItem("DAY_URL")
);

export default WeatherWithFetch;
