
import React from "react";
import { useTheme } from "@/contexts/ThemeContext";
import CustomToggle from "@/components/ui/custom-toggle";
import { Moon, Sun } from "lucide-react";

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ className, showLabel = false }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <CustomToggle
      defaultChecked={isDark}
      onChange={toggleTheme}
      color="blue"
      label={showLabel ? (isDark ? "Dark Mode" : "Light Mode") : undefined}
      className={className}
      icon={isDark ? <Moon size={10} /> : <Sun size={10} />}
    />
  );
};

export default ThemeToggle;
