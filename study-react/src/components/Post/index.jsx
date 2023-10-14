import { CommentsByPostId } from "@/components/Comments/CommentsByPostId";
import { UserById } from "@/components/User/UserById";

import { UsePost } from "@/hooks/usePost";

export const Post = () => {
  const { data, error, isLoading } = UsePost();

  if (isLoading) {
    return <div>loading...</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <div>
        <title>{data?.title}</title>
        <p>{data?.body}</p>
      </div>
      <UserById id={data?.userId} />
      <CommentsByPostId id={data?.id} />
    </div>
  );
};
