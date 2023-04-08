import "./StartScreem.css";
import { useState, useEffect } from "react";

function StartScreen() {
  const originalText: string = "$  start -web My_Portfolio.exe";
  const [text, setText] = useState("");

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      if (index >= originalText.length) {
        clearInterval(intervalId);
        const pulsingIntervalId = setInterval(() => {
          setText((prevText) =>
            prevText.endsWith("_") ? prevText.slice(0, -1) : prevText + "_"
          );
        }, 500);
        return () => clearInterval(pulsingIntervalId);
      } else {
        setText((prevText) => prevText + originalText.charAt(index));
        index++;
      }
    }, 250);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="LoadingScreenContainer">
        <p className="text">{text}</p>
      </div>
      <div className="MessageContainer">Press ENTER to continue</div>
    </>
  );
}

export default StartScreen;
