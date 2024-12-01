// src/components/Loading.tsx
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface LoadingProps {
  onComplete: () => void;
}

const Loading: React.FC<LoadingProps> = ({ onComplete }) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const screenRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (pathRef.current) {
      const path = pathRef.current;
      const length = path.getTotalLength();
      path.style.strokeDasharray = length.toString();
      path.style.strokeDashoffset = length.toString();
      gsap.fromTo(
        path,
        {
          strokeDashoffset: length,
          fill: "rgba(255, 255, 255, 0)",
        },
        {
          strokeDashoffset: 0,
          fill: "#F95336",
          duration: 2,
          ease: "power3.inOut",
          repeat: -1,
          yoyo: true,
        },
      );
    }
  }, []);

  useEffect(() => {
    gsap.to(screenRef.current, {
      y: "-100%",
      duration: 5,
      ease: "power3.inOut",
      onComplete: onComplete,
    });
  }, [onComplete]);

  return (
    <div
      ref={screenRef}
      className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-gray z-50"
    >
      <svg
        ref={svgRef}
        width="720"
        height="718"
        viewBox="0 0 720 718"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="sm:size-48 size-36"
      >
        <path
          ref={pathRef}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 360C0 161.177 161.177 0 360 0H720V120.054H122V717.224H0V360ZM240 240H359.162V600.5H480.946V479.054C480.946 347.028 587.974 240 720 240V360.5H599V603.393H720V717.224H600C401.177 717.224 240 556.046 240 357.224V240Z"
          stroke="#F95336"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    </div>
  );
};

export default Loading;
