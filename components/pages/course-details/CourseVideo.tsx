import { Maximize2, Minimize2 } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

function CourseVideo({
  isWideMode,
  toggleWideMode,
}: {
  isWideMode: boolean;
  toggleWideMode: () => void;
}) {
  const [showControls, setShowControls] = useState(false);
  const toggleShowControls = () => setShowControls(true);
  const videoElement = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleFullscreenChange = () => {
      const isCurrentlyFullscreen =
        document.fullscreenElement === videoElement.current;

      if (isCurrentlyFullscreen) {
        lockOrientation();
      } else {
        unlockOrientation();
      }
    };

    const lockOrientation = async () => {
      try {
        if (!screen?.orientation) {
          return;
        }

        const orientation = screen.orientation as any;

        if (typeof orientation.lock !== "function") {
          return;
        }

        await orientation.lock("landscape-primary");
      } catch (error) {
        if (error instanceof Error) {
          if (error.name === "NotSupportedError") {
          } else if (error.name === "SecurityError") {
          } else {
            console.log("Failed to lock screen orientation:", error.message);
          }
        }
      }
    };

    const unlockOrientation = () => {
      try {
        if (screen?.orientation) {
          const orientation = screen.orientation as any;
          if (typeof orientation.unlock === "function") {
            orientation.unlock();
          }
        }
      } catch (error) {
        console.warn("Failed to unlock screen orientation:", error);
      }
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  return (
    <section className="  max-lg:flex-center p-2 lg:p-4  top-0 z-20 ">
      <div className="relative ">
        <video
          ref={videoElement}
          controls={showControls}
          onClick={toggleShowControls}
          className={`w-[424px] h-[306px] lg:w-[799px] lg:h-[500px]  bg-gray-50 cursor-pointer object-contain rounded-lg 
          ${isWideMode ? "animate-full-width" : ""}`}
          poster="/poster.png"
        >
          <source src="/video-sample.mp4" />
        </video>

        <button
          onClick={toggleWideMode}
          className="hidden lg:flex absolute top-4 right-4 bg-black/70 hover:bg-black/90 text-white p-2 rounded-lg transition-colors items-center gap-2"
        >
          {isWideMode ? (
            <>
              <Minimize2 size={20} />
              <span>Normal</span>
            </>
          ) : (
            <>
              <Maximize2 size={20} />
              <span>Wide</span>
            </>
          )}
        </button>
      </div>
    </section>
  );
}

export default CourseVideo;
