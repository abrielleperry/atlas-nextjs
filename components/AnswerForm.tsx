"use client";

import { useState } from "react";
import { addAnswer } from "@/lib/actions";
import { useRouter } from "next/navigation";

const AnswerForm = ({ questionId }: { questionId: string }) => {
  const [answer, setAnswer] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!answer.trim()) return;

    await addAnswer(questionId, answer);

    setAnswer("");
    router.refresh();
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="Answer question"
      />
      <button type="submit">Answer</button>
    </form>
  );
};

export default AnswerForm;
