// import { getServerSession } from 'next-auth'
// import Image from 'next/image'
// import { authOptions } from './utils/auth';
import { Article } from "./models/article";
import ColumnPageContainer from "./components/ColumnPageContainer";
import Card from "./components/Card";
import { fetchArticlePages, getHomeArticles, getHomeGalleries } from "./utils/loadData";
import Pagination from "./components/Pagination";
import { Gallery } from "./models/gallery";

export default async function Home({
  searchParams,
}: {
  searchParams?: { query?: string; page?: string };
}) {
  // const session = await getServerSession(authOptions);
  const homeArticles: Article[] = await getHomeArticles();
  const homeGalleries: Gallery[] = await getHomeGalleries();
  const homeItems: (Article | Gallery)[] = [...homeArticles, ...homeGalleries]
  const query: string = searchParams?.query || "";
  const currentPage: number = Number(searchParams?.page) || 1;
  const totalPages: number = await fetchArticlePages(query);

  return (
    <>
      <ColumnPageContainer columns={homeItems.length > 1 ? 2 : 1}>
        {homeItems &&
          homeItems.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              title={item.title}
              slug={item.slug}
              typeFolder={item.typeFolder}
              image={item.heroImage}
              createDate={item.createDate}
              description={item.description}
              altText={item.altText}
              content={item.content}
              tags={item.tags}
              actions={["homeLimit"]}
              authorID={item.authorID}
              author={item.author}
            />
          ))}
      </ColumnPageContainer>
      {totalPages > 1 && (
        <div className=" mt-4 max-md:hidden items-center my-8 relative flex flex-col">
          <Pagination totalPages={totalPages} />
        </div>
      )}
    </>
  );
}
