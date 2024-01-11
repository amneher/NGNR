'use client'

import { CreateArticle } from "@/app/actions/articleFormActions";
import SubmitButton from "@/app/components/SubmitButton";


export default function ArticleForm() {
    return (
        <form action={CreateArticle} className="justify-center my-2">
            <h2 className="text-2xl font-semibold my-2">Create A New Article</h2>
            <input type="text" name="title" placeholder="Title" className="input input-bordered input-primary w-full max-w-xs md:max-w-2xl my-2" />
            
            <input type="text" name="image" placeholder="Image Address" className="input input-bordered input-primary w-full max-w-xs md:max-w-2xl my-2" />
            
            <input type="text" name="description" placeholder="Description" className="input input-bordered input-primary w-full max-w-xs md:max-w-2xl my-2" />
        
            <textarea name="content" className="textarea textarea-primary w-full max-w-xs md:max-w-2xl my-2" placeholder="Content"></textarea>
        
            <input type="text" name="tags" placeholder="Add tags separated by a semicolon." className="input input-bordered input-primary w-full max-w-xs md:max-w-2xl my-2" />
            <br />
            <SubmitButton />
        </form>
    )
}