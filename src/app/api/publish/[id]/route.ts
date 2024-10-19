import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest) {
  const urlArray = await req.url.split("/");
  const postId = urlArray[urlArray.length - 1];

  const res = await prisma.post.update({
    where: { id: postId },
    data: { published: true },
  });
  return NextResponse.json(res);
}
