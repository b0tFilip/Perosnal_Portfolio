import { useState } from "react";
import "./App.css";
import StartScreem from "./components/StartScreem";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <StartScreem />
    </div>
  );
}

export default App;
