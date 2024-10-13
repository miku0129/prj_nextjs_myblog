import React from "react";
import styles from "./posts-page.module.css";

export default function Post({ params }: { params: { slug: string } }) {
  console.log("params", params);

  const getPost = () => {
    const post = {
      id: "1",
      title: "Prisma is the perfect ORM for Next.js",
      content:
        "[Prisma](https://github.com/prisma/prisma) and Next.js go _great_ together!",
      published: false,
      author: {
        name: "Nikolas Burk",
        email: "burk@prisma.io",
      },
    };
    return {
      props: post,
    };
  };

  let title = getPost().props.title;
  if (!getPost().props.published) {
    title = `${title} (Draft)`;
  }

  return (
    <div>
      <div className={styles.post}>
        <h2>{title}</h2>
        <p>By {getPost().props?.author?.name || "Unknown author"}</p>
      </div>
    </div>
  );
}
