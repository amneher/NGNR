import { Article } from "@/app/models/article";
import { fetchFilteredArticles } from "@/app/utils/loadData"
import Card from "@/app/components/Card";
import { Suspense } from "react";
import Loading from "@/app/components/loading";


export default async function ArticlesList({ query, currentPage }: {query: string, currentPage: number}) {
    const articles: Article[] = await fetchFilteredArticles(query, currentPage);
    return (
        <Suspense fallback={<Loading />}>
        {articles.map(article => {
            article.actions ? article.actions.push("homeLimit") : article.actions;
            return (
                <div key={(article).slug}>
                    <Card
                        id={article.id}
                        image={article.heroImage}
                        title={article.title}
                        slug={article.slug}
                        typeFolder="articles"
                        createDate={article.createDate}
                        description={article.description}
                        altText={article.altText}
                        content={article.content}
                        actions={article.actions}
                        tags={article.tags}
                        authorID={article.authorID}
                        author={article.author}
                    />
                </div>
            )
        })}
        </Suspense>
    )
}