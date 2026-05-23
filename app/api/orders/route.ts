import { NextResponse } from "next/server";

import { prisma } from "@/src/lib/prisma";

import { getServerSession } from "next-auth";

import { authOptions } from "../auth/[...nextauth]/route";

export async function GET() {
  try {
    const session = await getServerSession(authOptions) as { user?: { email?: string } } | null;
    console.log(session);

    if (!session?.user?.email) {
      return NextResponse.json(
        {
          error: "Unauthorized",
        },
        {
          status: 401,
        },
      );
    }

    const orders = await prisma.order.findMany({
      where: {
        userEmail: session.user.email,
      },

      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(orders);
  } catch (error) {
    return NextResponse.json(
      {
        error: "Failed to fetch orders",
      },
      {
        status: 500,
      },
    );
  }
}
