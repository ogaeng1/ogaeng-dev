import PostPage from "@/components/Post/PostList";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const post = getAllPosts();
  return (
    <main>
      <PostPage post={post} />
    </main>
  );
}
