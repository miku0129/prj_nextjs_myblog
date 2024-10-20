import React from "react";
import prisma from "@/lib/prisma";
import ItemPost from "@/components/item-post.component";
import BtnPublish from "@/components/btn-publish.component";
import Hyperlink from "@/components/hyperlink.component";
import styles from "./../../styling/css-modules/styles.module.css"

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
    <div className={styles.base}>
      <div className={styles.header}>
        <Hyperlink btntype="drafts" />
      </div>
      <div>
        {props && <ItemPost post={props} />}
        <BtnPublish params={params} />
      </div>
    </div>
  );
}
