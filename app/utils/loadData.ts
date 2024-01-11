import prisma from "./db";
import { Article, Tag } from "../models/article";

export async function getAllArticles() {
  // gets all the articles, with related tags.
  const articleQuery = await prisma.article.findMany();
  let articles: Article[] = [];
  for (let index = 0; index < articleQuery.length; index++) {
    const element = await buildArticle(articleQuery[index]);
    articles.push(element)
  }
  return articles;
}

export async function getArticle(id: string) {
  // get an article by id from the database and return it as an Article.
  const item = await prisma.article.findFirstOrThrow({
    where: {
      id: `${id}`,
    },
  });
  const article = await buildArticle(item);
  return article;
}

export async function getArticlesByTag(tag:string) {
  const items = await prisma.article.findMany({
    where: {
        tags: {
            some: {
                value: `${tag}`
            }
        }
    }
  })
  let articles: Article[] = [];
  for (let index = 0; index < items.length; index++) {
    const element = await buildArticle(items[index]);
    articles.push(element)
  }
  return articles;
}

export async function getTag(id: string) {
  const tag = await prisma.tag.findFirstOrThrow({
    where: {
      key: `${id}`
    }
  })
  return tag
}

export async function getTagsByArticleID(articleID: string) {
  const tags = await prisma.tag.findMany({
    where: {
      articles: {
        some: {
          id: `${articleID}`
        }
      }
    }
  });
  const tagList = tags.map(tag => buildTag(tag))
  return tagList;
}

const buildArticle = async (item: {
  id: string;
  image: string | null;
  title: string;
  createDate: Date;
  description: string | null;
  content: string;
  actions: string[] | null;
  tagIDs: string[] | null;
}) => {

  const tags = await getTagsByArticleID(item.id);

  const article: Article = {
    id: item.id,
    image: item.image ? item.image : undefined,
    title: item.title,
    createDate: item.createDate,
    description: item.description ? item.description : undefined,
    content: item.content,
    actions: item.actions ? item.actions : undefined,
    tagIDs: item.tagIDs ? item.tagIDs : [],
    tags: tags,
  };
  return article;
};

const buildTag = (item: {key: string, value: string, articleIDs?: string[]}) => {
  const tag: Tag = {
    key: item.key,
    value: item.value,
    articleIDs: item.articleIDs ? item.articleIDs : []
  }
  return tag;
}