import ColumnPageContainer from "@/app/components/ColumnPageContainer";


export default function GalleryDetail(slug:string) {
    
    return (
        <ColumnPageContainer columns={1}>
        <h2 className={`m-2 text-1xl font-semibold h-screen`}>Gallery Detail</h2>
        </ColumnPageContainer>
    )
}