import { NextRequest, NextResponse } from "next/server";
import { members } from "../../members";



export async function GET() {
  const random =
    Math.floor(Math.random()*members.length);

  return NextResponse.redirect(members[random].url);
}