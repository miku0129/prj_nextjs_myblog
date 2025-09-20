import React from "react";
import prisma from "@/lib/prisma";
import ItemPost from "@/components/item-post.component";
import BtnPublish from "@/components/btn-publish.component";
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
      <div className={styles.header}>
        <Hyperlink btntype="drafts" />
      </div>
      <div>
        {/* {props && <ItemPost post={props} />} */}
        {post && <ItemPost post={post} />}
        <BtnPublish id={id} />
        <BtnDelete id={id} />
      </div>
    </div>
  );
}
