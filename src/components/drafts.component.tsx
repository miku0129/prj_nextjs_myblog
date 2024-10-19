"use client";
import React from "react";
import ItemPost from "./item-post.component";
import BtnHyperlink from "./btn-hyperlink.component";

const Drafts: React.FC<{ props: { drafts: Post[] } }> = ({ props }) => {
  return (
    <div>
      <div className="page">
        <h1>My Drafts</h1>
        <BtnHyperlink btntype="home" />
        <main>
          {props.drafts.map((post) => (
            <div key={post.id} className="post">
              <ItemPost post={post} />
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
