import { UsePost } from "@/hooks/usePost";

export const Post = () => {
  const { post, user, error, isLoading } = UsePost();

  if (isLoading) {
    return <div>loading...</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <div>
        <title>{post?.title}</title>
        <p>{post?.body}</p>
      </div>
      {user?.name ? <div>Created by {user.name}</div> : null}
    </div>
  );
};
