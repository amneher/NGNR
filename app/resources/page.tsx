import ColumnPageContainer from "../components/ColumnPageContainer";


export default async function resourcePage() {
    return (
        <ColumnPageContainer columns={1}>
        <h2 className={`m-2 text-1xl font-semibold`}>Resources</h2>
        </ColumnPageContainer>
    )
}