/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import axios from "axios";
import initialWeatherData from "../core/store/initialWeatherData";

const withFetch = (WrappedInHOCComponent, requestUrl) => {
  return (props) => {
    const [data, setData] = useState(initialWeatherData);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(async () => {
      try {
        const result = await axios(requestUrl);
        setData(result.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsError(true);
      }
    }, [requestUrl]);

    // window.addEventListener("storage", () => {});

    return (
      <WrappedInHOCComponent
        data={data}
        isLoading={isLoading}
        isError={isError}
        {...props}
        getData={(requestUrl) => axios(requestUrl)}
      />
    );
  };
};

export default withFetch;
