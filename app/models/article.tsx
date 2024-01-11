
export interface Article {
    id: string,
    image?: string,
    title: string,
    createDate: Date,
    description?: string,
    content: string,
    actions?: string[],
    tagIDs: string[],
    tags?: Tag[]
}

export interface Tag {
    id: string,
    value: string,
    articleIDs: string[]
}