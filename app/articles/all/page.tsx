import Card from "@/app/components/Card";
import { getAllArticles } from '@/app/utils/loadData';
import ColumnPageContainer from "@/app/components/ColumnPageContainer";
export default async function allArticles() {
    // get all articles
    const articles = await getAllArticles();

    return (
        <ColumnPageContainer columns={1}>
            {articles.map(article => {
                return (
                    <div key={(article).id}>
                        <Card
                            id={article.id}
                            image={article.image}
                            title={article.title}
                            createDate={article.createDate}
                            description={article.description}
                            content={article.content}
                            actions={article.actions}
                            tagIDs={article.tagIDs}
                            tags={article.tags}
                        />
                    </div>
                )
            })}
        </ColumnPageContainer>
    )
}