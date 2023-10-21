import { API_URL } from "@/utils/const";
import { fetcher } from "@/utils/fetcher";

const { useRouter } = require("next/router");
const { default: useSWR } = require("swr");

export const useUser = () => {
  const router = useRouter();
  const { data, error, isLoading } = useSWR(
    router.query.id
      ? `${API_URL}/users/${router.query.id}`
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
