import React, { MutableRefObject, useRef } from "react";
import person1 from "../../images/person1.webp";
import person2 from "../../images/person2.webp";
import person3 from "../../images/person3.webp";
import company3 from "../../images/Airtable.svg";
import company1 from "../../images/webflow.svg";
import company2 from "../../images/zapier.svg";
import { gsap, Linear } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Testimonials() {
  const reviewRef: MutableRefObject<HTMLDivElement | null> =
    useRef<HTMLDivElement | null>(null);
  const triggerRef: MutableRefObject<HTMLDivElement | null> =
    useRef<HTMLDivElement | null>(null);
  const sectionRef: MutableRefObject<HTMLDivElement | null> =
    useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const pin = gsap.fromTo(
      reviewRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-40rem",
        ease: "linear",
        duration: 1.5,
        scrollTrigger: {
          trigger: reviewRef.current,
          start: `top top`,
          end: `${innerHeight}`,
          scrub: 0.6,
          pin: true,
          toggleActions: "play none none reverse",
        },
      },
    );
    const fade = gsap.fromTo(
      triggerRef.current,
      {
        opacity: 0.1,
      },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "top center",
        },
      },
    );
    return () => {
      pin.kill();
      fade.kill();
    };
  }, []);

  return (
    <section
      className="bg-light-yellow flex py-40 overflow-hidden test"
      id="testimonials"
      style={{ flexDirection: "column" }}
      ref={sectionRef}
    >
      <div ref={triggerRef} className="bg-transparent p-0 m-0 sticky">
        <h2 className="font-heavy text-gray opacity-70 mb-10 pl-[6.25rem]">
          TESTIMONIALS
        </h2>
        <h1 className="font-serif text-[3.25rem] text-black w-2/5 pl-[6.25rem]">
          Hear what our clients say about us
        </h1>
        <div className="py-10">
          <div
            className="flex flex-row gap-20 mt-20 px-[6.25rem] relative py-10"
            ref={reviewRef}
          >
            <div className="bg-black px-16 py-20 rounded-2xl">
              <img src={company1} alt="company" className="h-8 w-auto" />
              <p className="text-xl text-white font-regular w-[30rem] mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua quis
                nostrud exercitation ullamco
              </p>
              <div className="flex flex-row items-center gap-4 mt-8">
                <div className="h-12 w-12 rounded-full overflow-hidden">
                  <img
                    src={person1}
                    alt="person"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div
                  className="flex flex-column"
                  style={{ flexDirection: "column" }}
                >
                  <h3 className="font-regular text-lg text-white">
                    Mike Warren
                  </h3>
                  <p className="font-regular text-lg text-other-gray opacity-90">
                    Product Manager at Zapier
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white px-16 py-20 rounded-2xl drop-shadow-lg">
              <img src={company2} alt="company" className="h-10 w-auto" />
              <p className="text-xl text-black font-regular w-[30rem] mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua quis
                nostrud exercitation ullamco
              </p>
              <div className="flex flex-row items-center gap-4 mt-8">
                <div className="h-12 w-12 rounded-full overflow-hidden">
                  <img
                    src={person2}
                    alt="person"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div
                  className="flex flex-column"
                  style={{ flexDirection: "column" }}
                >
                  <h3 className="font-regular text-lg text-black">
                    Mike Warren
                  </h3>
                  <p className="font-regular text-lg text-other-gray opacity-90">
                    Product Manager at Zapier
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white px-16 py-20 rounded-2xl drop-shadow-lg">
              <img src={company3} alt="company" className="h-10 w-auto" />
              <p className="text-xl text-black font-regular w-[30rem] mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua quis
                nostrud exercitation ullamco
              </p>
              <div className="flex flex-row items-center gap-4 mt-8">
                <div className="h-12 w-12 rounded-full overflow-hidden">
                  <img
                    src={person3}
                    alt="person"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div
                  className="flex flex-column"
                  style={{ flexDirection: "column" }}
                >
                  <h3 className="font-regular text-lg text-black">
                    Mike Warren
                  </h3>
                  <p className="font-regular text-lg text-other-gray opacity-90">
                    Product Manager at Zapier
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
