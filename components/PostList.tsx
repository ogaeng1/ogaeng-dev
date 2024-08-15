import { sortedPost } from "@/lib/posts";
import PostCard from "./PostCard";

const Posts = () => {
  const posts = sortedPost();
  return (
    <section className="mt-6 mx-auto max-w-[672px]">
      <ul className="w-full flex flex-col gap-5">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </ul>
    </section>
  );
};

export default Posts;
