/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import axios from "axios";

const withFetch = (WrappedInHOCComponent, requestUrl) => {
  return (props) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(async () => {
      // fetchData(requestUrl);
      try {
        const result = await axios(requestUrl);
        setData(result.data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
      }
    }, []);

    // const fetchData = (requestUrl) => {
    //   setIsLoading(true);
    //   setIsError(false);
    //   const myHeaders = new Headers({});
    //   myHeaders.append("Content-Type", "application/json");
    //   myHeaders.append("access-control-allow-origin", "http://localhost:3000/");

    //   const requestOptions = {
    //     method: "GET",
    //     headers: myHeaders,
    //     redirect: "follow",
    //     Origin: "http://localhost:3000/",
    //   };

    //   console.log("requestUrl", typeof requestUrl);

    //   try {
    //     fetch(requestUrl, requestOptions)
    //       .then((response) => response.json())
    //       .then((result) => {
    //         setData(result);
    //         setIsLoading(false);
    //       })
    //       .catch((error) => console.log("error", error));
    //     // setIsLoading(false);
    //   } catch (err) {
    //     setIsLoading(false);
    //     setIsError(true);
    //   }
    // };

    return (
      <WrappedInHOCComponent
        data={data}
        isLoading={isLoading}
        isError={isError}
        {...props}
        // getData={(requestUrl) => fetchData(requestUrl)}
      />
    );
  };
};

export default withFetch;
