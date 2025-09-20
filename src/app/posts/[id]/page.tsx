import React from "react";
import prisma from "@/lib/prisma";
import ItemPost from "@/components/item-post.component";
import BtnDelete from "@/components/btn-delete.component";
import Hyperlink from "@/components/hyperlink.component";
import styles from "./../../../styling/css-modules/styles.module.css";

export default async function Post({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = await prisma.post.findUnique({
    where: {
      id: id,
    },
    include: {
      author: {
        select: { name: true },
      },
    },
  });

  return (
    <div className={styles.base}>
      <Hyperlink btntype="home" />
      <div className={styles.post}>
        {post && <ItemPost post={post} />}
        <BtnDelete id={id} />
      </div>
    </div>
  );
}
