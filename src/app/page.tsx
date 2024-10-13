import React from "react";
import Headline from "@/components/headline.component";

export default function Home() {
  const getPosts = () => {
    const posts = [
      {
        id: "1",
        title: "Prisma is the perfect ORM for Next.js",
        content:
          "[Prisma](https://github.com/prisma/prisma) and Next.js go _great_ together!",
        published: false,
        author: {
          name: "Nikolas Burk",
          email: "burk@prisma.io",
        },
      },
    ];
    return {
      props: { posts },
      revalidate: 10,
    };
  };

  return (
    <div>
      <div className="page">
        <h1>Public Feed</h1>
        <main>
          {getPosts().props.posts.map((post) => (
            <div key={post.id} className="post">
              <Headline post={post} />
            </div>
          ))}
        </main>
      </div>
      {/* <style jsx>{`
        .post {
          background: white;
          transition: box-shadow 0.1s ease-in;
        }

        .post:hover {
          box-shadow: 1px 1px 3px #aaa;
        }

        .post + .post {
          margin-top: 2rem;
        }
      `}</style> */}
    </div>
  );
}
