"use client";

import React from "react";
import { useRouter } from "next/navigation";

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
      <button onClick={() => deletePost(params.id)}>Delete</button>
    </div>
  );
}
