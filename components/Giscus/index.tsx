"use client";

import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

const Giscus = () => {
  const { resolvedTheme } = useTheme();
  const ref = useRef<HTMLDivElement>(null);

  const theme = resolvedTheme === "dark" ? "dark" : "light";

  const repoId = process.env.NEXT_PUBLIC_REPO_ID || "";
  const categoryId = process.env.NEXT_PUBLIC_CATEGORY_ID || "";

  useEffect(() => {
    if (!ref.current || ref.current.hasChildNodes()) return;

    const scriptElement = document.createElement("script");

    scriptElement.async = true;
    scriptElement.crossOrigin = "anonymous";
    scriptElement.setAttribute("src", "https://giscus.app/client.js");
    scriptElement.setAttribute("data-repo", "ogaeng1/ogaeng-dev");
    scriptElement.setAttribute("data-repo-id", repoId);
    scriptElement.setAttribute("data-category", "Comments");
    scriptElement.setAttribute("data-category-id", categoryId);
    scriptElement.setAttribute("data-mapping", "pathname");
    scriptElement.setAttribute("data-strict", "0");
    scriptElement.setAttribute("data-reactions-enabled", "1");
    scriptElement.setAttribute("data-emit-metadata", "0");
    scriptElement.setAttribute("data-input-position", "bottom");
    scriptElement.setAttribute("data-theme", theme);
    scriptElement.setAttribute("data-lang", "ko");
    scriptElement.async = true;

    ref.current?.appendChild(scriptElement);
  }, [theme]);

  useEffect(() => {
    const iframe = document.querySelector<HTMLIFrameElement>(
      "iframe.giscus-frame"
    );
    iframe?.contentWindow?.postMessage(
      { giscus: { setConfig: { theme } } },
      "https://giscus.app"
    );
  }, [theme]);

  return <section className="mt-20" ref={ref} />;
};

export default Giscus;
