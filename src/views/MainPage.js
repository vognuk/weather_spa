import React, { Suspense } from "react";
import WeatherBlock from "../components/WeatherBlock/WeatherBlock";
import withFetch from "../hoc/withFetch";
import Preloader from "../components/Preloader/Preloader";

const MainPage = () => {
  const WeatherWithFetch = withFetch(
    "Search result for",
    WeatherBlock,
    sessionStorage.getItem("CITY_URL")
  );

  const CityWeatherWithFetch = withFetch(
    "Current city weather in",
    WeatherBlock,
    sessionStorage.getItem("CURRENT_CITY_URL")
  );

  return (
    <>
      <CityWeatherWithFetch />
      <Suspense fallback={<Preloader />}>
        <WeatherWithFetch />
      </Suspense>
    </>
  );
};

export default MainPage;
