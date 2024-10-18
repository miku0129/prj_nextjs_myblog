import React from "react";
import prisma from "@/lib/prisma";
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
  let title = "";
  if (props) {
    title = props.title;
    if (!props.published) {
      title = `${title} (Draft)`;
    }
  }

  return (
    <div>
      <div className={styles.post}>
        <h2>{title}</h2>
        <p>By {props?.author?.name || "Unknown author"}</p>
      </div>
    </div>
  );
}
