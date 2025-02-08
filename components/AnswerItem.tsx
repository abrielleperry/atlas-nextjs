"use client";

const AnswerItem = ({
  answer,
}: {
  answer: { id: string; answer: string; accepted: boolean };
}) => {
  const handleAcceptAnswer = () => {};
  return (
    <div>
      <li>
        <span>{answer.answer}</span>
        <button
          onClick={handleAcceptAnswer}
          className={`ml-2 p-1 rounded ${
            answer.accepted ? "bg-green-500" : "bg-navy-500"
          }`}
        ></button>
      </li>
    </div>
  );
};
