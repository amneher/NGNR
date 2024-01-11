import ColumnPageContainer from "@/app/components/ColumnPageContainer"


export default async function resumePage() {
    return (
        <ColumnPageContainer columns={1}>
        <h2 className={`m-2 text-1xl font-semibold`}>My CV</h2>
        </ColumnPageContainer>
    )
}