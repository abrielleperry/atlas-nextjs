import { NextResponse } from "next/server";
import { fetchQuestions } from "@/lib/data";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const questions = await fetchQuestions(params.id);
    return NextResponse.json({ questions });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch questions" },
      { status: 500 }
    );
  }
}
