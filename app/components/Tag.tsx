import { Tag } from "@/app/models/article";
import Link from "next/link";


export default function Tag({ id, value }: Tag) {
    return (
        <Link href={`/articles/tags/${id}`} aria-label={`tag-${id}`}>
            <h3 className="text-md opacity-50">{value}</h3>
        </Link>
    )
}