import { NextResponse, NextRequest } from "next/server";
import { fetchAnswers } from "@/lib/data";

export async function GET(
  req: NextRequest,
  context: { params: { id?: string } }
) {
  try {
    const id = context?.params?.id;

    if (!id) {
      return NextResponse.json(
        { error: "Question ID is required" },
        { status: 400 }
      );
    }

    const answers = await fetchAnswers(id);
    return NextResponse.json({ answers });
  } catch (error) {
    console.error("Database Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch answers" },
      { status: 500 }
    );
  }
}
