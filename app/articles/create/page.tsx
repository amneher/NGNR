'use client'

import { useFormStatus } from "react-dom"
import { CreateArticle } from "@/app/actions/articleFormActions"


function SubmitButton() {
    const { pending } = useFormStatus()
  
    return (
      <button type="submit" className="btn btn-wide btn-primary" aria-disabled={pending}>
        Submit
      </button>
    )
  }

export default function ArticleForm() {
    
    return (
            <div className="container mx-auto place-content-center bg-base-100 shadow-lg min-h-96 max-w-xl py-12 md:max-w-4xl grid grid-cols-1 gap-y-2">
              <h2 className="text-2xl font-semibold">Create A New Article</h2>
              <form action={CreateArticle} className="justify-center">
                <div className="label">
                    <span className="label-text">Title</span>
                </div>
                <input type="text" name="title" placeholder="Type Here" className="input input-bordered input-primary w-full max-w-xs md:max-w-2xl" />
                <div className="label">
                    <span className="label-text">Image Address</span>
                </div>
                <input type="text" name="image" placeholder="Type Here" className="input input-bordered input-primary w-full max-w-xs md:max-w-2xl" />
                <div className="label">
                    <span className="label-text">Description</span>
                </div>
                <input type="text" name="description" placeholder="Type Here" className="input input-bordered input-primary w-full max-w-xs md:max-w-2xl" />
                <div className="label">
                    <span className="label-text">Content</span>
                </div>
                <textarea name="content" className="textarea textarea-primary w-full max-w-xs md:max-w-2xl" placeholder="Content"></textarea>
                <div className="label">
                    <span className="label-text">Tags</span>
                </div>
                <input type="text" name="tags" placeholder="Add tags separated by a semicolon." className="input input-bordered input-primary w-full max-w-xs md:max-w-2xl" />
                <div className="label"></div>
                <SubmitButton />
              </form>
            </div>
    )
}