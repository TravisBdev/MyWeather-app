import "./App.css";
import Search from "./components/Search";
import CurrentWeather from "./components/CurrentWeather";

function App() {
  function handleChange(searchData) {
    console.log(searchData);
  }

  return (
    <div className="container">
      <Search onSearchChange={handleChange} />
      <CurrentWeather />
    </div>
  );
}

export default App;
