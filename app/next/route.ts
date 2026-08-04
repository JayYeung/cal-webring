import { NextRequest, NextResponse } from "next/server";
import { members } from "../../members";

export async function GET(request: NextRequest) {
  const current = request.nextUrl.searchParams.get("current");

  const currentIndex = members.findIndex((m) => m.url === current);

  // If we can't find them (bad link, typo, wtvs), just send to the first member (angela >:p)
  const nextIndex =
    currentIndex === -1 ? 0 : (currentIndex + 1) % members.length;

  return NextResponse.redirect(members[nextIndex].url);
}