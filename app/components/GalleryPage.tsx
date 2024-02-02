import { listBucketObjects } from "../utils/mediaS3";
import Gallery from "./Gallery";


export default async function GalleryPage(bucketName: string) {
    const items = await listBucketObjects(bucketName)

    return (
        <div className="flex flex-col items-center justify-around my-12">
            <Gallery images={items} />
        </div>
    )
}