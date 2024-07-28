import React, { MutableRefObject, useRef, useEffect } from "react";
import { gsap, Linear } from "gsap";
import { useGSAP } from "@gsap/react";
import { IDesktop, isSmallScreen } from "../../pages/index";

const CURSOR_STYLES = {
  CURSOR: "fixed hidden bg-white w-4 h-4 select-none pointer-events-none z-50",
  FOLLOWER: "fixed hidden h-8 w-8 select-none pointer-events-none z-50",
};

const Cursor: React.FC<IDesktop> = ({ isDesktop }) => {
  const cursor: MutableRefObject<HTMLDivElement | null> =
    useRef<HTMLDivElement | null>(null);
  const follower: MutableRefObject<HTMLDivElement | null> =
    useRef<HTMLDivElement | null>(null);

  const onHover = () => {
    gsap.to(cursor.current, {
      scale: 0.5,
      duration: 0.3,
    });
    gsap.to(follower.current, {
      scale: 3,
      duration: 0.3,
    });
  };

  const onUnhover = () => {
    gsap.to(cursor.current, {
      scale: 1,
      duration: 0.3,
    });
    gsap.to(follower.current, {
      scale: 1,
      duration: 0.3,
    });
  };

  const moveCircle = (e: MouseEvent) => {
    gsap.to(cursor.current, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.1,
      ease: Linear.easeNone,
    });
    gsap.to(follower.current, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.3,
      ease: Linear.easeNone,
    });
  };

  const initCursorAnimation = () => {
    follower.current?.classList.remove("hidden");
    cursor.current?.classList.remove("hidden");

    document.addEventListener("mousemove", moveCircle);

    document.querySelectorAll(".link").forEach((el) => {
      el.addEventListener("mouseenter", onHover);
      el.addEventListener("mouseleave", onUnhover);
    });
  };

  useGSAP(() => {
    if (isDesktop && !isSmallScreen()) {
      initCursorAnimation();
    }
  }, [cursor, follower, isDesktop]);

  useEffect(() => {
    return () => {
      document.removeEventListener("mousemove", moveCircle);
      document.querySelectorAll(".link").forEach((el) => {
        el.removeEventListener("mouseenter", onHover);
        el.removeEventListener("mouseleave", onUnhover);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={cursor}
        className={`mix-blend-difference rounded-full ${CURSOR_STYLES.CURSOR}`}
      ></div>
      <div
        ref={follower}
        className={`rounded-full -left-2 -top-2 bg-white opacity-20 will-change-transform mix-blend-difference ${CURSOR_STYLES.FOLLOWER}`}
      ></div>
    </>
  );
};

export default Cursor;
