import { fetcher } from "@/utils/fetcher";

const { default: useSWR } = require("swr");

export const UsePost = (id) => {
  const { data, error, isLoading } = useSWR(
    id ? `https://jsonplaceholder.typicode.com/posts/${id}` : null,
    fetcher,
  );

  return {
    data,
    error,
    isLoading,
  };
};
