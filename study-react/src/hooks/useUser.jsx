import { fetcher } from "@/utils/fetcher";

const { useRouter } = require("next/router");
const { default: useSWR } = require("swr");

export const useUser = () => {
  const router = useRouter();
  const { data, error, isLoading, isEmpty } = useSWR(
    router.query.id
      ? `https://jsonplaceholder.typicode.com/users/${router.query.id}`
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
