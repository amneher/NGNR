import Link from "next/link";
import React from "react";
import { Article } from "@/app/models/article";
import Imgix from "react-imgix";
import Tag from "@/app/components/Tag";
import { Author } from "../models/author";

const Card = ({
  id,
  image,
  title,
  slug,
  typeFolder,
  description,
  altText,
  createDate,
  content,
  actions,
  tags,
}: {
    id: string,
    image?: string | null,
    title: string,
    slug: string,
    typeFolder: string,
    description?: string | null,
    altText?: string | null,
    createDate: Date,
    content?: string | null,
    actions?: string[] | null,
    tags?: any[] | null,
    author?: Author | null,
    authorID?: string | null
}) => {
  const default_width = 800;
  const default_height = 800;

  let contentTrunc = false;
  if (actions && actions.find((x) => x === "homeLimit")) {
    contentTrunc = true;
  }

  return (
    <div
      className="card bg-secondary dark:bg-neutral text-base-content dark:text-neutral-content rounded-box border border-transparent shadow-lg  m-2 hover:shadow-slate-950"
      id={id}
      aria-label={`card-${id}`}
    >
      <Link href={`/${typeFolder}/${slug}`} aria-label={`main-${id}-link`}>
        {image ? (
          <figure>
            <Imgix
              src={image}
              sizes="80vw"
              className="rounded-box w-full"
              aria-label={`image-${id}`}
              imgixParams={{ ar: "4:5", fit: "crop" }}
            />
          </figure>
        ) : (
          <span aria-label={`noImage-${id}`}></span>
        )}
      </Link>
      <div className="card-body" aria-label={`body-${id}`}>
      <Link href={`/${typeFolder}/${slug}`} aria-label={`main-${id}-link`}>
        <h2
          className="card-title font-semibold justify-center text-neutral dark:text-neutral-content"
          aria-label={`title-${id}`}
        >
          {title}
        </h2>
        </Link>
        {description ? (
          <h3 className="opacity-50 font-mono" aria-label={`description-${id}`}>
            {description}
          </h3>
        ) : (
          <span aria-label={`noDescription-${id}`}></span>
        )}
        <h3 className="opacity-50 font-mono" aria-label={`createDate-${id}`}>
          {createDate.toDateString()}
        </h3>
        <div className="divider"></div>
        {contentTrunc ? (
          <p aria-label={`altText-${id}`} className="font-mono">
            {altText}
          </p>
        ) : (
          <p aria-label={`content-${id}`} className="font-mono">
            {content}
          </p>
        )}
        <br />
        {tags && tags.length ? (
          <div
            className="card-actions justify-center"
            aria-label={`withTags-${id}`}
          >
            <h3 className="opacity-50">Tags:</h3>
            {tags.map((tag) => {
              return (
                <Tag
                  key={tag.id}
                  id={tag.id}
                  slug={tag.slug}
                  value={tag.value}
                  articleIDs={tag.articleIDs}
                />
              );
            })}
          </div>
        ) : (
          <div
            className="card-actions justify-center"
            aria-label={`withoutTags-${id}`}
          >
            <h3 className="opacity-50">Tags: N/A</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
