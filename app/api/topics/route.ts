import { fetchTopics } from "@/lib/data";
import { NextResponse } from "next/server";

export async function GET() {
  const topics = await fetchTopics();
  return NextResponse.json(topics);
}

// test: http://localhost:3000/api/topics
