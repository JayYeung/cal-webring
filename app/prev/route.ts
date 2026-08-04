import { NextRequest, NextResponse } from "next/server";
import { members } from "../../members";

export async function GET(request: NextRequest) {
  const current = request.nextUrl.searchParams.get("current");

  const currentIndex = members.findIndex((m) => m.url === current);

  const prevIndex =
    currentIndex === -1
      ? 0
      : (currentIndex - 1 + members.length) % members.length;

  return NextResponse.redirect(members[prevIndex].url);
}