import { Metadata } from "next";

export const metadata: Metadata = {
  title: "오갱 블로그 | 소개",
  description: "오갱 블로그 소개 글입니다.",
};

const AboutPage = () => {
  return (
    <section className="px-5">
      <article className="mx-auto max-w-[672px]"></article>
    </section>
  );
};

export default AboutPage;
