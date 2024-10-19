"use client";

import React from "react";
import { useRouter } from "next/navigation";

type BtnTypes = {
  [key: string]: string;
};
type LinkTypes = {
  [key: string]: string;
};
const BTN_TYPES: BtnTypes = {
  create: "create",
  home: "home",
  drafts: "drafts",
};
const LINK_TYPES: LinkTypes = {
  create: "create",
  home: "/",
  drafts: "drafts",
};

export default function Hyperlink({ btntype }: { btntype: string }) {
  const router = useRouter();
  const btn_type = btntype;

  return (
    <div>
      <a
        className="hyperlink-btn"
        href="#"
        onClick={() => router.push(`/${LINK_TYPES[btn_type]}`)}
      >
        {BTN_TYPES[btn_type].toUpperCase()}
      </a>
      <style jsx>{`
        .hyperlink-btn {
          margin-left: 1rem;
        }
      `}</style>
    </div>
  );
}
