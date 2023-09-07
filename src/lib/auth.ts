import { PrismaAdapter } from "@next-auth/prisma-adapter";
import GitHubProvider from "next-auth/providers/github";
import { prisma } from "@/lib/prisma";

export const authOptions = {
  // strategy: "jwt",
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
  ],
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_PUBLIC_SECRET,
  callbacks: {
    session: ({ session, user }) => {
      // console.log("Session Callback", { session, user });
      return {
        ...session,
        user: {
          ...session.user,
          id: user.id,
          // randomKey: token.randomKey,
        },
      };
    },
  },
};
