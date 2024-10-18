import prisma from "@/lib/prisma";
import Drafts from "@/components/drafts.component";

export default async function Draft() {
  const getDrafts = async () => {
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
    return {
      props: { drafts },
    };
  };
  const { props } = await getDrafts();
  
  return (
    <div>
      <Drafts props={props}/>
    </div>
  );
}
