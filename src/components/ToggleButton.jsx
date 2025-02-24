import { useState, useEffect } from "react";
import "../styles/ToggleButton.css";

function ToggleButton() {
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    if (isLightMode) {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    } else {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    }
  }, [isLightMode]);

  const toggleMode = () => {
    setIsLightMode((prev) => !prev);
  };

  return (
    <div id="switch" onClick={toggleMode}>
      <button></button>
    </div>
  );
}

export default ToggleButton;
