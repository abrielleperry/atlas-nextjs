import AnswerForm from "@/components/AnswerForm";
import AnswerList from "@/components/AnswerList";
import { fetchQuestion, fetchAnswers } from "@/lib/data";

interface PageProps {
  params: { id: string };
}

export default async function Page({ params }: PageProps) {
  const question = await fetchQuestion(params.id);
  const answers = await fetchAnswers(params.id);

  if (!question) {
    return <div>Question not found</div>;
  }

  return (
    <div>
      <h1>{question.title}</h1>
      <AnswerForm questionId={params.id} />
      <AnswerList answers={answers} />
    </div>
  );
}
