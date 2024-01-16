import ColumnPageContainer from "@/app/components/ColumnPageContainer";
import ArticlesList from "@/app/components/ArticlesList";
import Pagination from "@/app/components/Pagination";
import { fetchArticlePages } from "@/app/utils/loadData";

export default async function AllArticles({ searchParams, }: { searchParams?: { query?: string; page?: string;}}) {
    // get all articles
    const query: string = searchParams?.query || '';
    const currentPage: number = Number(searchParams?.page) || 1;
    const totalPages: number = await fetchArticlePages(query)

    return (
        <ColumnPageContainer columns={1}>
            <ArticlesList query={query} currentPage={currentPage} />
            <div className="place-self-center mt-4">
                <Pagination totalPages={totalPages} />
            </div>
        </ColumnPageContainer>
    )
}