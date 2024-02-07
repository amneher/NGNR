import ColumnPageContainer from "@/app/components/ColumnPageContainer";
import Pagination from "../components/Pagination";
import { fetchGalleryPages } from "@/app/utils/loadData";
import GalleryList from "@/app/components/GalleryList";

export default async function GalleryPage({
  searchParams,
}: {
  searchParams?: { query?: string; page?: string };
}) {
  // get all articles
  const query: string = searchParams?.query || "";
  const currentPage: number = Number(searchParams?.page) || 1;
  const totalPages: number = await fetchGalleryPages(query);

  return (
    <>
      <ColumnPageContainer columns={1}>
        <h2 className={`m-2 text-1xl font-semibold`}>Galleries</h2>
        <div className="divider divider-primary"/>
        <GalleryList query={query} currentPage={currentPage} />
      </ColumnPageContainer>
      {totalPages > 1 && (
        <div className="max-md:hidden items-center my-8 relative flex flex-col">
          <Pagination totalPages={totalPages} />
        </div>
      )}
    </>
  );
}
