"use client";

import { useEffect, useState } from "react";

import AnimatedCircularProgressBar from "./ui/animated-circular-progress-bar";

export function ScrollbarHome() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenu, setIsMenu] = useState(false);

  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const documentHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const progress = (scrollY / documentHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="border fixed bottom-24 right-3 z-10 flex items-center justify-center rounded-full">
      <AnimatedCircularProgressBar
        max={100}
        min={0}
        value={scrollProgress}
        gaugePrimaryColor="rgb(234 88 12)"
        gaugeSecondaryColor="rgba(0, 0, 0, 0.1)"
      />
    </div>
  );
}
