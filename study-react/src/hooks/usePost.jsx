import { fetcher } from "@/utils/fetcher";

const { useRouter } = require("next/router");
const { default: useSWR } = require("swr");

export const UsePost = () => {
  const router = useRouter();
  const { data: post, error: postError } = useSWR(
    router.query.id
      ? `https://jsonplaceholder.typicode.com/posts/${router.query.id}`
      : null,
    fetcher,
  );
  const {
    data: user,
    error: userError,
    isLoading: userIsLoading,
  } = useSWR(
    post?.userId
      ? `https://jsonplaceholder.typicode.com/users/${post.userId}`
      : null,
    fetcher,
  );

  return {
    post,
    user,
    error: postError || userError,
    isLoading: userIsLoading,
  };
};
