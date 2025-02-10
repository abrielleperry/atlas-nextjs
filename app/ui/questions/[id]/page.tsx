import { fetchQuestion, fetchAnswers } from "@/lib/data";
import AnswerForm from "@/components/AnswerForm";
import AnswerList from "@/components/AnswerList";
import { HashtagIcon } from "@heroicons/react/24/outline";

interface PageProps {
  params: Promise<{ id: string }>;
}

interface Answer {
  id: string;
  answer: string;
  question_id: string;
}

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  const question = await fetchQuestion(resolvedParams.id);
  const answers = await fetchAnswers(resolvedParams.id);

  if (!question) {
    return <div>Question not found</div>;
  }

  const transformedAnswers: Answer[] = answers.map((answer: any) => ({
    id: answer.id,
    answer: answer.answer,
    question_id: answer.question_id,
  }));

  return (
    <div>
      <h1 className="text-3xl font-black flex items-center">
        <HashtagIcon className="h-6 w-6 mr-2" />
        {question.title}
      </h1>
      <AnswerForm questionId={resolvedParams.id} />
      <AnswerList
        answers={transformedAnswers}
        acceptedAnswerId={question.answer_id}
        questionId={resolvedParams.id}
      />
    </div>
  );
}
