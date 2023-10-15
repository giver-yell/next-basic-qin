import { CommentsByPostId } from "@/components/Comments/CommentsByPostId";
import { UserById } from "@/components/User/UserById";

import { UsePost } from "@/hooks/usePost";
import { useRouter } from "next/router";

export const Post = () => {
  const router = useRouter();
  const { data, error, isLoading } = UsePost(router.query.id);

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
