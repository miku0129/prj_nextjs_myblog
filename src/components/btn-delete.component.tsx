"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { CustomStyledBtn } from "@/app/styling/styled-components/page";

export default function BtnDelete({ params }: { params: { id: string } }) {
  const router = useRouter();

  async function deletePost(id: string): Promise<void> {
    await fetch(`/api/posts/${id}`, {
      method: "DELETE",
      body: id,
    });
    await router.push("/");
  }

  return (
    <div>
      <CustomStyledBtn onClick={() => deletePost(params.id)}>
        Delete
      </CustomStyledBtn>
    </div>
  );
}
