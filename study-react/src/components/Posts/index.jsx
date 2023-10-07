import { usePosts } from "@/hooks/usePosts";

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
    <ol>
      {data.map((post) => {
        return <li key={post.id}>{post.title}</li>;
      })}
    </ol>
  );
};
