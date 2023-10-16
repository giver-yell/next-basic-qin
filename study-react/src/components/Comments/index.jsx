import { useComments } from "@/hooks/useFetchArray";
import Link from "next/link";

export const CommentsComponent = () => {
  const { data, error, isLoading, isEmpty } = useComments();

  if (isLoading) {
    return <div>loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  if (isEmpty) {
    return <div>no comments</div>;
  }

  return (
    <ul className="space-y-2">
      {data.map((comment) => {
        return (
          <li key={comment.id} className="border-b pb-2">
            <Link
              href={`/comments/${comment.id}`}
              className="block hover:text-blue-500"
            >
              <p>{comment.body}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
