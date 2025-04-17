
import React, { useState } from "react";
import { cn } from "@/lib/utils";

type ToggleProps = {
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  color?: "pink" | "blue" | "default";
  disabled?: boolean;
};

const CustomToggle = ({
  defaultChecked = false,
  onChange,
  label,
  className,
  size = "md",
  color = "default",
  disabled = false,
}: ToggleProps) => {
  const [isChecked, setIsChecked] = useState(defaultChecked);

  const handleToggle = () => {
    if (disabled) return;
    
    const newValue = !isChecked;
    setIsChecked(newValue);
    onChange?.(newValue);
  };

  const sizes = {
    sm: "w-8 h-4",
    md: "w-12 h-6",
    lg: "w-16 h-8",
  };

  const sliderSizes = {
    sm: "w-3 h-3",
    md: "w-4 h-4",
    lg: "w-6 h-6",
  };

  const sliderTransforms = {
    sm: "translate-x-4",
    md: "translate-x-6",
    lg: "translate-x-8",
  };

  const colors = {
    default: "bg-gray-700 active:bg-kunalblue",
    pink: "bg-gray-700 active:bg-kunalpink",
    blue: "bg-gray-700 active:bg-kunalblue",
  };

  return (
    <div className={cn("flex items-center", className)}>
      <button
        type="button"
        onClick={handleToggle}
        className={cn(
          "relative rounded-full flex items-center px-1 cursor-pointer transition-colors duration-300",
          colors[color],
          sizes[size],
          isChecked && (color === "pink" ? "bg-kunalpink" : 
                        color === "blue" ? "bg-kunalblue" : 
                        "bg-kunalblue"),
          disabled && "opacity-50 cursor-not-allowed"
        )}
        disabled={disabled}
        aria-pressed={isChecked}
      >
        <span
          className={cn(
            "absolute rounded-full bg-white transition-transform duration-300 transform",
            sliderSizes[size],
            isChecked ? sliderTransforms[size] : "translate-x-0"
          )}
        />
      </button>
      {label && (
        <span className="ml-3 text-sm text-gray-300">{label}</span>
      )}
    </div>
  );
};

export default CustomToggle;
