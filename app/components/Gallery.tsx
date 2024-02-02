// imgix util, gallery article type, photo detail, ?
import Imgix from 'react-imgix';
import { buildURL } from '@/app/utils/imgix';


export default function Gallery({ images }: { images: string[] }) {

    return (
        <div className="gallery">
            {images.map(image => {
                return (
                    <Imgix
                        key={image}
                        sizes="(min-width: 960px) 33vw, (min-width: 640px) 50vw, 100vw"
                        src={buildURL(image)}
                        imgixParams={{
                        fit: "crop",
                        fm: "jpg"
                        }}
                        width={600}
                        height={600}
                    />
                )
            })}
        </div>
    )
}
