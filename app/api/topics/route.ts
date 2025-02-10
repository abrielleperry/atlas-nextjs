import { fetchTopics } from "@/lib/data";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const topics = await fetchTopics();
    return NextResponse.json(topics, { status: 200 });
  } catch (error) {
    console.error("Error fetching topics:", error);
    return NextResponse.json(
      { error: "Failed to fetch topics" },
      { status: 500 }
    );
  }
}

// test: http://localhost:3000/api/topics
