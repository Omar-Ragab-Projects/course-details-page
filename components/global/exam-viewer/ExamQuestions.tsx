import { QuestionsTypes } from "@/lib/courseTopics";
import React, { ChangeEvent } from "react";

interface ExamQuestionsProps {
  questions: QuestionsTypes[] | undefined;
  updateActiveQuestion: (index: number) => void;
  activeQuestion: number;
  previousActiveQuestion: () => void;
  nextActiveQuestion: () => void;
  answersHandle: (e: ChangeEvent<HTMLInputElement>, questionId: number) => void;
}

function ExamQuestions({
  questions,
  updateActiveQuestion,
  activeQuestion,
  previousActiveQuestion,
  nextActiveQuestion,
  answersHandle,
}: ExamQuestionsProps) {
  return (
    <div className="bg-[#4056b9]  flex-1 w-full h-full">
      {/* Steps */}
      <ul className=" flex justify-center gap-4 pt-16">
        {questions &&
          Array(questions.length)
            .fill("")
            .map((_, index) => (
              <li
                key={index}
                onClick={() => updateActiveQuestion(index)}
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
          onClick={previousActiveQuestion}
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
          onClick={nextActiveQuestion}
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
        className="h-[96%] flex justify-center gap-4 mt-4 absolute left-12 transition-all"
        style={{
          transform: `translateX(-${20 * activeQuestion}%)`,
        }}
      >
        {questions &&
          questions.map((question: QuestionsTypes, index: number) => (
            <li
              key={index}
              className="bg-white min-w-[calc(100vw-100px)]  rounded-xl p-8"
            >
              <span className="text-3xl">{question.id}.</span>
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
                {question.question}
              </p>
              <div className="flex flex-col gap-8 mt-12">
                {question.choices.map((choice, index: number) => (
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
  );
}

export default ExamQuestions;
