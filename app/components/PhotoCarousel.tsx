"use client";

import Image from "next/image";
import ArrowLeft from "./ArrowLeft";
import ArrowRight from "./ArrowRight";

export default function PhotoCarousel({ imageURLs }: { imageURLs: string[] }) {
  return (
    <div className="carousel w-full">
      {imageURLs &&
        imageURLs.map((image) => {
          return (
            <div
              key={image}
              id={`slide-${imageURLs.indexOf(image)}`}
              className="carousel-item flex w-0.8"
            >
              <Image
                src={image}
                className="w-full"
                alt="Carousel Image"
                width={600}
                height={600}
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a
                  href={`#slide-${imageURLs.indexOf(image) - 1}`}
                  className="btn btn-circle"
                >
                  <ArrowLeft className="h-4 w-4" />
                </a>
                <a
                  href={`#slide-${imageURLs.indexOf(image) + 1}`}
                  className="btn btn-circle"
                >
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          );
        })}
    </div>
  );
}
