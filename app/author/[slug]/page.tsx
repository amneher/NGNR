import ColumnPageContainer from "@/app/components/ColumnPageContainer";
import Image from "next/image";
import { getAuthorBySlug, getArticlesByAuthor, getGalleriesByAuthor } from "@/app/utils/loadData";
import SuggestedPostCard from "@/app/components/SuggestedPostCard";
import { Article } from "@/app/models/article";
import { Gallery } from "@/app/models/gallery";

export default async function AuthorDetailPage({ slug }: { slug: string }) {
  const author = await getAuthorBySlug(slug);
  const authorArticles = await getArticlesByAuthor(author.id);
  const authorGalleries = await getGalleriesByAuthor(author.id);
  let authorPosts: (Article | Gallery)[] = [];
  for (let index = 0; index < 5; index++) {
    authorPosts.push(authorArticles[index]);
    authorPosts.push(authorGalleries[index]);
  }

  return (
    <ColumnPageContainer columns={1}>
        <h2 className={`m-2 text-2xl font-semibold`}>More About Author</h2>
        <div className="relative text-center place-self-center lg:max-w-5xl lg:w-full my-12 grid grid-cols-2">
        <Image
          className="rounded-box"
          priority={true}
          src={`${author.photoUrl}`}
          height={256}
          width={256}
          alt={author.title}
        />
        <span>
        <h2 className={`m-2 text-2xl font-semibold`}>{author.title}</h2>
        <p className={`m-2 text-md font-mono`}>
            More details and information about the author...
        </p>
        </span>
        </div>
        
        
        <div className="divider divider-primary" />
        <div className="flex w-full flex-col">
        <h2 className={`m-2 text-2xl font-semibold`}>Recent Posts:</h2>
        <div className="flex flex-col space-x-0 space-y-4 md:flex-row md:space-x-4 md:space-y-0">
            {authorPosts && authorPosts.map(article => {
                return (
                    <SuggestedPostCard key={article.id} image={article.heroImage} slug={article.slug} title={article.title} typeFolder={article.typeFolder} createDate={article.createDate} authorSlug={article.author?.slug} authorTitle={article.author?.title} />
                )
            })}
        </div>
        </div>
    </ColumnPageContainer>
  );
}
