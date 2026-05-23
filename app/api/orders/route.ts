import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/src/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

interface SessionUser {
  email?: string;
  name?: string;
  role?: string;
}

interface CustomSession {
  user?: SessionUser;
  expires?: string;
}

export async function GET(req: NextRequest) {
  try {
    const session = (await getServerSession(
      authOptions,
    )) as CustomSession | null;

    console.log("Session data:", session);

    // Type-safe email check
    const userEmail = session?.user?.email;

    if (!userEmail) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const orders = await prisma.order.findMany({
      where: {
        userEmail: userEmail,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(orders);
  } catch (error) {
    console.error("Orders fetch error:", error);
    return NextResponse.json(
      { error: "Failed to fetch orders" },
      { status: 500 },
    );
  }
}
