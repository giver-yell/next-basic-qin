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
      <h1 className="font-bold text-3xl">{data.name}</h1>
      <h2 className="text-xl font-bold mt-10">詳細</h2>
      <ul className="list-inside list-disc mt-2 text-xl">
        <li>アカウント名: {data.username}</li>
        <li>メール: {data.email}</li>
        <li>電話番号: {data.phone}</li>
        <li>Webサイト: {data.websight}</li>
        <li>住所: {data.address.city}</li>
        <li>勤務先: {data.company.name}</li>
      </ul>
      <div className="mt-2">
        <h2 className="text-xl font-bold mt-10">投稿</h2>
      </div>
      <PostsByUserId id={data.id} />
    </div>
  );
};
