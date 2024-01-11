import Card from "@/app/components/Card";
import { getArticle } from "@/app/utils/loadData";

interface Props {
    params: { id: string }
}

const ArticlePage = async ({ params: { id }}: Props) => {
  const article = await getArticle(id);

  return (
    <div className="container mx-auto min-h-96 max-w-xl py-12 md:max-w-4xl items-center grid grid-cols-1">
        <Card id={article.id} title={article.title} image={article.image} description={article.description} createDate={article.createDate} content={article.content} tagIDs={article.tagIDs} actions={article.actions} />
    </div>
  )
}

export default ArticlePage;