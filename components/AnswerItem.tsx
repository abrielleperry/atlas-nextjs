"use client";

import { acceptAnswer } from "@/lib/actions";
import { useRouter } from "next/navigation";

const AnswerItem = ({
  answer,
}: {
  answer: { id: string; answer: string; accepted: boolean; questionId: string };
}) => {
  const router = useRouter();
  const handleAcceptAnswer = async () => {
    await acceptAnswer(answer.questionId, answer.id);
    router.refresh();
  };
  return (
    <div>
      <li>
        <span>{answer.answer}</span>
        <button
          onClick={handleAcceptAnswer}
          className={`ml-2 p-1 rounded ${
            answer.accepted ? "bg-green-500" : "bg-navy-500"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
            data-slot="icon"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            ></path>
          </svg>
        </button>
      </li>
    </div>
  );
};

export default AnswerItem;
