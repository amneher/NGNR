
export interface Resume {
    id: string
    name: string
    createDate: Date
    photoURL: string | null
    contact: ContactItem[] | null
    intro: string | null
    experience: ResumeItem[] | null
}

export interface ResumeItem {
    id: string
    include: boolean
    title: string
    company: string
    startDate: Date
    endDate: Date | null
    description: string | null
    items: string[]
}

export interface ContactItem {
    id: string
    name: string
    value: string
    include: boolean
}