import AuthorAttribution from "@/app/components/AuthorAttribution";
import AuthorAvatar from "@/app/components/AuthorAvatar";
import ColumnPageContainer from "@/app/components/ColumnPageContainer";
import Gallery from "@/app/components/Gallery";
import PhotoCarousel from "@/app/components/PhotoCarousel";
import { buildURL } from "@/app/utils/imgix";
import { getAuthor, getGalleryBySlug } from "@/app/utils/loadData";


export default async function GalleryDetail({ slug }: { slug: string }) {
    const gallery = await getGalleryBySlug(slug)
    const author = await getAuthor(gallery.authorID)
    const images = gallery.items.map(item => `${gallery.s3folder}/${item}`)
    const imageURLs = images.map(image => buildURL(image))
    return (
        <ColumnPageContainer columns={1}>
        <h2 className={`m-2 text-2xl font-semibold`}>{gallery.title}</h2>
        <div className="flex justify-center space-x-2 text-neutral md:space-y-0">
            <AuthorAvatar authorSlug={author.slug} authorPhoto={author.photoUrl} authorTitle={author.title} />
            <AuthorAttribution authorSlug={author.slug} authorTitle={author.title} itemCreateDate={gallery.createDate} />
        </div>
        <h2 className={`m-2 text-1xl font-mono`}>{gallery.description}</h2>
        {/* <PhotoCarousel imageURLs={imageURLs} /> */}
        <Gallery images={images} />
        </ColumnPageContainer>
    )
}