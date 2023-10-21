import { UseFetch } from "@/hooks/useFetch";
import { API_URL } from "@/utils/const";
import Link from "next/link";

export const PostTitleByCommentId = (props) => {
  const { data, error, isLoading } = UseFetch(
    props.id ? `${API_URL}/posts/${props.id}` : null,
  );

  if (isLoading) {
    return <div>loading...</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <Link href={`/posts/${data?.id}`} className="text-lg hover:text-blue-500">
      {data?.title}
    </Link>
  );
};
