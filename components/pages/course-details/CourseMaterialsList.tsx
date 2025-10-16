import {
  BookOpenCheck,
  Clock9,
  Globe,
  LibraryBig,
  UserStar,
} from "lucide-react";
import React from "react";

function CourseMaterials({ className = "" }: { className?: string }) {
  return (
    <div className={`!px-0 sm:!p-6 py-4  lg:py-8  flex-1 ${className}`}>
      <h3 className="lg:hidden text-xl lg:text-3xl font-semibold">
        Course Materials
      </h3>
      <ul>
        <li className="flex-between border-b-2 border-gray-200 py-4">
          <div className="flex items-center gap-2 text-gray-600">
            <UserStar size={14} />
            <span>Instructor: </span>
          </div>
          <div>Edward Norton</div>
        </li>
        <li className="flex-between border-b-2 border-gray-200 py-4">
          <div className="flex items-center gap-2 text-gray-600">
            <Clock9 size={14} />
            <span>Duration: </span>
          </div>
          <div>3 weeks</div>
        </li>
        <li className="flex-between border-b-2 border-gray-200 py-4">
          <div className="flex items-center gap-2 text-gray-600">
            <LibraryBig size={14} />
            <span>Lessons: </span>
          </div>
          <div>8</div>
        </li>
        <li className="flex-between border-b-2 border-gray-200 py-4">
          <div className="flex items-center gap-2 text-gray-600">
            <BookOpenCheck size={14} />
            <span>Enrolled: </span>
          </div>
          <div>65 students</div>
        </li>
        <li className="flex-between border-b-2 border-gray-200 py-4">
          <div className="flex items-center gap-2 text-gray-600">
            <Globe size={14} />
            <span>Language: </span>
          </div>
          <div>English</div>
        </li>
      </ul>
    </div>
  );
}

export default CourseMaterials;
