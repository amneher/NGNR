import CVContacts from "@/app/components/CVContacts";
import CVExperience from "@/app/components/CVExperience";
import CVHeader from "@/app/components/CVHeader";
import ColumnPageContainer from "@/app/components/ColumnPageContainer"
import { Resume } from "@/app/models/resume";
import { getCurrentResume } from "@/app/utils/loadData"

export default async function resumePage() {
    let resume: Resume | undefined;
    try {
        resume = await getCurrentResume();
    } catch (NotFoundError) {
        resume = undefined;
    }
    
    if (resume) {
        return (
            <ColumnPageContainer columns={1}>
            <h2 className={`m-2 text-1xl font-semibold`}>My CV</h2>
            <CVHeader name={resume.name} photoURL={resume.photoURL} intro={resume.intro} />
            <CVContacts contacts={resume.contact} />
            <CVExperience experience={resume.experience} />
            </ColumnPageContainer>
        )
    } else {
        return (
            <ColumnPageContainer columns={1}>
                <h2 className={`m-2 text-1xl font-semibold`}>Oops! Couldn&apos;t find a resume to load...</h2>
            </ColumnPageContainer>
        )
    }
    
}