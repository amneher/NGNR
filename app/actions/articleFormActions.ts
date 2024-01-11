"use server";

import ObjectID from "bson-objectid";
import prisma from "@/app/utils/db";
import { z } from "zod";
import { redirect } from "next/navigation";
import { getArticle } from "@/app/utils/loadData";

export async function CreateArticle(formData: FormData) {
  const schema = z.object({
    image: z.string(),
    title: z.string().min(1),
    createDate: z.string().min(1),
    description: z.string(),
    content: z.string().min(1),
    tags: z.string(),
  });
  const parse = schema.safeParse({
    image: formData.get("image"),
    title: formData.get("title"),
    createDate: new Date().toISOString(),
    description: formData.get("description"),
    content: formData.get("content"),
    tags: formData.get("tags"),
  });

  if (!parse.success) {
    return { message: "Failed to create article." };
  }

  const data = parse.data;
  const tags = data.tags.split("; ");
  const articleID = new ObjectID().toHexString();
  const result = await prisma.article.create({
    data: {
      id: articleID,
      image: data.image,
      title: data.title,
      createDate: data.createDate,
      description: data.description,
      content: data.content,
    },
  });
  const tagList = tags.map((tag) => {
    return {
      key: new ObjectID().toHexString(),
      value: tag,
      articleIDs: [articleID],
    };
  });
  await prisma.tag.createMany({
    data: tagList,
  });
  const article = await getArticle(articleID);
  const tagIDs = tagList.map((tag) => {
    return tag.key;
  });
  for (let index = 0; index < tagIDs.length; index++) {
    const tagID = tagIDs[index];
    article.tagIDs.push(tagID);
  }
  const updateArticleTagIDs = await prisma.article.update({
    where: {
      id: article.id,
    },
    data: {
      tagIDs: article.tagIDs,
    },
  });
  console.log(updateArticleTagIDs);
  if (result.id) {
    return redirect("/");
  }
}
