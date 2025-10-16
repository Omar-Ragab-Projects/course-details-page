"use client";
import React, { ComponentRef, useEffect, useRef } from "react";

type ProgressBarProps = {
  percent: number;
  color?: string;
  className?: string;
};

function ProgressBar({
  percent,
  color = "#6abd8a",
  className = "",
}: ProgressBarProps) {
  const progressRef = useRef<ComponentRef<"span">>(null);
  const progressTipRef = useRef<ComponentRef<"div">>(null);

  useEffect(() => {
    const smallScreen = window.screen.availWidth <= 1024;
    const progressElement = progressRef.current;
    const progressTipElement = progressTipRef.current;
    if (!progressElement || !progressTipElement) return;

    if (smallScreen) {
      const windowScrollHandle = (e: Event) => {
        const delayBeforeProgressPlays = 150;
        const targetElementTop = progressElement.getBoundingClientRect().top;
        const progressCanPlay =
          window.innerHeight >= targetElementTop + delayBeforeProgressPlays;

        if (progressCanPlay) {
          progressElement.style.width = `${percent}%`;
          progressTipElement.style.opacity = "100";
          window.removeEventListener("scroll", windowScrollHandle);
        }
      };

      window.addEventListener("scroll", windowScrollHandle);
      return () => window.removeEventListener("scroll", windowScrollHandle);
    } else {
      progressElement.style.width = `${percent}%`;
      progressTipElement.style.opacity = "100";
    }
  }, []);

  return (
    <div
      className={`relative w-full h-[5px] rounded-full bg-[#E6E6E6] ${className}`}
    >
      <span
        ref={progressRef}
        className={`absolute h-full w-0 rounded-full transition-all duration-1000`}
        style={{
          backgroundColor: color,
        }}
      ></span>

      <div
        ref={progressTipRef}
        data-percent={`${percent}%`}
        className={`your-progress-tip transition-all duration-1000 `}
        style={{
          left: `calc(${percent}% - 1rem)`,
          opacity: 0,
        }}
      >
        <span>You</span>
      </div>
    </div>
  );
}

export default ProgressBar;
