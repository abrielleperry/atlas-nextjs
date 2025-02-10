import { fetchAnswers } from "@/lib/data";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const answers = await fetchAnswers(params.id);
  return NextResponse.json(answers);
}

// test: http://localhost:3000/api/questions/0b93d8dc-6e43-49e3-b59f-b67531247612/answers
