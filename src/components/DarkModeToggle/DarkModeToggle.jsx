import { useState, useEffect } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "remixicon/fonts/remixicon.css";
import "./Darkmode.css";

function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(
    () => localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
    localStorage.setItem("darkMode", isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <button onClick={toggleDarkMode} className="btn btn-secondary">
      {isDarkMode ? (
        <i
          className="bi bi-sun"
          style={{
            backgroundColor: "transparent",
          }}
        ></i> // Bootstrap Icons Sun for Light Mode
      ) : (
        <i className="bi bi-moon"></i> // Bootstrap Icons Moon for Dark Mode
      )}
    </button>
  );
}

export default DarkModeToggle;
