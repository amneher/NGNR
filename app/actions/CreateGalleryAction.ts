"use server";

import ObjectID from "bson-objectid";
import { z, Schema } from "zod";
import prisma from "@/app/utils/db";
import { redirect } from "next/navigation";

export default async function CreateGalleryAction(formData: FormData) {
  const schema: Schema = z.object({
    slug: z.string(),
    title: z.string(),
    description: z.string(),
    authorSlug: z.string(),
    s3folder: z.string(),
    items: z.string(),
  });
  const parse = schema.safeParse({
    slug: formData.get("slug"),
    title: formData.get("title"),
    description: formData.get("description"),
    authorSlug: formData.get("authorSlug"),
    s3folder: formData.get("s3folder"),
    items: formData.get("items"),
  });
  if (!parse.success) {
    return { message: "Failed to create gallery." };
  }
  const data = parse.data;
  const galleryId = new ObjectID().toHexString();
  const author = await prisma.author.findFirstOrThrow({
    where: {
      slug: data.authorSlug,
    },
  });
  const result = await prisma.gallery.create({
    data: {
      id: galleryId,
      slug: data.slug,
      title: data.title,
      createDate: new Date(),
      description: data.description,
      authorID: author.id,
      s3folder: data.s3folder,
      items: data.items.split("; "),
    },
  });
  if (result.id) {
    return redirect("/");
  } else {
    return redirect("#");
  }
}
