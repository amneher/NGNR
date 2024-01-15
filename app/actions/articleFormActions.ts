"use server";

import ObjectID from "bson-objectid";
import prisma from "@/app/utils/db";
import { z } from "zod";
import { redirect } from "next/navigation";
import { getArticle } from "@/app/utils/loadData";
import { Tag } from "@/app/models/article";

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
  let tagsToCreate: string[] = [];
  let existingTags: Tag[] = [];
  async () => {
    for (let index = 0; index < tags.length; index++) {
      const element = tags[index];
      const tag = await prisma.tag.findFirst({
        where: {
          value: element,
        },
      });
      if (tag) {
        existingTags.push(tag);
      } else {
        tagsToCreate.push(element);
      }
    }
  };

  const tagList = tagsToCreate.map((tag) => {
    return {
      id: new ObjectID().toHexString(),
      value: tag,
      articleIDs: [articleID],
    };
  });

  if (tagList) {
    await prisma.tag.createMany({
      data: tagList,
    });
  }

  const article = await getArticle(articleID);

  let tagIDs = tagList.map((tag) => {
    return tag.id;
  });

  for (let index = 0; index < existingTags.length; index++) {
    const element = existingTags[index];
    tagIDs.push(element.id);
  }

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
  } else {
    return redirect("#")
  }
}
