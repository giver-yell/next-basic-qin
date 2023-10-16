import { usePosts } from "@/hooks/useFetchArray";
import Link from "next/link";

export const Posts = () => {
  const { data, error, isLoading, isEmpty } = usePosts();

  if (isLoading) {
    return <div>loading...</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  if (isEmpty) {
    return <div>no data</div>;
  }

  return (
    <ul className="space-y-4">
      {data.map((post) => {
        return (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`} className="block group">
              <h1 className="text-xl font-bold group-hover:text-blue-500">
                {post.title}
              </h1>
              <p className="text-lg text-gray-500 group-hover:text-blue-400">
                {post.body}
              </p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
