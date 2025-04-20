const { PrismaClient } = require("../lib/generated/prisma");
const db = new PrismaClient();

async function main() {
  try {
    await db.category.createMany({
      data: [
        { name: "Famous people" },
        { name: "Movies & TV" },
        { name: "Musicians" },
        { name: "Games" },
        { name: "Animals" },
        { name: "Philosophy" },
        { name: "Scientists" },
      ],
    });
  } catch (error) {
    console.error("error seeding default categories", error);
  } finally {
    db.$disconnect();
  }
}

main();
