import "./App.css";
// import "./style.scss";
import WeatherWithFetch from "./components/WeatherBlock/WeatherBlock";

function App() {
  return (
    <div className="App">
      <header></header>
      <main>
        <WeatherWithFetch />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
