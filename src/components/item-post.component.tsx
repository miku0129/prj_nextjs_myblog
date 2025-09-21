"use client";

import React from "react";
import { useRouter } from "next/navigation";
import styles from "./../styling/css-modules/styles.module.css"

const ItemPost: React.FC<{ post: Post }> = ({ post }) => {
  const router = useRouter();
  const title = post.published ? post.title : `${post.title} (Draft)`;
  const authorName = post.author ? post.author.name : "Unknown author";
  return (
    <div>
      {(post.published && (
        <div className={styles.item}>
          <h2>{title}</h2>
          <p>{post.content}</p>
          <p>By {authorName}</p>
        </div>
      )) ||
        (!post.published && (
          <div
            onClick={() => router.push(`/drafts/${post.id}`)}
            className={styles.draft}
          >
            <h2>{title}</h2>
            <p>{post.content}</p>
            <p>By {authorName}</p>
          </div>
        ))}
      <style jsx>{``}</style>
    </div>
  );
};

export default ItemPost;
