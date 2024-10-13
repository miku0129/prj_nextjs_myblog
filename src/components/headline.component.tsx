"use client";

import React from "react";
import { useRouter } from "next/navigation";

export type PostProps = {
  id: string;
  title: string;
  author: {
    name: string;
    email: string;
  } | null;
  content: string;
  published: boolean;
};

const Headline: React.FC<{ post: PostProps }> = ({ post }) => {
  const router = useRouter();
  const authorName = post.author ? post.author.name : "Unknown author";
  return (
    <div className="posts" onClick={() => router.push(`/posts/${post.id}`)}>
      <h2>{post.title}</h2>
      <small>By {authorName}</small>
      <style jsx>{`
        .posts {
          background: yellow;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default Headline;
