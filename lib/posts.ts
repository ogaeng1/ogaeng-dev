import fs from "fs";
import path from "path";

interface Metadata {
  title: string;
  date: string;
  summary: string;
  tags: string[];
  thumnail: string;
}

const ROOT_DIR = path.join(process.cwd(), "posts");

const parseFrontmatter = (mdxContent: string) => {
  const frontmatterRegEx = /---\s*([\s\S]*?)\s*---/;
  const matchedFrontMatter = frontmatterRegEx.exec(mdxContent)?.at(1) as string;
  const content = mdxContent.replace(frontmatterRegEx, "").trim();
  const frontMatterLines = matchedFrontMatter?.trim().split("\n");

  const metadata = frontMatterLines.reduce((acc, line) => {
    const [key, value] = line.split(":").map((str) => str.trim());

    if (key === "tags") {
      return { ...acc, [key]: JSON.parse(value.replace(/'/g, '"')) };
    }

    return { ...acc, [key]: value.replaceAll('"', "") };
  }, {} as Metadata);

  return { metadata, content };
};

const getMdxFiles = () =>
  fs.readdirSync(ROOT_DIR).filter((file) => path.extname(file) === ".mdx");

const readMdxFile = (filePath: string) => {
  const mdxContent = fs.readFileSync(filePath, "utf8");

  return parseFrontmatter(mdxContent);
};

export const getAllPosts = () => {
  const mdxFiles = getMdxFiles();

  return mdxFiles
    .map((file) => {
      const { metadata, content } = readMdxFile(path.join(ROOT_DIR, file));
      const slug = path.basename(file, ".mdx");
      return { metadata, content, slug };
    })
    .sort(
      (a, b) =>
        new Date(b.metadata.date).getTime() -
        new Date(a.metadata.date).getTime()
    );
};
