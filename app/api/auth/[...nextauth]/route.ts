// import NextAuth from "next-auth";

// import CredentialsProvider from "next-auth/providers/credentials";

// import { prisma } from "@/src/lib/prisma";

// import bcrypt from "bcryptjs";

// export const authOptions: any = {
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",

//       credentials: {
//         email: {},
//         password: {},
//       },

//       async authorize(credentials) {
//         if (!credentials?.email || !credentials?.password) {
//           return null;
//         }

//         const user = await prisma.user.findUnique({
//           where: {
//             email: credentials.email,
//           },
//         });

//         if (!user) {
//           return null;
//         }

//         const passwordMatch = await bcrypt.compare(
//           credentials.password,
//           user.password,
//         );

//         if (!passwordMatch) {
//           return null;
//         }

//         return {
//           id: user.id,
//           name: user.name,
//           email: user.email,
//           role: user.role,
//         };
//       },
//     }),
//   ],

//   session: {
//     strategy: "jwt",
//   },

//   jwt: {
//     secret: process.env.NEXTAUTH_SECRET,
//   },

//   callbacks: {
//     async jwt({ token, user }: any) {
//       if (user) {
//         token.email = user.email;
//       }

//       return token;
//     },

//     async session({ session, token }: any) {
//       if (session.user) {
//         session.user.email = token.email;
//       }

//       return session;
//     },
//   },

//   secret: process.env.NEXTAUTH_SECRET,
// };

// const handler = NextAuth(authOptions);

// export { handler as GET, handler as POST };

import NextAuth, { type NextAuthOptions, type Session } from "next-auth";
import { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/src/lib/prisma";
import bcrypt from "bcryptjs";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!user) {
          return null;
        }

        const passwordMatch = await bcrypt.compare(
          credentials.password,
          user.password,
        );

        if (!passwordMatch) {
          return null;
        }

        return {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
        };
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },

  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },

  callbacks: {
    async jwt({ token, user }: { token: JWT; user?: any }) {
      if (user) {
        token.email = user.email;
        token.role = user.role;
      }
      return token;
    },

    async session({
      session,
      token,
    }: {
      session: Session;
      token: JWT;
    }): Promise<Session> {
      if (session.user) {
        session.user.email = token.email as string;
        (session.user as any).role = token.role;
      }
      return session;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
