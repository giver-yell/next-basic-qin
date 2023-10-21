import { CommentListByPostId } from "@/components/Comment/CommentListByPostId";
import { UserNameById } from "@/components/User/UserNameById";
import { UseFetch } from "@/hooks/useFetch";
import { API_URL } from "@/utils/const";

import Head from "next/head";
import { useRouter } from "next/router";

export const PostDetail = () => {
  const router = useRouter();
  const { data, error, isLoading } = UseFetch(
    router.query.id ? `${API_URL}/posts/${router.query.id}` : null,
  );

  if (isLoading) {
    return <div>loading...</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <Head>
        <title>{data?.title}</title>
      </Head>

      <UserNameById id={data?.userId} />
      <h1 className="text-3xl font-bold">{data?.title}</h1>
      <p className="text-xl text-gray-900 mt-2">{data?.body}</p>
      <div className="mt-2">
        <h2 className="text-xl font-bold mt-10">コメント一覧</h2>
      </div>
      <CommentListByPostId id={data?.id} />
    </div>
  );
};
