const { fetcher } = require("@/utils/fetcher");
const { useRouter } = require("next/router");
const { default: useSWR } = require("swr");

export const useComment = () => {
  const router = useRouter();
  const { data, error, isLoading } = useSWR(
    router.query.id
      ? `https://jsonplaceholder.typicode.com/comments/${router.query.id}`
      : null,
    fetcher,
  );

  return {
    data,
    error,
    isLoading,
    isEmpty: data && data.length === 0,
  };
};
