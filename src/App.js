import "./App.css";
// import "./style.scss";
import MainPage from "./views/MainPage";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  return (
    <div className="App">
      <header>
        <SearchBar />
      </header>
      <main>
        <MainPage />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
