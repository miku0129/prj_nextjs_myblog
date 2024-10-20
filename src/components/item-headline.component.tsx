"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { CustomStyledHeadline } from "@/app/styling/styled-components/page";

const ItemHeadline: React.FC<{ post: Post }> = ({ post }) => {
  const router = useRouter();
  const authorName = post.author ? post.author.name : "Unknown author";
  return (
    <CustomStyledHeadline onClick={() => router.push(`/posts/${post.id}`)}>
      <h2>{post.title}</h2>
      <small>By {authorName}</small>
    </CustomStyledHeadline>
  );
};

export default ItemHeadline;
