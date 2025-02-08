import AnswerItem from "@/components/AnswerItem";

const AnswerList = ({
  answers,
}: {
  answers: { id: string; answer: string; accepted: boolean }[];
}) => {
  return (
    <div>
      <h2>Answers</h2>
      <ul>
        {answers
          .sort((a, b) => (b.accepted ? 1 : 0) - (a.accepted ? 1 : 0))
          .map((answer) => (
            <AnswerItem key={answer.id} answer={answer} />
          ))}
      </ul>
    </div>
  );
};
