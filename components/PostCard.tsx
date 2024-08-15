import Link from "next/link";
import getFormattedDate from "@/lib/getFormattedDate";
import Image from "next/image";

type Props = {
  post: BlogPost;
};

const PostCard = ({ post }: Props) => {
  const { id, title, date, thumnail, description, tags } = post;
  const postingDate = getFormattedDate(date);

  return (
    <Link href={`/posts/${id}`} key={id} aria-label={`Link to ${title}`}>
      <div className="w-full h-[10.5rem] p-5 bg-card rounded-lg flex justify-between">
        <div className="flex flex-col justify-between">
          <div>
            <div className="text-xl font-bold">{title}</div>
            <div className="flex gap-2 max-w-none text-lightTags">
              {tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
          <div className="max-w-none text-gray-700">{description}</div>
          <div className="text-gray-400">{postingDate}</div>
        </div>
        <div className="w-[200px] h-full">
          <Image
            src={thumnail}
            alt="썸네일"
            width={200}
            height={100}
            className="w-full h-full rounded-md"
          />
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
