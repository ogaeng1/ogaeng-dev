import getFormattedDate from "@/lib/getFormattedDate";
import { getPostDetail, sortedPost } from "@/lib/posts";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params: { id } }: Props) {
  const post = await getPostDetail(id);
  if (!post) return { title: "페이지를 찾을 수 없습니다." };

  return { title: post.title };
}

export function generateStaticParams() {
  const posts = sortedPost();

  if (!posts) return [];

  return posts.map((post) => ({ id: post.id }));
}

export default async function PostDetail({ params }: Props) {
  const { id } = params;
  const post = await sortedPost();

  if (!post.find((post) => post.id === id)) return notFound();

  const posting = await getPostDetail(id);
  const { title, date, tags, contentHtml } = posting;
  const formattedDate = getFormattedDate(date);

  return (
    <main className="prose mx-auto">
      <section className="mt-10">
        <p className="mb-0 text-center">{formattedDate}</p>
        <h1 className="text-3xl mb-0 text-center">{title}</h1>
        <div className="flex gap-2 justify-center">
          {tags.map((tag) => (
            <div key={tag} className="text-lightTags">
              {tag}
            </div>
          ))}
        </div>
      </section>
      <hr className="my-3" />
      <article className="mt-5">
        <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </article>
    </main>
  );
}
