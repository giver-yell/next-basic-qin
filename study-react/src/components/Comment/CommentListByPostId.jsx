import { useFetchArray } from "@/hooks/useFetchArray";
import { API_URL } from "@/utils/const";
import Link from "next/link";

export const CommentListByPostId = (props) => {
  const { data, error, isLoading, isEmpty } = useFetchArray(
    props.id ? `${API_URL}/posts/${props.id}/comments` : null,
  );

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
