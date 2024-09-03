import type { Metadata } from "next";
import { Mdx } from "@/components/Post/Mdx";
import { getAllPosts } from "@/lib/posts";
import getFormattedDate from "@/lib/getFormattedDate";
import Giscus from "@/components/Giscus";

export function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata | undefined> {
  const post = getAllPosts().find((post) => post.slug === params.slug);

  if (!post) {
    return;
  }
  const { title, date, summary, thumnail } = post.metadata;

  return {
    title: `오갱 블로그 - ${title}`,
    description: summary,
    openGraph: {
      title: { absolute: title },
      description: summary,
      type: "article",
      publishedTime: date,
      images: [
        {
          url: thumnail,
          width: 1200,
          height: 800,
        },
      ],
    },
  };
}

const PostDetail = ({ params }: { params: { slug: string } }) => {
  const post = getAllPosts().find((post) => post.slug === params.slug);

  if (!post) {
    return false;
  }

  return (
    <main className="prose mx-auto max-w-[672px] px-5">
      <div className="mt-10 text-center">
        <div className="dark:text-slate-300">
          {getFormattedDate(post.metadata.date)}
        </div>
        <h1 className="text-3xl dark:text-white">{post.metadata.title}</h1>
      </div>
      <hr className="my-5" />
      <Mdx source={post.content} />
      <hr className="my-5" />
      <Giscus />
    </main>
  );
};

export default PostDetail;
