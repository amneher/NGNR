import Card from "@/app/components/Card";
import ColumnPageContainer from "@/app/components/ColumnPageContainer";
import { getArticle } from "@/app/utils/loadData";

interface Props {
    params: { id: string }
}

const ArticlePage = async ({ params: { id }}: Props) => {
  const article = await getArticle(id);

  return (
    <ColumnPageContainer columns={1}>
      <Card id={article.id} title={article.title} slug={article.slug} image={article.image} description={article.description} teaser={article.teaser} createDate={article.createDate} content={article.content} tagIDs={article.tagIDs} actions={article.actions} tags={article.tags}/>
    </ColumnPageContainer>
  )
}

export default ArticlePage;