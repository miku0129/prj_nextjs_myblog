'use client'

import React from "react";
import { useParams } from "next/navigation";
import { PostProps } from "@/components/headline.component";

const Post: React.FC<PostProps> = () => {
  
  const params = useParams<{ tag: string; item: string }>(); 
  console.log("params", params)
  
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
      <h2>{title}</h2>
      <p>By {getPost().props?.author?.name || "Unknown author"}</p>
    </div>
    //   <style jsx>{`
    //     .page {
    //       background: white;
    //       padding: 2rem;
    //     }

    //     .actions {
    //       margin-top: 2rem;
    //     }

    //     button {
    //       background: #ececec;
    //       border: 0;
    //       border-radius: 0.125rem;
    //       padding: 1rem 2rem;
    //     }

    //     button + button {
    //       margin-left: 1rem;
    //     }
    //   `}</style>
    // </Layout>
  );
};

export default Post;
