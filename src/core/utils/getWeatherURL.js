import variables from "../constants/variables";

const getWeatherURL = () => {
  let CURRENT_CITY_URL = "";

  const onGetPositionSuccess = (position) => {
    navigator.geolocation.getCurrentPosition((position) => {
      CURRENT_CITY_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=${variables.API_KEY}`;
      sessionStorage.setItem("CURRENT_CITY_URL", CURRENT_CITY_URL);
    });
  };
  onGetPositionSuccess();
};

export default getWeatherURL;
