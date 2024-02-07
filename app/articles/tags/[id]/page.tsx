import ColumnPageContainer from "@/app/components/ColumnPageContainer";
import Card from "@/app/components/Card";
import { fetchArticlePages, getArticlesByTagID } from "@/app/utils/loadData";
import Pagination from "@/app/components/Pagination";

export default async function TagArticlesPage({
  id,
  searchParams,
}: {
  id: string;
  searchParams?: { query?: string; page?: string };
}) {
  // a util function to get related articles
  const query: string = searchParams?.query || "";
  const currentPage: number = Number(searchParams?.page) || 1;
  const totalPages: number = await fetchArticlePages(query);
  const articles = await getArticlesByTagID(id);
  // a page to display related articles
  return (
    <>
      <ColumnPageContainer columns={1}>
        {articles.map((article) => {
          article.actions ? article.actions.push("homeLimit") : article.actions;
          return (
            <div key={article.id}>
              <Card
                id={article.id}
                image={article.image}
                title={article.title}
                slug={article.slug}
                description={article.description}
                teaser={article.teaser}
                createDate={article.createDate}
                content={article.content}
                actions={article.actions}
                tagIDs={article.tagIDs}
                tags={article.tags}
                authorID={article.authorID}
                author={article.author}
              />
            </div>
          );
        })}
      </ColumnPageContainer>
      {totalPages > 1 && (
        <div className="max-md:hidden items-center my-8 relative flex flex-col">
          <Pagination totalPages={totalPages} />
        </div>
      )}
    </>
  );
}
