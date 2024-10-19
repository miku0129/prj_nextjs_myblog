import React from "react";
import prisma from "../lib/prisma";
import ItemHeadline from "@/components/item-headline.component";
import BtnHyperlink from "@/components/btn-hyperlink.component";

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
      <div className="page">
        <h1>Public Feed</h1>
        <BtnHyperlink btntype="create" />
        <BtnHyperlink btntype="drafts" />
        <main>
          {props &&
            props!.posts.map((post: Post) => (
              <div key={post.id} className="post">
                <ItemHeadline post={post} />
              </div>
            ))}
        </main>
      </div>
    </div>
  );
}
