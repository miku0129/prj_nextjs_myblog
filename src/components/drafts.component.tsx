"use client";
import React from "react";
import PostItem from "./post-item.component";
import HyperlinkBtn from "./hyperlink-button.component";

const Drafts: React.FC<{ props: { drafts: Post[] } }> = ({ props }) => {
  return (
    <div>
      <div className="page">
        <h1>My Drafts</h1>
        <HyperlinkBtn btntype="home"/>
        <main>
          {props.drafts.map((post) => (
            <div key={post.id} className="post">
              <PostItem post={post} />
            </div>
          ))}
        </main>
      </div>
      <style jsx>{`
        .post {
          background: gainsboro;
          transition: box-shadow 0.1s ease-in;
        }
        .post:hover {
          box-shadow: 1px 1px 3px #aaa;
        }
        .post + .post {
          margin-top: 2rem;
        }
      `}</style>
    </div>
  );
};

export default Drafts;
