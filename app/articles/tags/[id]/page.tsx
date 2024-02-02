import ColumnPageContainer from "@/app/components/ColumnPageContainer";
import Card from "@/app/components/Card";
import { getArticlesByTagID } from "@/app/utils/loadData";

interface Props {
  params: { id: string };
}

export default async function TagArticlesPage({ params: { id } }: Props) {
  // a util function to get related articles
  const articles = await getArticlesByTagID(id);
  // a page to display related articles
  return (
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
  );
}
