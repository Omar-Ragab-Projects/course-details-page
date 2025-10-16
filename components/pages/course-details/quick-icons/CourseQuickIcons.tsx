"use client";
import Popup from "@/components/ui/Popup";
import Tooltip from "@/components/ui/Tooltip";
import {
  CircleStar,
  LandPlot,
  MessageCircleQuestionMark,
  MessageSquare,
} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import AddCommentForm from "../comments/AddCommentForm";
import AskQuestion from "./AskQuestion";

function CourseQuickIcons() {
  const [askQuestion, setAskQuestion] = useState(false);
  const openAskQuestionPopup = () => setAskQuestion(true);
  const closeAskQuestionPopup = () => setAskQuestion(false);

  return (
    <section className="flex-center gap-4 max-lg:mt-4">
      <Link href={"#curriculum-section"}>
        <Tooltip
          message="Curriculum"
          className="border border-gray-300 rounded-full w-10 h-10 flex-center cursor-pointer hover:bg-blue-400  p-1"
        >
          <LandPlot
            className="text-black/60 group-hover:text-white"
            size={20}
          />
        </Tooltip>
      </Link>

      <Link href={"#comments-section"}>
        <Tooltip
          message="Comments"
          className="border border-gray-300 rounded-full w-10 h-10 flex-center cursor-pointer hover:bg-blue-400  p-1"
        >
          <MessageSquare
            className="text-black/60 group-hover:text-white"
            size={20}
          />
        </Tooltip>
      </Link>

      <Tooltip
        message="Ask Question"
        onClick={openAskQuestionPopup}
        className="border border-gray-300 rounded-full w-10 h-10 flex-center cursor-pointer hover:bg-blue-400  p-1"
      >
        <MessageCircleQuestionMark
          className="text-black/60 group-hover:text-white"
          size={20}
        />
      </Tooltip>
      <Popup isOpen={askQuestion} onClose={closeAskQuestionPopup}>
        <AskQuestion onSuccess={closeAskQuestionPopup} />
      </Popup>

      <Tooltip
        message="Leaderboard"
        className="border border-gray-300 rounded-full w-10 h-10 flex-center cursor-pointer hover:bg-blue-400  p-1"
      >
        <CircleStar
          className="text-black/60 group-hover:text-white"
          size={20}
        />
      </Tooltip>
    </section>
  );
}

export default CourseQuickIcons;
