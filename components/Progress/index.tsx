"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const ScrollProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const calculateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      setScrollProgress(progress);
    };

    const scrollListener = () => {
      requestAnimationFrame(calculateScrollProgress);
    };

    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <div
      className="fixed z-20 top-[68px] left-0 h-1 bg-sky-300"
      style={{ width: `${scrollProgress}%` }}
    />
  );
};

export default ScrollProgressBar;
