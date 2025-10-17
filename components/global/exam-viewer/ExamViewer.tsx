"use client";
import { QuestionsTypes } from "@/lib/courseTopics";
import { handleZero } from "@/utils/helpers";
import { AlarmClock, ArrowLeft } from "lucide-react";
import React, { ChangeEvent, useRef, useState } from "react";
import ExamHeader from "./ExamHeader";
import ExamQuestions from "./ExamQuestions";

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

  const updateActiveQuestion = (index: number) => {
    setActiveQuestion(index);
  };

  const previousActiveQuestion = () =>
    questions && activeQuestion != 0 && setActiveQuestion((prev) => prev - 1);

  const nextActiveQuestion = () =>
    questions &&
    activeQuestion < questions?.length - 1 &&
    setActiveQuestion((prev) => prev + 1);

  return (
    <div>
      <div onClick={openPopup}>{children}</div>
      {isOpen && (
        <>
          <div className="modal-open animate-fade-in fixed  inset-0 bg-black/85 flex-center flex-col z-30">
            <ExamHeader
              time={time}
              quizStarted={quizStarted}
              timeEnd={timeEnd}
              startQuiz={startQuiz}
              retryQuiz={retryQuiz}
              closePopup={closePopup}
              answers={answers}
              questions={questions}
            />

            <ExamQuestions
              questions={questions}
              updateActiveQuestion={updateActiveQuestion}
              activeQuestion={activeQuestion}
              previousActiveQuestion={previousActiveQuestion}
              nextActiveQuestion={nextActiveQuestion}
              answersHandle={answersHandle}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default ExamViewer;
