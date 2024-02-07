import { Author } from "./author"

export interface Gallery {
    id: string
    slug: string
    heroImage: string
    title: string
    createDate: Date
    description: string
    s3folder: string
    items: string[]
    typeFolder: string
    authorID: string
    author: Author | null
}