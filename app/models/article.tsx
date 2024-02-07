import { Author } from "@/app/models/author";

export interface Article {
  id: string;
  heroImage: string;
  title: string;
  slug: string;
  createDate: Date;
  description: string | null;
  teaser: string;
  content: string;
  actions: string[] | null;
  tagIDs: string[];
  tags: Tag[] | null;
  typeFolder: string;
  author: Author | undefined;
  authorID: string | undefined;
}

export interface Tag {
  id: string;
  slug: string;
  value: string;
  articleIDs: string[];
}
