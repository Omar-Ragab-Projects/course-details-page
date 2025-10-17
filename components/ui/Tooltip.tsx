"use client";
import React from "react";

function Tooltip({
  children,
  message,
  className = "",
  onClick,
}: {
  children: React.ReactNode;
  message: string;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <div onClick={onClick} className={`relative group z-30 ${className}`}>
      {children}
      <span className="absolute min-w-max bottom-[calc(100%+0.25rem)] px-2 py-1 rounded-lg bg-black/85 text-white shadow-md hidden group-hover:block">
        {message}
      </span>
    </div>
  );
}

export default Tooltip;
