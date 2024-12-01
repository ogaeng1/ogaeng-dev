import { Metadata } from "next";

export const metadata: Metadata = {
  title: "오갱 블로그ㅣ소개",
  description: "오갱 블로그 소개 글입니다.",
};

const AboutPage = () => {
  return (
    <section className="mx-auto prose text-center text-3xl dark:text-white">
      <div className="mx-auto mt-10">
        👋 안녕하세요. 프론트를 사랑하는 노는 게 제일 좋은 개발자입니다. <br />
        UX와 DX, 그리고 백엔드에 관심이 많습니다.
        <br />
        <br />
        <br />
        <article className="mb-4">
          <div>1. MBTI ?</div>
          <div>ENTP</div>
        </article>
        <article className="mb-4">
          <div>2. 취미는 ?</div>
          <div>사람 만나기, 게임, 알고리즘 풀이</div>
        </article>
        <article className="mb-4">
          <div>3. 좋아하는것 ?</div>
          <div>한식, 회, 연어, 육회</div>
        </article>
        <article className="mb-4">
          <div>4. 싫어하는것 ?</div>
          <div>마라탕, 가지, 연근</div>
        </article>
        <article className="mb-4">
          <div>5. 나의 목표 ?</div>
          <div>오래오래 개발하며 살기</div>
        </article>
      </div>
    </section>
  );
};

export default AboutPage;
