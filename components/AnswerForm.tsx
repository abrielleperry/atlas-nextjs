"use client";

import { useState } from "react";

const AnswerForm = ({ questionId }: { questionId: string }) => {
  const [answer, setAnswer] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!answer.trim()) return;

    setAnswer("");
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
