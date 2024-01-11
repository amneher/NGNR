
export interface Article {
    id: string,
    image: string | null,
    title: string,
    createDate: Date,
    description: string | null,
    content: string,
    actions: string[] | null,
    tagIDs: string[],
    tags: Tag[] | null
}

export interface Tag {
    id: string,
    value: string,
    articleIDs: string[]
}