import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.product.createMany({
    data: [
      {
        title: "VELTRIX Runner X",
        description: "Premium running sneakers.",
        price: 2797,
        image:
          "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",
        category: "Running",
        gallery: [
          "/products/shoe1.jpeg",
          "/products/shoe2.jpeg",
          "/products/shoe3.jpeg",
        ],

        video: "/products/demo.mp4",
      },

      {
        title: "VELTRIX Street Low",
        description: "Luxury streetwear sneakers.",
        price: 999,
        image:
          "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=1200&auto=format&fit=crop",
        category: "Streetwear",
      },

      {
        title: "VELTRIX Retro High",
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
