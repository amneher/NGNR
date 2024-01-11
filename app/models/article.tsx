
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
    key: string,
    value: string,
    articleIDs: string[]
}