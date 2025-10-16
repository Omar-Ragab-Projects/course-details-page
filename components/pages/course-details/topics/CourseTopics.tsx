import ProgressBar from "@/components/ui/ProgressBar";
import React from "react";
import CourseTopicsList from "./CourseTopicsList";

function CourseTopics({ className = "" }: { className?: string }) {
  return (
    <section
      id="curriculum-section"
      className={`max-lg:max-w-[90%] max-lg:mx-auto mt-10  ${className}`}
    >
      <h3 className="text-2xl lg:text-3xl font-semibold">
        Topics for this Course
      </h3>

      <ProgressBar percent={63} className="mt-15 mb-6" />
      <CourseTopicsList />
    </section>
  );
}

export default CourseTopics;
