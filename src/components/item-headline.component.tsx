"use client";

import React from "react";
import { useRouter } from "next/navigation";

const ItemHeadline: React.FC<{ post: Post }> = ({ post }) => {
  const router = useRouter();
  const authorName = post.author ? post.author.name : "Unknown author";
  return (
    <div
      className="item-layout"
      onClick={() => router.push(`/posts/${post.id}`)}
    >
      <h2>{post.title}</h2>
      <small>By {authorName}</small>
      <style jsx>{`
        .item-layout {
          background: gainsboro;
        }
        .item-layout:hover {
          background: white;
        }
      `}</style>
    </div>
  );
};

export default ItemHeadline;
