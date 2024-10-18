import React from "react";
import prisma from "../lib/prisma";
import Headline from "@/components/headline.component";
import HyperlinkBtn from "@/components/hyperlink-button.component";

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
        <HyperlinkBtn btntype="create"/>
        <HyperlinkBtn btntype="drafts"/>
        <main>
          {props &&
            props!.posts.map((post:Post) => (
              <div key={post.id} className="post">
                <Headline post={post} />
              </div>
            ))}
        </main>
      </div>
    </div>
  );
}
