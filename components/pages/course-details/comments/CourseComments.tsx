import comments from "@/lib/comments";
import React from "react";
import CourseComment from "./CourseComment";
import AddCommentForm from "./AddCommentForm";

function CourseComments() {
  return (
    <section className="mt-4" id="comments-section">
      <h3 className="max-lg:px-6  pt-6 text-2xl lg:text-3xl font-semibold">
        Comments
      </h3>

      <ul className="mt-4 w-[90%] lg:w-full mx-auto">
        {comments.map((comment, index) => (
          <CourseComment key={index} comment={comment} />
        ))}
      </ul>

      <AddCommentForm />
    </section>
  );
}

export default CourseComments;
