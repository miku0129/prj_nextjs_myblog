"use client";
import React from "react";
import ItemPost from "./item-post.component";
import Hyperlink from "./hyperlink.component";

const Drafts: React.FC<{ props: { drafts: Post[] } }> = ({ props }) => {
  return (
    <div className="base-layout">
      <Hyperlink btntype="home" />
      <h1>My Drafts</h1>
      <main>
        {props.drafts.map((post) => (
          <div key={post.id} className="drafts-mode">
            <ItemPost post={post} />
          </div>
        ))}
      </main>
      <style jsx>{`
        .drafts-mode {
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default Drafts;
