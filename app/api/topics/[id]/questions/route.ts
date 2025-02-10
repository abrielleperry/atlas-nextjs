import { NextRequest, NextResponse } from "next/server";
import { fetchQuestions } from "@/lib/data";

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ id?: string }> }
): Promise<NextResponse> {
  try {
    const { id } = await context.params;

    if (!id) {
      return NextResponse.json(
        { error: "Topic ID is required" },
        { status: 400 }
      );
    }

    const questions = await fetchQuestions(id);
    return NextResponse.json(questions);
  } catch (error) {
    console.error("Error fetching questions:", error);
    return NextResponse.json(
      { error: "Failed to fetch questions" },
      { status: 500 }
    );
  }
}

// test: http://localhost:3000/api/topics/1a8de96c-3688-4c65-8771-c0136dbd97f5/questions
