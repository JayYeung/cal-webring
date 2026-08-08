import { NextRequest, NextResponse } from "next/server";
import { members } from "../../members";

function normalize(url: string) {
  return url.replace(/^https?:\/\//, "").replace(/\/$/, "").toLowerCase();
}

export async function GET(request: NextRequest) {
  const current = request.nextUrl.searchParams.get("current");

  const currentIndex = members.findIndex(
    (m) => normalize(m.url) === normalize(current ?? "")
  );

  const prevIndex =
    currentIndex === -1
      ? 0
      : (currentIndex - 1 + members.length) % members.length;

  return NextResponse.redirect(members[prevIndex].url);
}