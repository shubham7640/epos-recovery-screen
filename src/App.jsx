import "./App.css";
import SearchBar from "./components/SearchBar";
import RecoveryList from "./components/RecoveryList";
import Header from "./components/Header";

function App() {
  return (
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <SearchBar />
      <RecoveryList />
    </div>
  );
}

export default App;
