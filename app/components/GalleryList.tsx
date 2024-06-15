import { Suspense } from "react";
import { Gallery } from "../models/gallery";
import { fetchFilteredGalleries } from "../utils/loadData";
import Loading from "@/app/components/loading";
import Card from "./Card";
import { buildURL } from "../utils/imgix";


export default async function GalleryList({ query, currentPage }: {query: string, currentPage: number}) {
    const galleries: Gallery[] = await fetchFilteredGalleries(query, currentPage);
    return (
        <Suspense fallback={<Loading />}>
            {galleries && galleries.map(gallery => {

                return (
                    <Card 
                        key={gallery.id}
                        id={gallery.id}
                        slug={gallery.slug}
                        typeFolder="galleries"
                        title={gallery.title}
                        image={buildURL(`${gallery.s3folder}/${gallery.items[0]}`)}
                        createDate={gallery.createDate}
                        description={gallery.description}
                        altText={gallery.description}
                        authorID={gallery.authorID}
                    />
                )
            })}
        </Suspense> 
    )
}