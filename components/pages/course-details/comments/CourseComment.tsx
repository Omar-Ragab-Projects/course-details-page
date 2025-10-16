import { CommentTypes } from "@/lib/comments";
import Image from "next/image";
import React from "react";

function CourseComment({ comment }: { comment: CommentTypes }) {
  return (
    <li className="p-4 not-last:border-b border-gray-300">
      <div className="flex items-start gap-4">
        <Image
          src={comment.image}
          alt="Comment Image"
          width={50}
          height={50}
          className="rounded-full bg-gray-200 "
        />
        <div className="flex flex-col gap-1">
          <span className="text-lg text-gray-600">{comment.name}</span>
          <span className="text-gray-400">{comment.date}</span>
          <p className="text-gray-500 mt-2">{comment.comment}</p>
        </div>
      </div>
    </li>
  );
}

export default CourseComment;
