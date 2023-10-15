import { PostsByUserId } from "@/components/Posts/PostsByUserId";

const { useUser } = require("@/hooks/useUser");

export const UserComponent = () => {
  const { data, error, isLoading, isEmpty } = useUser();

  if (isLoading) {
    return <div>loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  if (isEmpty || !data) {
    return <div>no user</div>;
  }

  return (
    <div>
      <h1>{data.name}</h1>
      <h2>詳細</h2>
      <ul>
        <li>{data.email}</li>
        <li>{data.username}</li>
        <li>{data.address.city}</li>
        <li>{data.phone}</li>
        <li>{data.websight}</li>
        <li>{data.company.name}</li>
      </ul>
      <h2>投稿</h2>
      <PostsByUserId id={data.id} />
      <h2>コメント</h2>
    </div>
  );
};
