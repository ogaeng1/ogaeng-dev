"use client";

import { useSearchParams } from "next/navigation";
import getFormattedDate from "@/lib/getFormattedDate";
import Link from "next/link";
import Image from "next/image";
import CategoryList from "../Category/CategoryList";
import { PostProps } from "./post.types";

const PostPage = ({ post }: PostProps) => {
  const path = useSearchParams();
  const query = path.get("category");
  const postList = query
    ? post.filter((p) => p.metadata.tags.includes(query))
    : post;

  return (
    <section className="px-5 mt-5">
      <CategoryList post={post} />
      <div className="mt-3 mx-auto max-w-[672px] text-3xl font-bold">
        {query === null
          ? `전체 게시글 (${postList.length})`
          : `${query} (${postList.length})`}
      </div>
      <section className="mt-6 mx-auto max-w-[672px]">
        <ul className="w-full flex flex-col gap-5">
          {postList.map((post) => (
            <Link key={post.slug} href={`/posts/${post.slug}`}>
              <li className="w-full h-[20rem] flex flex-col justify-between sm:flex-row sm:h-[10.5rem] p-5 bg-card dark:bg-darkBg rounded-lg hover:scale-[1.01]">
                <div className="flex flex-col justify-between">
                  <div>
                    <div className="text-3xl font-bold">
                      {post.metadata.title}
                    </div>
                    <div className="flex text-xl gap-2 max-w-none text-lightTags dark:text-darkTags">
                      {post.metadata.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className="hidden sm:block max-w-none text-2xl text-gray-800 dark:text-slate-300">
                    {post.metadata.summary}
                  </div>
                  <div className="text-gray-700 dark:text-gray-400 text-2xl">
                    {getFormattedDate(post.metadata.date)}
                  </div>
                </div>
                <div className="sm:w-[200px] w-full h-full border border-slate-300 dark:border-gray-600 rounded-md">
                  <Image
                    src={post.metadata.thumnail}
                    alt="썸네일"
                    width={200}
                    height={100}
                    className="w-full h-full rounded-md bg-cover"
                  />
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </section>
    </section>
  );
};

export default PostPage;
