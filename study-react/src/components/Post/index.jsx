import { CommentsByPostId } from "@/components/Comments/CommentsByPostId";
import { UserById } from "@/components/User/UserById";

import { UsePost } from "@/hooks/usePost";
import Head from "next/head";
import { useRouter } from "next/router";

export const Post = () => {
  const router = useRouter();
  const { data, error, isLoading } = UsePost(router.query.id);

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

      <UserById id={data?.userId} />
      <h1 className="text-3xl font-bold">{data?.title}</h1>
      <p className="text-xl text-gray-900 mt-2">{data?.body}</p>
      <div className="mt-2">
        <h2 className="text-xl font-bold mt-10">コメント一覧</h2>
      </div>
      <CommentsByPostId id={data?.id} />
    </div>
  );
};
