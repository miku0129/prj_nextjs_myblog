"use client";

import React from "react";
import ItemPost from "./item-post.component";
import Hyperlink from "./hyperlink.component";
import { CustomStylelistLayout } from "@/styling/styled-components/page";
import styles from "./../styling/css-modules/styles.module.css";

const Drafts: React.FC<{ drafts: Post[] }> = ({ drafts }) => {
  return (
    <div className={styles.base}>
      <Hyperlink btntype="home" />
      <h1>My Drafts</h1>
      <main>
        <CustomStylelistLayout>
          {drafts.map((post) => (
            <div key={post.id} className="drafts">
              <ItemPost post={post} />
            </div>
          ))}
        </CustomStylelistLayout>
      </main>
      <style jsx>{`
        .drafts {
          padding: 0.5rem;
          background: white;
        }
        .drafts:hover {
          background: aliceblue;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default Drafts;
