import { ContentTypes } from "@/lib/courseTopics";
import { FileText, List, Lock } from "lucide-react";
import React from "react";

function CourseTopicItem({ item }: { item: ContentTypes }) {
  const isExam = item.type == "exam";
  return (
    <div className="flex-between p-4  hover:bg-[#f2faf89a] transition cursor-pointer group">
      <div className="flex items-center gap-2 max-w-[90%]">
        {isExam ? (
          <List size={14} className="text-black/50 min-w-[12px]" />
        ) : (
          <FileText size={14} className="text-black/40 min-w-[12px]" />
        )}
        <span className="group-hover:text-[#338572] transition">
          {item.title}
        </span>
      </div>

      {isExam ? (
        <div className="flex flex-col gap-1">
          <span className="min-w-max p-1 rounded-md text-sm text-center bg-[#f2faf8] text-[#5da393]  ">
            {item.questionsCount}
          </span>
          <span className="min-w-max p-1 rounded-md text-sm text-center bg-[#fdf2f4] text-[#e574b1] ">
            {item.questionsTime}
          </span>
        </div>
      ) : (
        <Lock size={13} className="text-black/60" />
      )}
    </div>
  );
}

export default CourseTopicItem;
