
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

type ToggleProps = {
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  color?: "pink" | "blue" | "default";
  disabled?: boolean;
  icon?: React.ReactNode;
  labelPosition?: "left" | "right";
};

const CustomToggle = ({
  defaultChecked = false,
  onChange,
  label,
  className,
  size = "md",
  color = "default",
  disabled = false,
  icon,
  labelPosition = "right",
}: ToggleProps) => {
  const [isChecked, setIsChecked] = useState(defaultChecked);

  useEffect(() => {
    setIsChecked(defaultChecked);
  }, [defaultChecked]);

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
    default: "bg-gray-700 active:bg-ssnblue",
    pink: "bg-gray-700 active:bg-ssnpink",
    blue: "bg-gray-700 active:bg-ssnblue",
  };

  return (
    <div className={cn("flex items-center", className, labelPosition === "left" ? "flex-row-reverse" : "flex-row")}>
      {label && (
        <span className={cn("text-sm text-gray-300", labelPosition === "left" ? "mr-3" : "ml-3")}>{label}</span>
      )}
      <button
        type="button"
        onClick={handleToggle}
        className={cn(
          "relative rounded-full flex items-center px-1 cursor-pointer transition-colors duration-300",
          colors[color],
          sizes[size],
          isChecked && (color === "pink" ? "bg-ssnpink" : 
                        color === "blue" ? "bg-ssnblue" : 
                        "bg-ssnblue"),
          disabled && "opacity-50 cursor-not-allowed"
        )}
        disabled={disabled}
        aria-pressed={isChecked}
      >
        <span
          className={cn(
            "absolute rounded-full bg-white transition-transform duration-300 transform flex items-center justify-center",
            sliderSizes[size],
            isChecked ? sliderTransforms[size] : "translate-x-0"
          )}
        >
          {icon && <span className="text-xs">{icon}</span>}
        </span>
      </button>
    </div>
  );
};

export default CustomToggle;
