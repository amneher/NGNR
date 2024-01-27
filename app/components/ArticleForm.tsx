'use client'

import { CreateArticle } from "@/app/actions/articleFormActions";
import SubmitButton from "@/app/components/SubmitButton";
import { Editor } from "novel";


export default function ArticleForm() {
    return (
        <form action={CreateArticle} className="justify-center my-2 bg-stone-400 dark:bg-stone-600 text-neutral rounded-box shadow py-4">
            <h2 className="text-2xl font-semibold my-2">Create A New Article</h2>
            <input type="text" name="title" placeholder="Title" className="input input-bordered input-secondary w-full max-w-xs md:max-w-2xl my-2" />
            <input type="text" name="slug" placeholder="Slug" className="input input-bordered input-secondary w-full max-w-xs md:max-w-2xl my-2" />
            <input type="text" name="image" placeholder="Image Address" className="input input-bordered input-secondary w-full max-w-xs md:max-w-2xl my-2" />
            
            <input type="text" name="description" placeholder="Description" className="input input-bordered input-secondary w-full max-w-xs md:max-w-2xl my-2" />
        
            <textarea name="content" className="hidden" placeholder="Content">{}</textarea>
            <Editor aria-label="editor" defaultValue="Type here..." className="textarea textarea-secondary w-full max-w-xs md:max-w-2xl my-2"/>
            <input type="text" name="tags" placeholder="Add tags separated by a semicolon." className="input input-bordered input-secondary w-full max-w-xs md:max-w-2xl my-2" />
            <br />
            <SubmitButton />
        </form>
    )
}