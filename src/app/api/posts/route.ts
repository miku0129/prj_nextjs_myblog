import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

const FLAG = false;

// POST /posts
// Required fields in body: title
// Optional fields in body: content
export async function POST(req: NextRequest) {
  const body = await req.json();
  const { title, content } = body;

  //This code never runs because of FLAG=false
  if (FLAG) {
    const res = await prisma.post.create({
      data: {
        title: title,
        content: content,
        author: { connect: { email: process.env.SAMPLE_USER_EMAIL } },
      },
    });
    return NextResponse.json(res);
  }

  //This code causes an error then creates an issue in GitHub
  const errorResponse = await fetch(
    `https://api.github.com/repos/${process.env.GITHUB_OWNER}/${process.env.GITHUB_REPO}/dispatches`,
    {
      method: "POST",
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`,
        Accept: "application/vnd.github.v3+json",
        "Content-Type": "application/json",
        "User-Agent": "NextJS-App-API/1.0",
      },
      body: JSON.stringify({
        event_type: "error_detect",
        client_payload: {
          message: "Error: is detected",
        },
      }),
    }
  );
  console.log("error:", errorResponse);
  return; 
}
