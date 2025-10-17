import React from "react";
import CourseMaterialsList from "./CourseMaterialsList";

function CourseMaterialsSection() {
  return (
    <section>
      <h3 className="hidden lg:block max-lg:px-12 pt-6 text-xl lg:text-3xl font-semibold">
        Course Materials
      </h3>
      <div className="container flex gap-12 lg:max-w-[750px] shadow-[0px_1px_8px_rgba(0,0,0,0.10)] rounded-sm mt-6 max-w-[90%]">
        <CourseMaterialsList />
        <CourseMaterialsList className="hidden lg:block" />
      </div>
    </section>
  );
}

export default CourseMaterialsSection;
