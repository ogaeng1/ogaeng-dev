"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { PostProps } from "../Post/post.types";

const CategoryList = ({ post }: PostProps) => {
  const path = useSearchParams();
  const query = path.get("category");
  const allTags = [
    "All",
    ...post
      .flatMap((post) => post.metadata.tags)
      .filter((tag, idx, self) => self.indexOf(tag) === idx),
  ];

  return (
    <aside className="mx-auto max-w-[672px] flex gap-3 overflow-x-auto overflow-y-hidden">
      {allTags.map((tag) => (
        <Link
          key={tag}
          href={tag === "All" ? "/" : `/?category=${tag}`}
          className="mb-3 text-2xl"
        >
          <div
            className={`w-full text-md border rounded-md h-[36px] flex items-center gap-2 px-3 text-center ${
              query === tag || (query === null && tag === "All")
                ? "bg-darkTags text-white border-none"
                : ""
            }`}
          >
            {tag}
          </div>
        </Link>
      ))}
    </aside>
  );
};

export default CategoryList;
