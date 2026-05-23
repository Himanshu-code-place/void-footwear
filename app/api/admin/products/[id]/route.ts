// import { NextResponse } from "next/server";

// import { prisma } from "@/src/lib/prisma";

// export async function GET(
//   req: Request,
//   {
//     params,
//   }: {
//     params: Promise<{
//       id: string;
//     }>;
//   },
// ) {
//   const { id } = await params;

//   const product = await prisma.product.findUnique({
//     where: { id },
//   });

//   return NextResponse.json(product);
// }

// export async function PUT(
//   req: Request,
//   {
//     params,
//   }: {
//     params: Promise<{
//       id: string;
//     }>;
//   },
// ) {
//   try {
//     const { id } = await params;

//     const body = await req.json();

//     const updated = await prisma.product.update({
//       where: { id },
//       data: {
//         title: body.title,
//         description: body.description,
//         image: body.image,
//         category: body.category,
//         price: body.price,
//       },
//     });

//     return NextResponse.json(updated);
//   } catch (error) {
//     console.log(error);

//     return NextResponse.json(
//       {
//         error: "Update failed",
//       },
//       {
//         status: 500,
//       },
//     );
//   }
// }

import { NextResponse } from "next/server";

import { prisma } from "@/src/lib/prisma";

export async function GET(
  req: Request,
  {
    params,
  }: {
    params: Promise<{
      id: string;
    }>;
  },
) {
  const { id } = await params;

  const product = await prisma.product.findUnique({
    where: {
      id,
    },
  });

  return NextResponse.json(product);
}

export async function PUT(
  req: Request,
  {
    params,
  }: {
    params: Promise<{
      id: string;
    }>;
  },
) {
  try {
    const { id } = await params;

    const body = await req.json();

    const updated = await prisma.product.update({
      where: {
        id,
      },

      data: {
        title: body.title,

        description: body.description,

        image: body.image,

        category: body.category,

        price: body.price,
      },
    });

    return NextResponse.json(updated);
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        error: "Update failed",
      },
      {
        status: 500,
      },
    );
  }
}
