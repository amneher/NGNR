import { Article } from "@/app/models/article";
import helpers from "@/app/utils/helpers";

export default function AuthorAttribution({article}: {article: Article}) {
    return (
        <div className="flex space-x-1 text-neutral dark:text-neutral-content">
            <span>by</span>
            <a href={`/author/${article.author?.slug}`} className="font-medium">
                {article.author?.title}
            </a>
            <span>
                on {helpers.stringToFriendlyDate(article.createDate)}
            </span>
        </div>
    )
}