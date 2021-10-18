/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

import initialWeatherData from "../core/store/initialWeatherData";

const withFetch = (WrappedInHOCComponent, requestUrl) => {
  return (props) => {
    const [data, setData] = useState(initialWeatherData);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const notify = () =>
      toast.error("Somesing wrong. Try again.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

    useEffect(async () => {
      try {
        const result = await axios(requestUrl);
        setData(result.data);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        console.log(String(error));
        notify();
      }
    }, [requestUrl]);

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
