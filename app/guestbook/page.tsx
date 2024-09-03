import Giscus from "@/components/Giscus";

const Guestbook = () => {
  return (
    <section className="prose mx-auto text-center text-lg">
      <div className="mt-20 mb-10 dark:text-white">
        <div>👋 안녕하세요!</div>
        <div>자유롭게 방명록을 남길 수 있습니다.</div>
      </div>
      <Giscus />
    </section>
  );
};

export default Guestbook;
