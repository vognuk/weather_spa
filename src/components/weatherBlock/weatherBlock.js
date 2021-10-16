import React from "react";
import getWeatherURL from "../../core/utils/getWeatherURL";
import withFetch from "../../hoc/withFetch";

const WeatherBlock = ({ data }) => {
  getWeatherURL();
  localStorage.setItem("city_name", data.name);
  return (
    <>
      <p>{String(data.name)}</p>
    </>
  );
};

const WeatherWithFetch = withFetch(
  WeatherBlock,
  localStorage.getItem("DAY_URL")
);

export default WeatherWithFetch;
