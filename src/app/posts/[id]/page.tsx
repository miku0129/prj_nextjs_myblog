import React from "react";
import prisma from "@/lib/prisma";
import ItemPost from "@/components/item-post.component";
import BtnDelete from "@/components/btn-delete.component";
import BtnHyperlink from "@/components/btn-hyperlink.component";
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
      <BtnHyperlink btntype="home" />
      <div className={styles.post}>
        {props && <ItemPost post={props} />}
        <BtnDelete params={params} />
      </div>
    </div>
  );
}
