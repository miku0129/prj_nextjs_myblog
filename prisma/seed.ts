const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  const test_user = await prisma.user.upsert({
    where: { email: "ytaro@mail.com" },
    update: {},
    create: {
      email: "ytaro@mail.com",
      name: "Taro YAMADA",
      posts: {
        create: {
          title: "Hello world",
          content: "You are beautiful",
          published: true,
        },
      },
    },
  });
  console.log(`${test_user.name} is seeded!`);
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
