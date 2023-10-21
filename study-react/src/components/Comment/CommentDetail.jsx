import { PostTitleByCommentId } from "@/components/Post/PostTitleByCommentId";
import { UseFetch } from "@/hooks/useFetch";
import { API_URL } from "@/utils/const";
import { useRouter } from "next/router";

export const CommentDetail = () => {
  const router = useRouter();
  const { data, error, isLoading } = UseFetch(
    router.query.id ? `${API_URL}/comments/${router.query.id}` : null,
  );

  if (isLoading) {
    return <div>loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <div className="text-lg">
        {data.name} ({data.email})
      </div>
      <h1 className="text-3xl font-bold">{data.name}</h1>
      <h2 className="text-xl font-bold mt-10">元の記事</h2>
      <div className="mt-2">
        <PostTitleByCommentId id={data.postId} />
      </div>
    </div>
  );
};
