import prisma from "./db";
import { unstable_noStore as noStore } from "next/cache";
import { Article, Tag } from "../models/article";

export async function fetchFilteredArticles(
  query: string,
  currentPage: number
) {
  noStore();
  const perPage = 20;
  let foundArticles;
  if (query === "") {
    foundArticles = await prisma.article.findMany({
      skip: (currentPage - 1) * perPage,
      take: 20,
    });
  } else {
    foundArticles = await prisma.article.findMany({
      skip: (currentPage - 1) * perPage,
      take: 20,
      where: {
        OR: [
          {
            title: {
              contains: query,
            },
          },
          {
            description: {
              contains: query,
            },
          },
          {
            content: {
              contains: query,
            },
          },
          {
            tags: {
              some: {
                value: query,
              },
            },
          },
        ],
      },
    });
  }

  let articles = [];
  for (let index = 0; index < foundArticles.length; index++) {
    const element = await buildArticle(foundArticles[index]);
    articles.push(element);
  }
  return articles;
}

export async function fetchArticlePages(query: string) {
  noStore();
  const perPage = 20;
  let foundArticles;
  if (query === "") {
    foundArticles = await getAllArticles();
  } else {
    foundArticles = await prisma.article.findMany({
      where: {
        OR: [
          {
            title: {
              contains: query,
            },
          },
          {
            description: {
              contains: query,
            },
          },
          {
            content: {
              contains: query,
            },
          },
          {
            tags: {
              some: {
                value: query,
              },
            },
          },
        ],
      },
    });
  }
  const pages = Math.ceil(foundArticles.length / perPage);
  return pages;
}

export async function getAllArticles() {
  noStore();
  // gets all the articles, with related tags.
  const articleQuery = await prisma.article.findMany();
  let articles: Article[] = [];
  for (let index = 0; index < articleQuery.length; index++) {
    const element = await buildArticle(articleQuery[index]);
    articles.push(element);
  }
  return articles;
}

export async function getHomeArticles() {
  noStore();
  // gets all the articles, with related tags.
  const articleQuery = await prisma.article.findMany({
    where: {
      tags: {
        some: {
          value: "HomeContent",
        },
      },
    },
  });
  let articles: Article[] = [];
  for (let index = 0; index < articleQuery.length; index++) {
    const element = await buildArticle(articleQuery[index]);
    articles.push(element);
  }
  return articles;
}

export async function getArticle(slug: string) {
  noStore();
  // get an article by slug from the database and return it as an Article.
  const item = await prisma.article.findFirstOrThrow({
    where: {
      slug: slug,
    },
  });
  const article = await buildArticle(item);
  return article;
}

export async function getArticlesByTag(tag: string) {
  noStore();
  const items = await prisma.article.findMany({
    where: {
      tags: {
        some: {
          value: `${tag}`,
        },
      },
    },
  });
  let articles: Article[] = [];
  for (let index = 0; index < items.length; index++) {
    const element = await buildArticle(items[index]);
    articles.push(element);
  }
  return articles;
}

export async function getArticlesByTagID(tagID: string) {
  noStore();
  const items = await prisma.article.findMany({
    where: {
      tags: {
        some: {
          id: tagID,
        },
      },
    },
  });
  let articles: Article[] = [];
  for (let index = 0; index < items.length; index++) {
    const element = await buildArticle(items[index]);
    articles.push(element);
  }
  return articles;
}

export async function getTag(id: string) {
  noStore();
  const tag = await prisma.tag.findFirstOrThrow({
    where: {
      id: `${id}`,
    },
  });
  return tag;
}

export async function getTagsByArticleID(articleID: string) {
  noStore();
  const tags = await prisma.tag.findMany({
    where: {
      articles: {
        some: {
          id: `${articleID}`,
        },
      },
    },
  });
  const tagList = tags.map((tag) => buildTag(tag));
  return tagList;
}

const buildArticle = async (item: {
  id: string;
  image: string | null;
  title: string;
  slug: string;
  createDate: Date;
  description: string | null;
  content: string;
  actions: string[] | null;
  tagIDs: string[] | null;
}) => {
  const tags = await getTagsByArticleID(item.id);

  const article: Article = {
    id: item.id,
    image: item.image ? item.image : null,
    title: item.title,
    slug: item.slug,
    createDate: item.createDate,
    description: item.description ? item.description : null,
    content: item.content,
    actions: item.actions ? item.actions : null,
    tagIDs: item.tagIDs ? item.tagIDs : [],
    tags: tags,
  };
  return article;
};

const buildTag = (item: {
  id: string;
  slug: string;
  value: string;
  articleIDs?: string[];
}) => {
  const tag: Tag = {
    id: item.id,
    slug: item.slug,
    value: item.value,
    articleIDs: item.articleIDs ? item.articleIDs : [],
  };
  return tag;
};
