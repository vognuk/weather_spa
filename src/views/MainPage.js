import React from "react";
import WeatherBlock from "../components/WeatherBlock/WeatherBlock";
import withFetch from "../hoc/withFetch";

const MainPage = () => {
  const WeatherWithFetch = withFetch(
    WeatherBlock,
    localStorage.getItem("CITY_URL")
  );

  const CityWeatherWithFetch = withFetch(
    WeatherBlock,
    localStorage.getItem("CURRENT_CITY_URL")
  );

  return (
    <>
      <WeatherWithFetch />
      <CityWeatherWithFetch />
    </>
  );
};

export default MainPage;
