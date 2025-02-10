"use client";

import { CheckCircleIcon as CheckCircleIconSolid } from "@heroicons/react/24/solid";
import { CheckCircleIcon as CheckCircleIconOutline } from "@heroicons/react/24/outline";
const acceptSvgSrc = "/accepted.svg";
import { acceptAnswer } from "@/lib/actions";
import { useState } from "react";

interface MarkAsAnsweredButtonProps {
  answerId: string;
  questionId: string;
  isAccepted: boolean;
}

function MarkAsAnsweredButton({
  answerId,
  questionId,
  isAccepted,
}: MarkAsAnsweredButtonProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleClick = async () => {
    setIsSubmitting(true);
    await acceptAnswer(questionId, answerId);
    setIsSubmitting(false);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={isSubmitting}
      className="h-8 w-8 min-w-[2rem] rounded-full"
    >
      {isAccepted ? (
        <img src={acceptSvgSrc} alt="Accepted" className="h-8 w-8" />
      ) : (
        <CheckCircleIconOutline />
      )}
    </button>
  );
}

interface Answer {
  id: string;
  answer: string;
  question_id: string;
}

interface AnswerListProps {
  answers: Answer[];
  acceptedAnswerId: string | null;
  questionId: string;
}

export default function AnswerList({
  answers,
  acceptedAnswerId,
  questionId,
}: AnswerListProps) {
  return (
    <ul className="mt-4 space-y-3">
      {answers
        .sort((a, b) => (a.id === acceptedAnswerId ? -1 : 1))
        .map((answer) => (
          <li
            key={answer.id}
            className="flex justify-between items-center border p-6 rounded-lg shadow-sm bg-white"
          >
            <p>{answer.answer}</p>
            <MarkAsAnsweredButton
              answerId={answer.id}
              questionId={questionId}
              isAccepted={answer.id === acceptedAnswerId}
            />
          </li>
        ))}
    </ul>
  );
}
