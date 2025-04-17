
import React, { createContext, useContext } from "react";

// Create a minimal context that doesn't actually do anything
interface ThemeContextType {
  theme: "dark";
  toggleTheme: () => void;
  isDark: true;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  toggleTheme: () => {},
  isDark: true,
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  // Always use dark theme
  const value = {
    theme: "dark" as const,
    toggleTheme: () => {},
    isDark: true,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

// Custom hook to use the theme context
export const useTheme = () => {
  return useContext(ThemeContext);
};
