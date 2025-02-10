import { NextRequest, NextResponse } from "next/server";
import { fetchAnswers } from "@/lib/data";

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ id?: string }> }
): Promise<NextResponse> {
  try {
    const { id } = await context.params;

    if (!id) {
      return NextResponse.json(
        { error: "Question ID is required" },
        { status: 400 }
      );
    }

    const answers = await fetchAnswers(id);
    return NextResponse.json(answers);
  } catch (error) {
    console.error("Error fetching answers:", error);
    return NextResponse.json(
      { error: "Failed to fetch answers" },
      { status: 500 }
    );
  }
}

// test: http://localhost:3000/api/questions/0b93d8dc-6e43-49e3-b59f-b67531247612/answers
