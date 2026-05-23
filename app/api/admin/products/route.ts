// import { prisma } from "@/src/lib/prisma";

// export async function POST(req: Request) {
//   try {
//     const body = await req.json();

//     const { title, price, image, category, description } = body;

//     const product = await prisma.product.create({
//       data: {
//         title,
//         price,
//         image,
//         category,
//         description,
//       },
//     });

//     return Response.json(product);
//   } catch (error) {
//     console.log(error);

//     return new Response("Failed to create product", {
//       status: 500,
//     });
//   }
// }

import { NextResponse } from "next/server";

import { prisma } from "@/src/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const product = await prisma.product.create({
      data: {
        title: body.title,
        description: body.description,
        image: body.image,
        category: body.category,
        price: body.price,
      },
    });

    return NextResponse.json(product);
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        error: "Something went wrong",
      },
      {
        status: 500,
      },
    );
  }
}
