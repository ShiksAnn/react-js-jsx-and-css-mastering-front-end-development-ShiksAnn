import { useContext, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Sun, Moon } from "lucide-react"; // icons (install via: npm i lucide-react)

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  // Apply the theme to <html> for Tailwind darkMode:'class'
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle flex items-center justify-center w-10 h-10"
      title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? (
        <Moon className="text-gray-800 w-5 h-5" />
      ) : (
        <Sun className="text-yellow-400 w-5 h-5" />
      )}
    </button>
  );
};

export default ThemeToggle;

