import React, { useState } from "react";
import { ImSearch } from "react-icons/im";
import { toast } from "react-toastify";
import s from "./SearchBar.module.css";
import getWeatherURL from "../../core/utils/getWeatherURL";
import variables from "../../core/constants/variables";

const SearchBar = ({ setReload }) => {
  const [initualValue, setInitialValue] = useState();
  let CITY_URL = "";

  const handleInputChange = (e) => {
    // if (/[а-яё]+/i.test(e.currentTarget.value)) {
    //   toast.error("Only English.");
    //   e.currentTarget.value = "";
    // }
    setInitialValue(e.currentTarget.value.toLowerCase());

    CITY_URL = `https://api.openweathermap.org/data/2.5/weather?q=${e.currentTarget.value}&units=metric&appid=${variables.API_KEY}`;
    sessionStorage.setItem("CITY_URL", CITY_URL);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!initualValue) {
      toast.error("Please enter city name.");
      return;
    }
    setReload(true);
    setInitialValue("");
    getWeatherURL();
  };

  return (
    <section className={s.searchBar}>
      <form className={s.form} onSubmit={handleSubmit}>
        <button type="submit" className={s.button}>
          <span className={s.buttonLabel}>
            <ImSearch />
            Search
          </span>
        </button>
        <input
          className={s.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search weather in the city..."
          value={initualValue}
          onChange={handleInputChange}
        />
      </form>
    </section>
  );
};

export default SearchBar;
