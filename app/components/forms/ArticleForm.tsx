"use client";

import { CreateArticle } from "@/app/actions/articleFormActions";
import SubmitButton from "@/app/components/SubmitButton";

export default function ArticleForm() {
  return (
    <form
      action={CreateArticle}
      className="justify-center my-2 bg-base-200 dark:bg-neutral text-neutral dark:text-neutral-content rounded-box shadow py-4"
    >
      <h2 className="text-2xl font-semibold my-2">Create A New Article</h2>
      <input
        type="text"
        name="title"
        placeholder="Title"
        className="input input-bordered input-secondary dark:bg-neutral w-full max-w-xs md:max-w-2xl my-2"
      />
      <input
        type="text"
        name="slug"
        placeholder="Slug"
        className="input input-bordered input-secondary dark:bg-neutral w-full max-w-xs md:max-w-2xl my-2"
      />
      {/* Put a selector here for assigning the author. */}
      <input 
        type="text"
        name="author"
        placeholder="Author Slug"
        className="input input-bordered input-secondary dark:bg-neutral w-full max-w-xs md:max-w-2xl my-2"
      />
      <input
        type="text"
        name="image"
        placeholder="Image Address"
        className="input input-bordered input-secondary dark:bg-neutral w-full max-w-xs md:max-w-2xl my-2"
      />

      <input
        type="text"
        name="description"
        placeholder="Description"
        className="input input-bordered input-secondary dark:bg-neutral w-full max-w-xs md:max-w-2xl my-2"
      />
      <input
        type="text"
        name="teaser"
        placeholder="Teaser"
        className="input input-bordered input-secondary dark:bg-neutral w-full max-w-xs md:max-w-2xl my-2"
      />
      <textarea
        name="content"
        aria-label="content"
        placeholder="Type here..."
        className="textarea textarea-secondary dark:bg-neutral placeholder:text-neutral dark:placeholder:text-neutral w-full max-w-xs md:max-w-2xl my-2"
      />
      <input
        type="text"
        name="tags"
        placeholder="Add tags separated by a semicolon."
        className="input input-bordered input-secondary dark:bg-neutral w-full max-w-xs md:max-w-2xl my-2"
      />
      <br />
      <SubmitButton />
    </form>
  );
}
