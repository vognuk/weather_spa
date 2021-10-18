import React, { useState } from "react";
import { ImSearch } from "react-icons/im";
import { toast } from "react-toastify";
import s from "./SearchBar.module.css";
import getWeatherURL from "../../core/utils/getWeatherURL";

const SearchBar = () => {
  const [initialValue, setInitialValue] = useState("");

  const handleInputChange = (e) => {
    if (/[а-яё]+/i.test(e.currentTarget.value)) {
      toast.error("Only English.");
      e.currentTarget.value = "";
    }
    setInitialValue(e.currentTarget.value.toLowerCase());
    // localStorage.setItem("query", initialValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (initialValue.trim() === "") {
      toast.error("Please enter city name.");
      return;
    }

    localStorage.setItem("query", initialValue);
    getWeatherURL();
    setInitialValue("");
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
          placeholder="Search weather in city..."
          value={initialValue}
          onChange={handleInputChange}
        />
      </form>
    </section>
  );
};

export default SearchBar;
