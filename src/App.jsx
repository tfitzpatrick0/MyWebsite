import "./App.css";
import Intro from "./Intro";
import Navbar from "./Navbar";

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
