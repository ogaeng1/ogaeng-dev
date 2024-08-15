import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postDirectory = path.join("__posts");

export function sortedPost() {
  const fileNames = fs.readdirSync(postDirectory);

  const getAllPosts = fileNames.map((fileName) => {
    const id = fileName.replace(/\.mdx$/, "");
    const fullPath = path.join(postDirectory, fileName);
    const contents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(contents);
    const blogPost: BlogPost = {
      id,
      title: matterResult.data.title,
      date: matterResult.data.date,
      description: matterResult.data.description,
      tags: matterResult.data.tags,
      thumnail: matterResult.data.thumnail,
    };

    return blogPost;
  });

  return getAllPosts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostDetail(id: string) {
  const fullPath = path.join(postDirectory, `${id}.mdx`);
  const contents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(contents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  const blogWithHtml: BlogPost & { contentHtml: string } = {
    id,
    title: matterResult.data.title,
    date: matterResult.data.date,
    description: matterResult.data.description,
    tags: matterResult.data.tags,
    thumnail: matterResult.data.thumnail,
    contentHtml,
  };

  return blogWithHtml;
}
