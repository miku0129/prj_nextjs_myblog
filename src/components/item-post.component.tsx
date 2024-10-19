"use client";

import React from "react";
import { useRouter } from "next/navigation";

const ItemPost: React.FC<{ post: Post }> = ({ post }) => {
  const router = useRouter();
  const title = post.published ? post.title : `${post.title} (Draft)`;
  const authorName = post.author ? post.author.name : "Unknown author";
  return (
    (post.published && (
      <div>
        <h2>{title}</h2>
        <p>{post.content}</p>
        <p>By {authorName}</p>
      </div>
    )) ||
    (!post.published && (
      <div className="posts" onClick={() => router.push(`/drafts/${post.id}`)}>
        <h2>{title}</h2>
        <p>{post.content}</p>
        <p>By {authorName}</p>
      </div>
    ))
  );
};

export default ItemPost;
