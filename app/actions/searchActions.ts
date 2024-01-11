'use server';

import prisma from "@/app/utils/db";
import { z } from "zod";
import { Tag } from "@/app/models/article";
import { redirect } from "next/navigation";
import { getArticle } from "@/app/utils/loadData";

export async function searchAction(formData: FormData) {
    const schema = z.object({
        search: z.string().min(1)
    })
    const parse = schema.safeParse({
        search: formData.get("search")
    })
    
    if (!parse.success) {
        // return { message: "Failed to parse search string." };
        redirect("/")
    }
    

}