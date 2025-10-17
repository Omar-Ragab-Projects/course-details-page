import { Maximize2, Minimize2 } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

function CourseVideo() {
  const [showControls, setShowControls] = useState(false);
  const toggleShowControls = () => setShowControls(true);
  const [isWideMode, setIsWideMode] = useState(false);
  const videoElement = useRef<HTMLVideoElement>(null);

  const toggleWideMode = () => {
    setIsWideMode(!isWideMode);
  };

  // useEffect(() => {
  //   const videoSectionElement = document.querySelector(".video-section");
  //   const courseParentElement = document.querySelector(".course-parent");
  //   const leftDetailsElement = document.querySelector(
  //     ".left-side-course-details"
  //   );

  //   if (isWideMode) courseParentElement?.appendChild(videoSectionElement);
  // }, [isWideMode]);

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
          console.log("Screen Orientation API not supported on this device");
          return;
        }

        const orientation = screen.orientation as any;

        if (typeof orientation.lock !== "function") {
          console.log("Screen orientation lock not supported on this device");
          return;
        }

        await orientation.lock("landscape-primary");
        console.log("Screen locked to landscape");
      } catch (error) {
        if (error instanceof Error) {
          if (error.name === "NotSupportedError") {
            console.log(
              "Screen orientation lock is not supported on this device"
            );
          } else if (error.name === "SecurityError") {
            console.log("Screen orientation lock blocked by security policy");
          } else {
            console.warn("Failed to lock screen orientation:", error.message);
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
            console.log("Screen orientation unlocked");
          }
        }
      } catch (error) {
        console.warn("Failed to unlock screen orientation:", error);
      }
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);

    // Cleanup event listener
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  return (
    <section className="video-section max-lg:flex-center p-2 lg:p-4 sticky top-0 z-20 lg:relative">
      <div className="relative">
        <video
          ref={videoElement}
          controls={showControls}
          onClick={toggleShowControls}
          className="w-[424px] h-[306px] lg:w-[799px] lg:h-[500px]  bg-gray-50 cursor-pointer object-contain rounded-lg "
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
