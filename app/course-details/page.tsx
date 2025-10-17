"use client";
import CourseMaterialsSection from "@/components/pages/course-details/CourseMaterialsSection";
import CourseTopics from "@/components/pages/course-details/topics/CourseTopics";
import CourseVideo from "@/components/pages/course-details/CourseVideo";
import CourseComments from "@/components/pages/course-details/comments/CourseComments";
import CourseQuickIcons from "@/components/pages/course-details/quick-icons/CourseQuickIcons";

function CourseDetailsPage() {
  return (
    <div className="course-parent">
      <div className="flex justify-center gap-8 container">
        <div className="left-side-course-details max-w-[799px]">
          <CourseVideo />
          <CourseQuickIcons />
          <CourseMaterialsSection />
          <CourseTopics className="lg:hidden" />
          <CourseComments />
        </div>

        <div className="hidden lg:block flex-1">
          <CourseTopics className="max-lg:hidden" />
        </div>
      </div>
    </div>
  );
}

export default CourseDetailsPage;
