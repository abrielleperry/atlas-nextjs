import { fetchQuestions } from "@/lib/data";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const questions = await fetchQuestions(params.id);
  return NextResponse.json(questions);
}

// test: http://localhost:3000/api/topics/1a8de96c-3688-4c65-8771-c0136dbd97f5/questions
