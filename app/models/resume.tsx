
export interface Resume {
    id: string
    name: string
    photoURL: string | null
    contact: ContactItem[]
    intro: string | null
    experience: ResumeItems[]
}

export interface ResumeItems {
    id: string
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
}