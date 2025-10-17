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
import Modal from "@/components/ui/Modal";
import leaderboardData from "@/lib/leaderboard";
import Image from "next/image";

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

      <Modal
        trigger={
          <Tooltip
            message="Leaderboard"
            className="border border-gray-300 rounded-full w-10 h-10 flex-center cursor-pointer hover:bg-blue-400  p-1"
          >
            <CircleStar
              className="text-black/60 group-hover:text-white"
              size={20}
            />
          </Tooltip>
        }
      >
        <div
          className="w-full h-full bg-white flex items-center flex-col p-4 "
          dir="rtl"
        >
          <h5 className="text-[#080264]  text-xl">Starting SEO as your Home</h5>
          <b className="text-[#080264]  text-xl mt-2">Leaderboard</b>
          <p className="mt-8 bg-[#f5f9fa] rounded-md p-3  text-2xl text-[#182578] flex gap-6 items-center">
            <span className="text-5xl">👌</span>
            <span>
              عظيم يا صديقي.. أداءك في الكورس ده أفضل من 60% من باقي الطلبة..
              كمّل عايز أشوف اسمك في الليدر بورد هنا
            </span>
          </p>
          <ul className="bg-[#F5F9FA] p-6 rounded-lg mt-12 w-full flex flex-col gap-4">
            {leaderboardData.map((user, index) => (
              <li
                key={index}
                className="relative p-4 bg-white rounded-lg flex gap-4"
              >
                <Image
                  src={user.image}
                  alt="User Photo"
                  width={50}
                  height={50}
                  className="p-2 rounded-full bg-gray-100"
                />
                <div className="flex flex-col ">
                  <span className="font-bold">{user.name}</span>
                  <span>{user.message}</span>
                </div>

                <span className="absolute inset-0 w-5 h-5 flex-center rounded-full bg-blue-300 text-white font-bold ">
                  {user.rank}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Modal>
    </section>
  );
}

export default CourseQuickIcons;
