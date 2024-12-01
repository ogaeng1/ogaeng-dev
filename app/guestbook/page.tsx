import { Metadata } from "next";
import Giscus from "@/components/Giscus";

export const metadata: Metadata = {
  title: "오갱 블로그ㅣ방명록",
  description: "오갱 블로그 방명록입니다.",
};

const Guestbook = () => {
  return (
    <section className="prose mx-auto px-5 text-center text-3xl">
      <div className="mt-20 mb-10 dark:text-white">
        <div>👋 안녕하세요!</div>
        <div>자유롭게 방명록을 남길 수 있습니다.</div>
      </div>
      <Giscus />
    </section>
  );
};

export default Guestbook;
