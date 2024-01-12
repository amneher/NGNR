import { PrismaAdapter } from "@next-auth/prisma-adapter";
import Email from "next-auth/providers/email";
import Github from "next-auth/providers/github";
import prisma from "@/app/utils/db";
import NextAuth from "next-auth/next";

export const {
    handlers: { GET, POST },
    auth, 
} = NextAuth({
    adapter: PrismaAdapter(prisma),
    session: { strategy: "database"},
    providers: [
        Github({
            clientId: process.env.NGNR_GITHUB_ID as string,
            clientSecret: process.env.NGNR_GITHUB_SECRET as string
        }),
        Email({
            server: process.env.EMAIL_SERVER,
            from: process.env.EMAIL_FROM
        })
    ]
})