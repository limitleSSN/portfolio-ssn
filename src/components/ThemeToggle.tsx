
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Switch } from "@/components/ui/switch";
import { motion } from "framer-motion";

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
    <motion.div 
      className="flex items-center space-x-2"
      whileHover={{ scale: 1.05 }}
    >
      <motion.div
        animate={{ 
          scale: isDarkMode ? 0.8 : 1.2,
          opacity: isDarkMode ? 0.5 : 1
        }}
      >
        <Sun className={`h-4 w-4 ${isDarkMode ? 'text-gray-400' : 'text-kunalpink'}`} />
      </motion.div>
      
      <Switch
        checked={isDarkMode}
        onCheckedChange={toggleTheme}
        aria-label="Toggle theme"
      />
      
      <motion.div
        animate={{ 
          scale: isDarkMode ? 1.2 : 0.8,
          opacity: isDarkMode ? 1 : 0.5
        }}
      >
        <Moon className={`h-4 w-4 ${isDarkMode ? 'text-kunalblue' : 'text-gray-400'}`} />
      </motion.div>
    </motion.div>
  );
};

export default ThemeToggle;
