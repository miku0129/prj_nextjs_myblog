import prisma from "@/lib/prisma";
import Drafts from "@/components/drafts.component";

export default async function Draft() {
  const drafts = await prisma.post.findMany({
    where: {
      author: { email: process.env.SAMPLE_USER_EMAIL },
      published: false,
    },
    include: {
      author: {
        select: { name: true },
      },
    },
  });

  return (
    <div>
      <Drafts drafts={drafts} />
    </div>
  );
}
