import Image from "next/image";
import { sanitize } from "isomorphic-dompurify";
import { getArticle, getAuthor } from "@/app/utils/loadData";
import Link from "next/link";
import ArrowLeft from "@/app/components/ArrowLeft";
import Tag from "@/app/components/Tag";
import AuthorAttribution from "@/app/components/AuthorAttribution";
import AuthorAvatar from "@/app/components/AuthorAvatar";


const ArticlePage = async ({ slug }: { slug: string }) => {
  let article = await getArticle(slug);
  article.author = await getAuthor(article.authorID);

  return (
    <>
      <Image
        width={1400}
        height={720}
        className="mb-5 h-[720px] w-full bg-no-repeat object-cover object-center"
        src={`${article.image}`}
        priority
        alt={article.title}
      />
      <main className="mx-auto flex flex-col justify-center mb-8 text-neutral dark:text-neutral-content">
        <div className="mx-auto flex w-full flex-col items-start justify-center px-4 md:flex-row">
          <div className="mt-4 flex justify-start pb-4 md:justify-center md:pb-0 md:pr-20">
            <Link
              href="/"
              className="rounded-full border border-secondary bg-neutral p-2 text-base-100 shadow-md"
            >
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </div>
          <div className="mr-20 flex w-full max-w-3xl flex-col justify-start md:w-3/4">
            <h2>
              {!article && <div className="text-center">Article Not found</div>}
              {article && <Link href={`/articles/${article.slug}`}>{article.title}</Link>}
            </h2>
            {article && (
              <>
                <div className="flex flex-col justify-between space-y-4 pb-8 md:flex-row md:space-y-0">
                  <div className="flex items-center space-x-2 text-neutral md:space-y-0">
                    <AuthorAvatar authorSlug={article.author.slug} authorPhoto={article.author.photoUrl} authorTitle={article.author.title} />
                    <AuthorAttribution article={article} />
                  </div>
                  <div className="flex select-none justify-start space-x-2 md:justify-end">
                    {article.tags &&
                      article.tags.map((tag) => (
                        <Tag key={tag.id} id={tag.id} slug={tag.slug} value={tag.value} articleIDs={tag.articleIDs} />
                      ))}
                  </div>
                </div>
                <hr className="w-full border-t border-secondary pb-8" />
                <div
                  dangerouslySetInnerHTML={{
                    __html: sanitize(article.content) ?? "",
                  }}
                ></div>
              </>
            )}
            {/* <div className="mx-auto mt-8 w-full">
              <hr className="w-full border-t border-secondary pb-8" />
              {suggestedPosts && (
                <div className="flex w-full flex-col">
                  <h3 className="pb-3 text-xl font-semibold">
                    Suggested Posts
                  </h3>
                  <div className="flex flex-col space-x-0 space-y-4 md:flex-row md:space-x-4 md:space-y-0">
                    {suggestedPosts
                      .filter((nextPost) => nextPost?.id !== post?.id)
                      .slice(0, 2)
                      .map((post) => {
                        return <SuggestedPostCard key={post.id} post={post} />;
                      })}
                  </div>
                </div>
              )}
            </div> */}
          </div>
        </div>
      </main>
    </>
  );
};

export default ArticlePage;
