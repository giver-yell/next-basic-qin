import { useCommentsByPostId } from "@/hooks/useFetchArray";
import Link from "next/link";

export const CommentsByPostId = (props) => {
  const { data, error, isLoading, isEmpty } = useCommentsByPostId(props.id);

  if (isLoading) {
    return <div>loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  if (isEmpty || !data) {
    return <div>no comments</div>;
  }

  return (
    <>
      <ol>
        {data.map((comment) => {
          return (
            <li key={comment.id}>
              <Link href={`/comments/${comment.id}`}>
                <p>{`${comment.name} (${comment.email})`}</p>
              </Link>
            </li>
          );
        })}
      </ol>
      <div>Comments</div>
    </>
  );
};
