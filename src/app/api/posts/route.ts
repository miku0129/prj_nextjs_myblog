import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

// POST /posts
// Required fields in body: title
// Optional fields in body: content
export async function POST(req: NextRequest) {

  const body = await req.json();
  const { title, content } = body;

  const res = await prisma.post.create({
    data: {
      title: title,
      content: content,
      author: { connect: { email: process.env.SAMPLE_USER_EMAIL } },
    },
  });

  return NextResponse.json(res);
}
