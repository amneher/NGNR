"use server";

import ObjectID from "bson-objectid";
import prisma from "@/app/utils/db";
import { z } from "zod";
import { redirect } from "next/navigation";
import { getArticle } from "@/app/utils/loadData";
import { Article, Tag } from "@/app/models/article";

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
  const articleID = new ObjectID().toHexString();
  await prisma.article.create({
    data: {
      id: articleID,
      image: data.image,
      title: data.title,
      createDate: data.createDate,
      description: data.description,
      content: data.content,
    },
  });

  const { tagsToCreate, existingTags } = await sortTags(data.tags)

  for (let index = 0; index < existingTags.length; index++) {
    const element = existingTags[index];
    await updateTagArticleIDs(element, [articleID])
  }

  const tagList = await newTags(tagsToCreate, articleID)

  const article = await getArticle(articleID);

  const result = await updateArticleTagIDs(tagList, existingTags, article)

  console.log(result);

  if (result.id) {
    return redirect("/");
  } else {
    return redirect("#")
  }
}

const sortTags = async (tags: string) => {
  const tagList = tags.split("; ")
  let tagsToCreate: string[] = [];
  let existingTags: Tag[] = [];
  for (let index = 0; index < tagList.length; index++) {
    const element = tagList[index];
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
  return { "tagsToCreate": tagsToCreate, "existingTags": existingTags }
}

const newTags = async (tagsToCreate: string[], articleID: string) => {
  const tagList = tagsToCreate.map(tag => {
    return {
      id: new ObjectID().toHexString(),
      value: tag,
      articleIDs: [articleID],
    };
  });

  if (tagList.length > 0) {
    await prisma.tag.createMany({
      data: tagList,
    });
  }
  return tagList;
}

const updateArticleTagIDs = async (tagList: Tag[], existingTags: Tag[], article: Article) => {
  let tagIDs = [];

  for (let index = 0; index < tagList.length; index++) {
    const element = tagList[index];
    tagIDs.push(element.id)    
  }

  for (let index = 0; index < existingTags.length; index++) {
    const element = existingTags[index];
    tagIDs.push(element.id);
  }

  for (let index = 0; index < article.tagIDs.length; index++) {
    const tagID = article.tagIDs[index];
    tagIDs.push(tagID);
  }

  const result = await prisma.article.update({
    where: {
      id: article.id,
    },
    data: {
      tagIDs: tagIDs,
    },
  });
  return result
}

const updateTagArticleIDs = async (tag: Tag, articleIDs: string[]) => {
  let allIDs = tag.articleIDs;
  for (let index = 0; index < articleIDs.length; index++) {
    const element = articleIDs[index];
    allIDs.push(element)    
  }
  const result = await prisma.tag.update({
    where: {
      id: tag.id
    },
    data: {
      articleIDs: allIDs
    }
  })
  return result;
}