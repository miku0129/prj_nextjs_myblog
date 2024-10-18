import React from "react";
import prisma from "@/lib/prisma";
import PostItem from "@/components/post-item.component";
import styles from "./posts-page.module.css";

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
      <div className={styles.post}>
        {props && <PostItem post={props} />}
      </div>
    </div>
  );
}
