'use server';

import { z } from "zod";
import { redirect } from "next/navigation";

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