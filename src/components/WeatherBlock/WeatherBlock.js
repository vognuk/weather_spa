import React, { useState, useEffect } from "react";
import s from "./WeatherBlock.css";
import classNames from "classnames/bind";
import getWeatherURL from "../../core/utils/getWeatherURL";
import { RangeStepInput } from "react-range-step-input";
import forceNumber from "force-number";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const WeatherBlock = ({ data, heading }) => {
  sessionStorage.setItem("current_city_name", data.name);
  const [temp, setTemp] = useState(data.main?.temp);
  const [iconAlt, setIconAlt] = useState(data.weather?.description);
  const [icon, setIcon] = useState(data.weather[0]?.icon);

  useEffect(() => {
    setTemp(data.main?.temp);
    setIconAlt(data.weather?.description);
    setIcon(data.weather[0]?.icon);
  }, [data]);

  //Show warning after changing temperature value by slider.
  const notifyTempCangeForced = () =>
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
    hide: data.name === "City",
    wraper: true,
    minusTen: temp <= 10,
    ten: temp >= 10,
    plusThirteen: temp >= 30,
  });

  //Handling of slider move.
  const onChange = (e) => {
    const newTemp = forceNumber(e.target.value);
    setTemp(newTemp);
    notifyTempCangeForced();
  };

  getWeatherURL();

  return (
    <>
      {
        (heading =
          data.name === "City" ? (
            <>
              {sessionStorage.getItem("CITY_URL") && (
                <p className={s.failedResult}>
                  no results or city name is not correct
                </p>
              )}
            </>
          ) : (
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
                <h2>{heading}</h2>
                <h2> {String(data?.name || "")}</h2>
                <img
                  src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                  alt={iconAlt}
                ></img>
                <h1>{String(Math.round(temp))} &deg;</h1>

                {heading === "Current city weather in" && (
                  <RangeStepInput
                    className={s.slider}
                    min={-30}
                    max={40}
                    value={temp}
                    step={1}
                    onChange={onChange}
                  />
                )}
              </div>
            </section>
          ))
      }
    </>
  );
};

export default WeatherBlock;
