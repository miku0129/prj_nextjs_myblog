import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

// export async function GET() {
//     const res = await fetch('https://pokeapi.co/api/v2/', {
//     })
//     const data = await res.json()
//     return Response.json({ data })
//   }

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
