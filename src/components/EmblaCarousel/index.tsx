import React, { useCallback, useEffect, useState } from "react";
import { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { ImageDataLike } from "gatsby-plugin-image";

interface MdxNode {
  id: string;
  title: string;
  date: string;
  image: string;
  slug: string;
  getImage: ImageDataLike;
}

type PropType = {
  slides: MdxNode[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [scrollProgress, setScrollProgress] = useState(0);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const onScroll = useCallback((emblaApi: EmblaCarouselType) => {
    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
    setScrollProgress(progress * 100);
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onScroll(emblaApi);
    emblaApi
      .on("reInit", onScroll)
      .on("scroll", onScroll)
      .on("slideFocus", onScroll);
  }, [emblaApi, onScroll]);

  return (
    <div className="max-w-screen mx-auto min-[2000px]:max-[5000px]:max-w-7xl">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex xl:-ml-[12vw] min-[2000px]:max-[5000px]:-ml-[20vw] -ml-[18vw]">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`flex-0 flex-grow-0 flex-shrink-0 w-2/5 pl-4 snap-center ${index === 0 ? "ml-[20vw]" : ""}`}
            >
              <Link to={`/blog/${slide.slug}`} className="block">
                <div className="flex-1 md:h-96 h-36 w-full mb-5 overflow-hidden">
                  {slide.image && (
                    <GatsbyImage
                      image={getImage(slide.getImage)!}
                      alt={slide.title}
                      className="h-full w-full object-cover"
                    />
                  )}
                </div>
                <h2 className="lg:mb-4 mb-2 lg:text-lg text-base font-heavy text-white underline decoration-white">
                  {slide.title}
                </h2>
                <span className="mb-2 block text-sm font-regular text-white">
                  {slide.date}
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-[auto_1fr] justify-between gap-3 mt-6 mx-auto max-w-7xl flex-grow w-full px-6">
        <div className="grid grid-cols-2 gap-2 items-center">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="relative rounded-lg shadow-inner bg-gray h-1.5 justify-self-end self-center w-52 max-w-xl overflow-hidden">
          <div
            className="absolute bg-white h-full top-0 left-0"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
