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
      <h1>{data.name}</h1>
      <ul>
        <li>{data.email}</li>
        <li>{data.body}</li>
      </ul>
    </div>
  );
};
