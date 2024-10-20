"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { CustomStyledBtn } from "@/app/styling/styled-components/page";

export default function BtnPublish({ params }: { params: { id: string } }) {
  const router = useRouter();

  async function publishPost(id: string): Promise<void> {
    await fetch(`/api/publish/${id}`, {
      method: "PUT",
    });
    await router.push("/");
  }

  return (
    <div>
      <CustomStyledBtn onClick={() => publishPost(params.id)}>
        Publish
      </CustomStyledBtn>
    </div>
  );
}
