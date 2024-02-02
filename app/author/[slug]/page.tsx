import ColumnPageContainer from "@/app/components/ColumnPageContainer";


export default async function AuthorDetailPage() {
    return (
        <ColumnPageContainer columns={1}>
        <h2 className={`m-2 text-1xl font-semibold h-screen`}>Author Details</h2>
        </ColumnPageContainer>
    )
}