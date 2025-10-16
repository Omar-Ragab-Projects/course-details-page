import ProgressBar from "@/components/ui/ProgressBar";
import React from "react";

function CourseTopics() {
  return (
    <section className="max-lg:max-w-[90%] max-lg:mx-auto max-lg:mt-10">
      <h3 className="text-2xl lg:text-3xl font-semibold">
        Topics for this Course
      </h3>

      <ProgressBar percent={25} className="my-12" />
    </section>
  );
}

export default CourseTopics;
