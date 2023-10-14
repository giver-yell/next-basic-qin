import { fetcher } from "@/utils/fetcher";

const { useRouter } = require("next/router");
const { default: useSWR } = require("swr");

export const UsePost = () => {
  const router = useRouter();
  const { data, error, isLoading } = useSWR(
    router.query.id
      ? `https://jsonplaceholder.typicode.com/posts/${router.query.id}`
      : null,
    fetcher,
  );

  return {
    data,
    error,
    isLoading,
  };
};
