const getWeatherURL = () => {
  let API_KEY = "e04d5811cb452e53253fd27c4c26cb5f";
  let CURRENT_CITY_URL = "";

  const onGetPositionSuccess = (position) => {
    navigator.geolocation.getCurrentPosition((position) => {
      CURRENT_CITY_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=${API_KEY}`;
      localStorage.setItem("CURRENT_CITY_URL", CURRENT_CITY_URL);
    });
  };
  onGetPositionSuccess();
};

export default getWeatherURL;
