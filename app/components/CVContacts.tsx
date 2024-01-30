import { ContactItem } from "@/app/models/resume"


const CVContacts = ({ contacts }: { contacts: ContactItem[] | null }) => {
    return (
        <div>
            <ul>{contacts && contacts.map(item => {
                return (<li key={item.id}>
                    <p>{item.name}: {item.value}</p>
                </li>)
            })}</ul>
        </div>
    )
}

export default CVContacts;