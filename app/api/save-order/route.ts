// import { NextResponse } from "next/server";

// import { prisma } from "@/src/lib/prisma";

// export async function POST(req: Request) {
//   try {
//     const body = await req.json();

//     const { userEmail, amount, status } = body;

//     const order = await prisma.order.create({
//       data: {
//         userEmail,
//         amount,
//         status,
//       },
//     });

//     return NextResponse.json(order);
//   } catch (error) {
//     return NextResponse.json(
//       { error: "Something went wrong" },
//       { status: 500 },
//     );
//   }
// }

import { NextResponse } from "next/server";

import { prisma } from "@/src/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { customerName, userEmail, amount, status, paymentId, products } =
      body;

    const order = await prisma.order.create({
      data: {
        customerName,
        userEmail,
        amount,
        status,
        paymentId,
        products,
      },
    });

    return NextResponse.json(order);
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { error: "Failed to save order" },
      { status: 500 },
    );
  }
}
