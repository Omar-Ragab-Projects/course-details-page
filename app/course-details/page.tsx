"use client";
import CourseMaterialsSection from "@/components/pages/course-details/CourseMaterialsSection";
import CourseTopics from "@/components/pages/course-details/CourseTopics";
import CourseVideo from "@/components/pages/course-details/CourseVideo";

function CourseDetailsPage() {
  return (
    <div className="flex justify-center">
      <div className="">
        <CourseVideo />
        {/* Icons */}
        <CourseMaterialsSection />
        <CourseTopics />
      </div>

      {/* Right Hand On Web View */}
      <div className="hidden lg:block">1</div>
    </div>
  );
}

export default CourseDetailsPage;
