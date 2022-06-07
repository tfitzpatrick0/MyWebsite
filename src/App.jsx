import "./App.css";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <Intro />
      </header>
    </div>
  );
}

export default App;
