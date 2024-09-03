"use client";

import React, { useEffect, useRef, useState } from "react";

const Giscus = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mounted) {
      setMounted(true);
    }
  }, [mounted]);

  useEffect(() => {
    const scriptElement = document.createElement("script");
    scriptElement.setAttribute("src", "https://giscus.app/client.js");
    scriptElement.setAttribute("data-repo", "ogaeng1/ogaeng-dev");
    scriptElement.setAttribute("data-repo-id", "R_kgDOMjZGWA");
    scriptElement.setAttribute("data-category", "General");
    scriptElement.setAttribute("data-category-id", "DIC_kwDOMjZGWM4CiIYe");
    scriptElement.setAttribute("data-mapping", "pathname");
    scriptElement.setAttribute("data-strict", "0");
    scriptElement.setAttribute("data-reactions-enabled", "1");
    scriptElement.setAttribute("data-emit-metadata", "0");
    scriptElement.setAttribute("data-input-position", "bottom");
    scriptElement.setAttribute("data-theme", "dark");
    scriptElement.setAttribute("data-lang", "ko");
    scriptElement.setAttribute("data-loading", "lazy");
    scriptElement.setAttribute("crossorigin", "anonymous");
    scriptElement.async = true;

    ref.current?.appendChild(scriptElement);
  }, [mounted]);

  if (!mounted) return null;

  return <div className="mt-20" ref={ref} />;
};

export default Giscus;
