const getWeatherURL = () => {
  let API_KEY = "e04d5811cb452e53253fd27c4c26cb5f";
  let DAY_URL = "";

  const onGetPositionSuccess = (position) => {
    navigator.geolocation.getCurrentPosition((position) => {
      DAY_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${API_KEY}`;
      localStorage.setItem("DAY_URL", DAY_URL);
    });
  };

  const onGetPositionError = (error) => {
    console.log(error);
  };

  const location = window.navigator.geolocation.getCurrentPosition(
    onGetPositionSuccess,
    onGetPositionError
  );

  return URL;
};

export default getWeatherURL;
