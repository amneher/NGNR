"use server";

import { z, Schema } from "zod";
import ObjectID from "bson-objectid";
import prisma from "@/app/utils/db";
import { redirect } from "next/navigation";

export default async function AuthorCreateAction(formData: FormData) {
  const schema: Schema = z.object({
    slug: z.string(),
    title: z.string(),
    photoUrl: z.string().url(),
  });
  const parse = schema.safeParse({
    slug: formData.get("slug"),
    title: formData.get("title"),
    photoUrl: formData.get("photoUrl"),
  });
  if (!parse.success) {
    return { message: "Failed to create author." };
  }
  const data = parse.data;
  const authorID = new ObjectID().toHexString();
  const result = await prisma.author.create({
    data: {
        id: authorID,
        slug: data.slug,
        title: data.title,
        photoUrl: data.photoUrl
    }
  })
  if (result.id) {
    return redirect("/");
  } else {
    return redirect("#")
  }
}
