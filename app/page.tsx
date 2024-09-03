import type { Metadata } from "next";
import PostPage from "@/components/Post/PostList";
import { getAllPosts } from "@/lib/posts";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "오갱 블로그",
  description: "오갱 블로그입니다.",
};

export default function Home() {
  const post = getAllPosts();
  return (
    <Suspense fallback={<div>로딩</div>}>
      <main>
        <PostPage post={post} />
      </main>
    </Suspense>
  );
}
