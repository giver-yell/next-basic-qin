import { API_URL } from "@/utils/const";

const { fetcher } = require("@/utils/fetcher");
const { useRouter } = require("next/router");
const { default: useSWR } = require("swr");

export const useComment = () => {
  const router = useRouter();
  const { data, error, isLoading } = useSWR(
    router.query.id
      ? `${API_URL}/comments/${router.query.id}`
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
