import React from "react";

interface BadgeProps {
  text: string;
  className?: string;
}

const Badge = ({ text, className = "" }: BadgeProps) => {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-600 text-gray-100 ${className}`}
    >
      {text}
    </span>
  );
};

export default Badge;
