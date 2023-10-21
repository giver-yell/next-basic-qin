import { PostListByUserId } from "@/components/Post/PostListByUserId";
import { UseFetch } from "@/hooks/useFetch";
import { API_URL } from "@/utils/const";
import { useRouter } from "next/router";

export const UserDetail = () => {
  const router = useRouter();
  const { data, error, isLoading } = UseFetch(
    router.query.id ? `${API_URL}/users/${router.query.id}` : null,
  );

  if (isLoading) {
    return <div>loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
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
      <PostListByUserId id={data.id} />
    </div>
  );
};
