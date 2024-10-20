import React from "react";
import prisma from "../lib/prisma";
import ItemHeadline from "@/components/item-headline.component";
import Hyperlink from "@/components/hyperlink.component";
import { CustomStyleHeaderItemLayout } from "./../styling/styled-components/page";
import styles from "./../styling/css-modules/styles.module.css";
import { CustomStylelistLayout } from "./../styling/styled-components/page";

export default async function Home() {
  const getPosts = async () => {
    const posts = await prisma.post.findMany({
      where: { published: true },
      include: {
        author: {
          select: { name: true },
        },
      },
    });
    return {
      props: { posts },
      revalidate: 10,
    };
  };
  const { props } = await getPosts();

  return (
    <div>
      <div className={styles.base}>
        <CustomStyleHeaderItemLayout>
          <Hyperlink btntype="create" />
          <Hyperlink btntype="drafts" />
        </CustomStyleHeaderItemLayout>
        <h1>Public Feed</h1>
        <main>
          <CustomStylelistLayout>
            {props &&
              props!.posts.map((post: Post) => (
                <div key={post.id}>
                  <ItemHeadline post={post} />
                </div>
              ))}
          </CustomStylelistLayout>
        </main>
      </div>
    </div>
  );
}
