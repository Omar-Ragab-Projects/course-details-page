"use client";
import { QuestionsTypes } from "@/lib/courseTopics";
import { handleZero } from "@/utils/helpers";
import { AlarmClock, ArrowLeft } from "lucide-react";
import React, { ChangeEvent, useRef, useState } from "react";

interface AnswersTypes {
  questionId: number;
  answer: string;
}

function ExamViewer({
  children,
  questions,
}: {
  children: React.ReactNode;
  questions: QuestionsTypes[] | undefined;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [time, setTime] = useState({ minutes: 10, seconds: 0 });
  const timeEnd = time.minutes == 0 && time.seconds == 0;
  const [quizStarted, setQuizStarted] = useState(false);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answers, setAnswers] = useState<AnswersTypes[]>([]);
  const timerIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const openPopup = () => setIsOpen(true);
  const closePopup = () => {
    setQuizStarted(false);
    setTime({ minutes: 10, seconds: 0 });
    setActiveQuestion(0);
    setAnswers([]);
    setIsOpen(false);
    if (timerIntervalRef.current) {
      clearInterval(timerIntervalRef.current);
    }
  };

  const startQuiz = () => {
    setQuizStarted(true);
    startTimer();
  };

  const retryQuiz = () => {
    setTime({ minutes: 10, seconds: 0 });
    setActiveQuestion(0);
    setAnswers([]);
    startQuiz();
  };

  const startTimer = () => {
    if (timerIntervalRef.current) {
      clearInterval(timerIntervalRef.current);
    }

    timerIntervalRef.current = setInterval(() => {
      setTime((prevTime: any) => {
        if (prevTime.seconds > 0) {
          return { ...prevTime, seconds: prevTime.seconds - 1 };
        } else if (prevTime.seconds == 0 && prevTime.minutes > 0) {
          return {
            minutes: prevTime.minutes - 1,
            seconds: 59,
          };
        } else if (prevTime.minutes == 0) {
          if (timerIntervalRef.current) {
            clearInterval(timerIntervalRef.current);
          }
          return {
            minutes: 0,
            seconds: 0,
          };
        }
      });
    }, 1000);
  };

  const answersHandle = (
    e: ChangeEvent<HTMLInputElement>,
    questionId: number
  ) => {
    const isNewAnswer = !answers.find(
      (answer) => answer.questionId == questionId
    );
    const currAnswer = { questionId, answer: e.currentTarget.value };

    if (isNewAnswer) {
      setAnswers([...answers, currAnswer]);
    } else {
      const newAnswers = answers.map((previouAnswer) => {
        return previouAnswer.questionId == questionId
          ? currAnswer
          : previouAnswer;
      });
      setAnswers(newAnswers);
    }
  };

  return (
    <div>
      <div onClick={openPopup}>{children}</div>
      {isOpen && (
        <>
          <div className="animate-fade-in fixed  inset-0 bg-black/85 flex-center flex-col">
            {!quizStarted && (
              <div className="fixed h-[90%] bottom-0 w-full bg-white/5 z-20 backdrop-blur">
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

            <div className="bg-[#4056b9] w-full p-4 relative flex-between">
              <ArrowLeft
                onClick={closePopup}
                className="text-white w-9 h-9 cursor-pointer hover:text-red-300 "
              />
              <div className="absolute flex-center  gap-2 left-center top-center bg-[#fbd500] text-white shadow rounded-md shadow-[#fbd500] p-2 px-6">
                <AlarmClock size={22} />
                <span className="h-7 text-2xl">
                  {handleZero(time.minutes)} : {handleZero(time.seconds)}
                </span>
              </div>

              {answers.length == questions?.length && (
                <button
                  onClick={closePopup}
                  className="bg-white px-6 py-2 rounded-lg border border-gray-300 cursor-pointer"
                >
                  Submit
                </button>
              )}
            </div>

            <div className="bg-[#4056b9]  flex-1 w-full">
              {/* Steps */}
              <ul className=" flex justify-center gap-4 pt-16">
                {questions &&
                  Array(questions.length)
                    .fill("")
                    .map((_, index) => (
                      <li
                        key={index}
                        onClick={() => setActiveQuestion(index)}
                        className={`w-12 h-12 rounded-full bg-transparent border border-white cursor-pointer font-semibold transition-all flex-center
                          ${
                            activeQuestion == index
                              ? "bg-white text-black"
                              : "text-white"
                          }`}
                      >
                        <span>{index + 1}</span>
                      </li>
                    ))}
              </ul>
              {/* Questions */}
              <div className="mt-8 flex-between px-12">
                <button
                  onClick={() =>
                    questions &&
                    activeQuestion != 0 &&
                    setActiveQuestion((prev) => prev - 1)
                  }
                  className={`px-3 py-2 bg-white rounded-lg cursor-pointer text-sm 
                    ${
                      questions && activeQuestion != 0
                        ? ""
                        : "pointer-events-none text-gray-400 bg-white/80"
                    }`}
                >
                  Previous
                </button>

                <button
                  onClick={() =>
                    questions &&
                    activeQuestion < questions?.length - 1 &&
                    setActiveQuestion((prev) => prev + 1)
                  }
                  className={`px-3 py-2 bg-white rounded-lg cursor-pointer text-sm
                      ${
                        questions && activeQuestion < questions?.length - 1
                          ? ""
                          : "pointer-events-none text-gray-400 bg-white/80"
                      }
                      `}
                >
                  Next
                </button>
              </div>
              <ul
                className="h-[68%] flex justify-center gap-4 mt-4 absolute left-12 transition-all"
                style={{
                  transform: `translateX(-${20 * activeQuestion}%)`,
                }}
              >
                {questions &&
                  questions.map((question, index) => (
                    <li
                      key={index}
                      className="bg-white min-w-[calc(100vw-100px)]  rounded-xl p-8"
                    >
                      <span className="text-3xl">{question.id}.</span>
                      <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
                        {question.question}
                      </p>
                      <div className="flex flex-col gap-8 mt-12">
                        {question.choices.map((choice, index) => (
                          <label
                            key={index}
                            id={`answer-${question.id}-${choice}`}
                            className={`rounded-lg shadow-md cursor-pointer hover:bg-blue-50 transition border border-gray-200 flex items-center has-checked:bg-blue-500 has-checked:text-white
                              `}
                          >
                            <input
                              type="radio"
                              id={`answer-${question.id}-${choice}`}
                              name={`question-answer-${question.id}`}
                              value={choice}
                              className="m-5"
                              onChange={(e) => answersHandle(e, question.id)}
                            />
                            <span className="p-5 border-l border-gray-300">
                              {choice}
                            </span>
                          </label>
                        ))}
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ExamViewer;
