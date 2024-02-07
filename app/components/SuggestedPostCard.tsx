import Link from "next/link";
import Image from "next/image";
import helpers from "../utils/helpers";

export default function SuggestedPostCard({ image, slug, title, typeFolder, createDate, authorSlug, authorTitle }: { image: string, slug: string, title: string, typeFolder: string, createDate: Date, authorSlug: string | undefined, authorTitle: string | undefined }) {
  return (
    <div className="bg-secondary mb-6 pb-2 rounded-box text-neutral dark:text-neutral-content dark:bg-neutral">
      {image && (
        <Link href={`/articles/${slug}`}>
          <Image
            className="mb-5 h-[240px] rounded-xl bg-no-repeat object-cover object-center transition-transform duration-200 ease-out hover:scale-[1.02]"
            src={`${image}`}
            width={1400}
            height={240}
            alt={title}
          />
        </Link>
      )}

      <div className="flex justify-center pb-2 space-x-2">
          <span>
            <Link href={`/${typeFolder}/${slug}`} className="font-semibold">{title}</Link>
            {" "}by{" "}
            <a
              href={`/author/${authorSlug}`}
              className="font-semibold"
            >
              {authorTitle}
            </a>{" "}
            on {helpers.stringToFriendlyDate(createDate)}
          </span>
      </div>
    </div>
  );
}
