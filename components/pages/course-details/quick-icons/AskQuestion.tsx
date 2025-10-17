"use client";
import { ArrowRight, MessageSquareShare, X } from "lucide-react";
import React, { FormEvent, useState } from "react";

function AskQuestion({ onSuccess }: { onSuccess?: () => void }) {
  const [success, setSuccess] = useState(false);

  const askQuestionAction = async (e: FormEvent) => {
    e.preventDefault();
    (e.currentTarget as HTMLFormElement).reset();

    try {
      // Nice to meet you :)
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        onSuccess && onSuccess();
      }, 1500);
    } catch (error) {
      console.log(error instanceof Error ? error.message : "Error Occured!");
    }
  };

  return (
    <form onSubmit={askQuestionAction} className="p-4  min-w-[100%]">
      <textarea
        name=""
        id=""
        aria-multiline
        className="resize-none  shadow-[0_0_8px_rgba(0,0,0,0.1)] block w-[100%] h-40 p-4 rounded-lg mt-4 bg-white"
        placeholder="How can we help you"
        required
      ></textarea>

      <button className="flex-center gap-2 bg-[#41b69d] hover:bg-[#33a58c] text-white px-8 py-3 mt-4 rounded-md text-sm cursor-pointer ">
        <span>Submit Review</span>
        <ArrowRight size={16} />
      </button>

      {success && (
        <div className="fixed inset-0 bg-black/80">
          <div className=" animate-fade-in flex-center flex-col absolute top-center left-center bg-white p-8 rounded-lg w-[90%] max-w-[400px]  ">
            <MessageSquareShare size={90} className="text-green-500" />
            <span className="font-bold text-green-500">Thank You!</span>
            <span className=" text-2xl mt-4 text-center font-semibold text-black/75">
              Your Comment Now Is Under Review
            </span>
            <X
              onClick={() => setSuccess(false)}
              className="inset-4 absolute text-black/25"
            />
          </div>
        </div>
      )}
    </form>
  );
}

export default AskQuestion;
