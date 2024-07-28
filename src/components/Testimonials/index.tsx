import React, { MutableRefObject, useRef, useEffect } from "react";
import person1 from "../../images/person1.webp";
import person2 from "../../images/person2.webp";
import person3 from "../../images/person3.webp";
import company3 from "../../images/Airtable.svg";
import company1 from "../../images/webflow.svg";
import company2 from "../../images/zapier.svg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const slidesData = [
  {
    companyImage: company1,
    personImage: person1,
    personName: "Mike Warren",
    personTitle: "Product Manager at Zapier",
    textColor: "text-white",
    bgColor: "bg-black",
  },
  {
    companyImage: company2,
    personImage: person2,
    personName: "Mike Warren",
    personTitle: "Product Manager at Zapier",
    textColor: "text-black",
    bgColor: "bg-white",
  },
  {
    companyImage: company3,
    personImage: person3,
    personName: "Mike Warren",
    personTitle: "Product Manager at Zapier",
    textColor: "text-black",
    bgColor: "bg-white",
  },
];

export default function Testimonials() {
  const reviewRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const triggerRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const sectionRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

  const createInfiniteLoop = (
    element: HTMLElement | null,
  ): gsap.core.Timeline | undefined => {
    if (!element) return;

    const slides = gsap.utils.toArray<HTMLElement>(element.children);
    const totalSlides = slides.length;
    const distance = element.scrollWidth / totalSlides;

    gsap.set(element, { x: 0 });
    const infiniteAnimation = gsap
      .timeline({ repeat: -1, defaults: { ease: "none" } })
      .to(element, { x: `-=${distance * totalSlides}`, duration: 20 })
      .set(element, { x: 0 });

    return infiniteAnimation;
  };



  useEffect(() => {
    const createAnimations = () => {
      let pinAnimation: gsap.core.Tween | undefined,
        infiniteAnimation: gsap.core.Timeline | undefined;

      if (window.innerWidth >= 1024) {
        pinAnimation = gsap.fromTo(
          reviewRef.current,
          { translateX: 0 },
          {
            translateX: "-40rem",
            ease: "linear",
            duration: 1.5,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "center top",
              end: `${window.innerHeight * 1.5}`,
              scrub: 0.6,
              pin: true,
              toggleActions: "play none none reverse",
              // markers: true,
            },
          },
        );
      } else {
        infiniteAnimation = createInfiniteLoop(reviewRef.current);
      }

      return () => {
        pinAnimation?.kill();
        infiniteAnimation?.kill();
      };
    };

    let cleanupAnimations = createAnimations();

    const handleResize = () => {
      cleanupAnimations();
      cleanupAnimations = createAnimations();
    };

    const resizeObserver = new ResizeObserver(() => handleResize());
    resizeObserver.observe(document.body);

    const fadeAnimation = gsap.fromTo(
      triggerRef.current,
      { opacity: 0.1 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "top bottom",
          // markers: true,
        },
      },
    );

    return () => {
      cleanupAnimations();
      fadeAnimation.kill();
      resizeObserver.disconnect();
    };
  }, []);

  const renderSlides = () => {
    const slidesGroup = [...slidesData, ...slidesData, ...slidesData];
    return (
      <>
        {slidesGroup.map((slide, index) => (
          <React.Fragment key={index}>
            <div
              className={`${slide.bgColor} px-8 lg:px-16 py-10 lg:py-20 rounded-2xl max-lg:min-w-96`}
            >
              <img
                src={slide.companyImage}
                alt="company"
                className="h-8 w-auto"
              />
              <p
                className={`text-xl ${slide.textColor} font-regular w-full lg:w-[30rem] mt-4`}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua quis
                nostrud exercitation ullamco
              </p>
              <div className="flex flex-row items-center gap-4 mt-8">
                <div className="h-12 w-12 rounded-full overflow-hidden">
                  <img
                    src={slide.personImage}
                    alt="person"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className={`font-regular text-lg ${slide.textColor}`}>
                    {slide.personName}
                  </h3>
                  <p
                    className={`font-regular text-lg text-other-gray opacity-90`}
                  >
                    {slide.personTitle}
                  </p>
                </div>
              </div>
            </div>
          </React.Fragment>
        ))}
      </>
    );
  };

  return (
    <section
      className="bg-light-yellow flex py-20 lg:py-40 overflow-hidden max-w-screen"
      id="testimonials"
      ref={sectionRef}
    >
      <div className="mx-auto max-w-7xl flex-grow py-8 w-full pl-6">
        <div ref={triggerRef} className="bg-transparent p-0 m-0 sticky top-0">
          <h2 className="font-heavy text-gray opacity-70 mb-2 lg:mb-10">
            TESTIMONIALS
          </h2>
          <h1 className="font-serif text-3xl lg:text-6xl text-black w-full">
            Hear what our<br/> clients say about us
          </h1>
          <div className="py-10">
            <div
              className="flex flex-row gap-8 lg:gap-20 mt-8 lg:mt-20 relative py-10"
              ref={reviewRef}
            >
              {renderSlides()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
