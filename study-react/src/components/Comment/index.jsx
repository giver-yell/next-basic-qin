import { PostByCommentId } from "@/components/Post/PostByCommentId";

const { useComment } = require("@/hooks/useComment");

export const CommentComponent = () => {
  const { data, error, isLoading, isEmpty } = useComment();

  if (isLoading) {
    return <div>loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  if (isEmpty || !data) {
    return <div>no comment</div>;
  }

  return (
    <div>
      <div className="text-lg">
        {data.name} ({data.email})
      </div>
      <h1 className="text-3xl font-bold">{data.name}</h1>
      <h2 className="text-xl font-bold mt-10">元の記事</h2>
      <div className="mt-2">
        <PostByCommentId id={data.postId} />
      </div>
    </div>
  );
};
