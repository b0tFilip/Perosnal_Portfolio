import { useState } from "react";
import "./App.css";
import StartScreen from "./components/StartScreen";
import Menu from "./components/Menu";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <StartScreen />
    </div>
  );
}

export default App;
