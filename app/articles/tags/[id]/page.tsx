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
        return (
          <div key={article.id}>
            <Card
              id={article.id}
              image={article.image}
              title={article.title}
              description={article.description}
              createDate={article.createDate}
              content={article.content}
              actions={article.actions}
              tagIDs={article.tagIDs}
              tags={article.tags}
            />
          </div>
        );
      })}
    </ColumnPageContainer>
  );
}
