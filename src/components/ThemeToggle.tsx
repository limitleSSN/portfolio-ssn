
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Check if user has a theme preference in localStorage
    const storedTheme = localStorage.getItem("theme");
    
    if (storedTheme) {
      // Apply stored theme preference
      setIsDarkMode(storedTheme === "dark");
      document.documentElement.classList.toggle("dark", storedTheme === "dark");
    } else {
      // Default to dark mode if no preference is stored
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  }, []);

  const toggleTheme = () => {
    const newThemeMode = !isDarkMode;
    
    // Toggle dark class on html element
    document.documentElement.classList.toggle("dark", newThemeMode);
    
    // Save preference to localStorage
    localStorage.setItem("theme", newThemeMode ? "dark" : "light");
    
    // Update state
    setIsDarkMode(newThemeMode);
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full transition-colors duration-200 bg-gray-800 hover:bg-gray-700 focus:outline-none"
      aria-label="Toggle theme"
    >
      {isDarkMode ? (
        <Sun className="h-5 w-5 text-kunalblue" />
      ) : (
        <Moon className="h-5 w-5 text-kunalpink" />
      )}
    </button>
  );
};

export default ThemeToggle;
