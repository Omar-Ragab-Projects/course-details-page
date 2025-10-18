import { QuestionsTypes } from "@/lib/courseTopics";
import { handleZero } from "@/utils/helpers";
import { AlarmClock, ArrowLeft } from "lucide-react";
import React from "react";
interface AnswersTypes {
  questionId: number;
  answer: string;
}

interface ExamHeaderProps {
  quizStarted: boolean;
  startQuiz: () => void;
  timeEnd: boolean;
  retryQuiz: () => void;
  closePopup: () => void;
  time: { minutes: number; seconds: number };
  answers: AnswersTypes[];
  questions: QuestionsTypes[] | undefined;
}

function ExamHeader({
  quizStarted,
  startQuiz,
  timeEnd,
  retryQuiz,
  closePopup,
  time,
  answers,
  questions,
}: ExamHeaderProps) {
  return (
    <>
      {!quizStarted && (
        <div className="fixed  h-[90%] bottom-0 w-full bg-white/5 z-20 backdrop-blur">
          <button
            onClick={startQuiz}
            className="bg-[#4056b9] text-white text-xl px-16 py-4 rounded-lg border border-gray-300 cursor-pointer fixed top-center left-center shadow-lg hover:bg-[#364ba7]"
          >
            Start
          </button>
        </div>
      )}

      {timeEnd && (
        <div className="fixed h-[90%] bottom-0 w-full bg-white/5 z-20 backdrop-blur">
          <button
            onClick={retryQuiz}
            className="bg-[#4056b9] text-white text-xl px-16 py-4 rounded-lg border border-gray-300 cursor-pointer fixed top-center left-center shadow-lg hover:bg-[#364ba7]"
          >
            Try again
          </button>
        </div>
      )}

      <div className="bg-[#4056b9] sticky top-0 w-full p-4 z-20 flex-between">
        <ArrowLeft
          onClick={closePopup}
          className="text-white w-9 h-9 cursor-pointer hover:text-red-300 "
        />
        <div className=" flex-center  gap-2  bg-[#fbd500] text-white shadow rounded-md shadow-[#fbd500] p-2 px-6">
          <AlarmClock size={22} />
          <span className="h-7 text-2xl">
            {handleZero(time.minutes)} : {handleZero(time.seconds)}
          </span>
        </div>

        {answers.length == questions?.length ? (
          <button
            onClick={closePopup}
            className="bg-white px-6 py-2 rounded-lg border border-gray-300 cursor-pointer"
          >
            Submit
          </button>
        ) : (
          <span></span>
        )}
      </div>
    </>
  );
}

export default ExamHeader;
