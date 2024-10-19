import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function DELETE(req: NextRequest) {
  const urlArray = await req.url.split("/");
  const postId = urlArray[urlArray.length - 1];

  if (req.method === "DELETE") {
    const res = await prisma.post.delete({
      where: { id: postId },
    });
    return NextResponse.json(res);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
}
