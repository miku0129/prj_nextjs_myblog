import React from "react";
import prisma from "@/lib/prisma";
import ItemPost from "@/components/item-post.component";
import BtnPublish from "@/components/btn-publish.component";

export default async function Post({ params }: { params: { id: string } }) {
  const getPost = async () => {
    const post = await prisma.post.findUnique({
      where: {
        id: String(params?.id),
      },
      include: {
        author: {
          select: { name: true },
        },
      },
    });
    return {
      props: post,
    };
  };

  const { props } = await getPost();

  return (
    <div>
      <div>{props && <ItemPost post={props} />}</div>
      <BtnPublish params={params} />
    </div>
  );
}
