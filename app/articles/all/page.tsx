import Card from "@/app/components/Card";
import { getAllArticles } from '@/app/utils/loadData';

export default async function allArticles() {
    // get all articles
    const articles = await getAllArticles();

    return (
        <div className="flex flex-col items-center justify-around my-12">
        <div className="relative text-center place-self-center lg:max-w-5xl lg:w-full grid grid-cols-1">
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
        </div>
        </div>
    )
}