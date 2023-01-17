import "./App.css";
import Search from "./components/Search";

function App() {
  function handleChange(searchData) {
    console.log(searchData);
  }

  return (
    <div className="container">
      <Search onSearchChange={handleChange} />
    </div>
  );
}

export default App;
