const initialWeatherData = {
  coord: {
    lon: 30.9494,
    lat: 49.9188,
  },
  weather: [
    {
      id: 801,
      main: "Clouds",
      description: "few clouds",
      icon: "02d",
    },
  ],
  base: "stations",
  main: {
    temp: 0,
    feels_like: 10.28,
    temp_min: 10.68,
    temp_max: 11.78,
    pressure: 1020,
    humidity: 56,
    sea_level: 1020,
    grnd_level: 1001,
  },
  visibility: 10000,
  wind: {
    speed: 3.16,
    deg: 320,
    gust: 3.73,
  },
  clouds: {
    all: 15,
  },
  dt: 1634461275,
  sys: {
    type: 2,
    id: 2034980,
    country: "UA",
    sunrise: 1634444454,
    sunset: 1634482911,
  },
  timezone: 10800,
  id: 694992,
  name: "City",
  cod: 200,
};

export default initialWeatherData;
