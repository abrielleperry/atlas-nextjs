"use client";

import { useState } from "react";
import { addAnswer } from "@/lib/actions";

interface AnswerFormProps {
  questionId: string;
}

export default function AnswerForm({ questionId }: AnswerFormProps) {
  const [answer, setAnswer] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!answer.trim()) return;
    await addAnswer(questionId, answer);
    setAnswer("");
  };

  return (
    <form onSubmit={handleSubmit} className="relative my-8">
      <input
        type="hidden"
        name="question_id"
        value={questionId}
        className="hidden"
      />

      <input
        type="text"
        name="title"
        placeholder="Answer question"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        className="mt-1 block w-full rounded-md border border-atlas-white-300 bg-inherit py-3 pl-3 pr-28 text-lg text-gray-900 placeholder-gray-400 focus:outline-hidden focus:ring-3 focus:ring-atlas-teal"
      />
      <button
        type="submit"
        className="absolute right-2 top-2 flex h-10 w-24 items-center justify-center rounded-md border bg-secondary px-4 text-lg text-white focus:bg-secondary"
      >
        Answer
      </button>
    </form>
  );
}
