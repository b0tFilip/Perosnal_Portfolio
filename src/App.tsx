import { useState } from "react";
import "./App.css";
import StartScreen from "./pages/StartScreen";
import Menu from "./pages/Menu";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <StartScreen />
    </div>
  );
}

export default App;
