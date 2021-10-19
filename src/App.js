import React, { useState, useEffect } from "react";
import "./App.css";
import MainPage from "./views/MainPage";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  const [reload, setReload] = useState();
  const [initialValue, setInitialValue] = useState();

  useEffect(() => {
    setReload(false);
  }, [reload]);

  // window.addEventListener("load", (e) => {});

  return (
    <div className="App">
      <header>
        <SearchBar
          setReload={setReload}
          setInitialValue={setInitialValue}
          initialValue={initialValue}
        />
      </header>
      <main>
        <MainPage />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
