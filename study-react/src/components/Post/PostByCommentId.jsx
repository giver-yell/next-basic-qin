import { UsePost } from "@/hooks/usePost";
import Link from "next/link";

export const PostByCommentId = (props) => {
  const { data, error, isLoading } = UsePost(props.id);

  if (isLoading) {
    return <div>loading...</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  return <Link href={`/posts/${data?.id}`}>{data?.title}</Link>;
};
