import type { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import Github from "next-auth/providers/github";
import Cognito from "next-auth/providers/cognito";
import prisma from "@/app/utils/db";

export const options: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  providers: [
    Github({
      clientId: process.env.NGNR_GITHUB_ID as string,
      clientSecret: process.env.NGNR_GITHUB_SECRET as string,
    }),
    Cognito({
      clientId: process.env.COGNITO_CLIENT_ID as string,
      clientSecret: process.env.COGNITO_CLIENT_SECRET as string,
      issuer: `https://cognito-idp.${process.env.DEFAULT_REGION}.amazonaws.com/${process.env.COGNITO_USER_POOL_ID}`,
    }),
  ],
};
