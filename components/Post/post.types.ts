export type PostProps = {
  post: Post[];
};

type Post = {
  metadata: {
    title: string;
    date: string;
    summary: string;
    tags: string[];
    thumnail: string;
  };
  content: string;
  slug: string;
};
