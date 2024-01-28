// import { getServerSession } from 'next-auth'
// import Image from 'next/image'
// import { authOptions } from './utils/auth';
import { Article } from "./models/article";
import ColumnPageContainer from "./components/ColumnPageContainer";
import Card from "./components/Card";
import { fetchArticlePages, getHomeArticles } from "./utils/loadData";
import Pagination from "./components/Pagination";

export default async function Home({ searchParams, }: { searchParams?: { query?: string; page?: string;}}) {
  // const session = await getServerSession(authOptions);
  const homeItems: Article[] = await getHomeArticles();

  const query: string = searchParams?.query || '';
  const currentPage: number = Number(searchParams?.page) || 1;
  const totalPages: number = await fetchArticlePages(query)

  return (
    <ColumnPageContainer columns={2}>
        {homeItems &&
          homeItems.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              title={item.title}
              slug={item.slug}
              image={item.image}
              createDate={item.createDate}
              description={item.description}
              teaser={item.teaser}
              content={item.content}
              tagIDs={item.tagIDs}
              tags={item.tags}
              actions={["homeLimit"]}
            />
          ))}
      <div className="place-self-center mt-4">
        <Pagination totalPages={totalPages} />
      </div>
    </ColumnPageContainer>
  );
}
