import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {

  await prisma.product.createMany({

    data: [

      {
        title: "VOID Runner X",
        description: "Premium running sneakers.",
        price: 999,
        image:
          "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",
        category: "Running",
      },

      {
        title: "VOID Street Low",
        description: "Luxury streetwear sneakers.",
        price: 999,
        image:
          "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=1200&auto=format&fit=crop",
        category: "Streetwear",
      },

      {
        title: "VOID Retro High",
        description: "Classic retro high tops.",
        price: 999,
        image:
          "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1200&auto=format&fit=crop",
        category: "Retro",
      },

    ],

  });

  console.log("Products seeded 🌱");
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });