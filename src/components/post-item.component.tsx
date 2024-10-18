"use client";

import React from "react";
import HyperlinkBtn from "./hyperlink-button.component";

const PostItem: React.FC<{ post: Post }> = ({ post }) => {
  const title = post.published ? post.title : `${post.title} (Draft)`;
  const authorName = post.author ? post.author.name : "Unknown author";
  return (
    <div>
      <h2>{title}</h2>
      <p>{post.content}</p>
      <p>By {authorName}</p>
      {post.published && <HyperlinkBtn btntype="home" />}
    </div>
  );
};

export default PostItem;
