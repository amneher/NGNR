import helpers from "@/app/utils/helpers";

export default function AuthorAttribution({ authorSlug, authorTitle, itemCreateDate }: { authorSlug: string, authorTitle: string, itemCreateDate: Date}) {
    return (
        <div className="flex space-x-1 text-neutral dark:text-neutral-content">
            <span>by</span>
            <a href={`/author/${authorSlug}`} className="font-medium">
                {authorTitle}
            </a>
            <span>
                on {helpers.stringToFriendlyDate(itemCreateDate)}
            </span>
        </div>
    )
}