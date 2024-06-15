import Imgix from "react-imgix";
import { buildURL } from "@/app/utils/imgix";

export interface Slide {
  id: string;
  image: string;
}

export default function Carousel({ slides }: {slides: Slide[]}) {
  return (
    <div className="carousel w-full">
      {slides.map((slide) => {
        const nextSlide: string =
          slides.indexOf(slide) === slides.length - 1
            ? slides[0].id
            : slides[slides.indexOf(slide) + 1].id;
        const previousSlide: string =
          slides.indexOf(slide) === 0
            ? slides[slides.length - 1].id
            : slides[slides.indexOf(slide) - 1].id;
        return (
          <div
            id={`slide-${slide.id}`}
            key={slide.id}
            className="carousel-item relative w-full"
          >
            <Imgix
              src={buildURL(slide.image)}
              sizes="(min-width: 960px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="rounded-box w-full"
              aria-label={`image-${slide.id}`}
              imgixParams={{ ar: "4:5", fit: "crop" }}
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href={`#slide-${previousSlide}`} className="btn btn-circle">
                ❮
              </a>
              <a href={`#slide-${nextSlide}`} className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
