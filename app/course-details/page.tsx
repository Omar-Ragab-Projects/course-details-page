"use client";
import CourseMaterialsSection from "@/components/pages/course-details/CourseMaterialsSection";
import CourseTopics from "@/components/pages/course-details/topics/CourseTopics";
import CourseVideo from "@/components/pages/course-details/CourseVideo";
import CourseComments from "@/components/pages/course-details/comments/CourseComments";
import CourseQuickIcons from "@/components/pages/course-details/quick-icons/CourseQuickIcons";
import { useState } from "react";

function CourseDetailsPage() {
  const [isWideMode, setIsWideMode] = useState(false);
  const toggleWideMode = () => setIsWideMode(!isWideMode);

  return (
    <div className="course-parent ">
      {!isWideMode && (
        <div className="not-wide-content flex justify-center gap-8 xl:mx-auto xl:container">
          <div className="left-side-course-details lg:max-w-[799px]">
            <div className="sticky lg:relative top-0 z-30 video-section">
              <CourseVideo
                isWideMode={isWideMode}
                toggleWideMode={toggleWideMode}
              />
              <CourseQuickIcons />
            </div>
            <CourseMaterialsSection />
            <CourseTopics className="xl:hidden" />
            <CourseComments />
          </div>

          <div className="hidden xl:block flex-1 ">
            <CourseTopics className="max-xl:hidden" />
          </div>
        </div>
      )}

      {isWideMode && (
        <div className="container wide-content ">
          <div className="sticky lg:relative top-0 z-30 video-section">
            <CourseVideo
              isWideMode={isWideMode}
              toggleWideMode={toggleWideMode}
            />
            <CourseQuickIcons />
          </div>

          <div className="flex gap-8 justify-center">
            <div className="flex-1 lg:max-w-[799px]">
              <CourseMaterialsSection />
              <CourseTopics className="xl:hidden" />
              <CourseComments />
            </div>
            <div className="max-xl:hidden">
              <CourseTopics />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CourseDetailsPage;
