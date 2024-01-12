import type { NextAuthOptions } from 'next-auth'
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import Email from "next-auth/providers/email";
import Github from "next-auth/providers/github";
import prisma from "@/app/utils/db";


export const options: NextAuthOptions = {
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
}