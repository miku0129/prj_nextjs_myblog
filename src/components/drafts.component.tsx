"use client";

import React from "react";
import ItemPost from "./item-post.component";
import Hyperlink from "./hyperlink.component";
import styles from "./../app/styling/css-modules/styles.module.css";

const Drafts: React.FC<{ props: { drafts: Post[] } }> = ({ props }) => {
  return (
    <div className={styles.base}>
      <Hyperlink btntype="home" />
      <h1>My Drafts</h1>
      <main>
        {props.drafts.map((post) => (
          <div key={post.id}>
            <ItemPost post={post} />
          </div>
        ))}
      </main>
    </div>
  );
};

export default Drafts;
