import { API_URL } from "@/utils/const";
import { fetcher } from "@/utils/fetcher";

const { default: useSWR } = require("swr");

export const UsePost = (id) => {
  const { data, error, isLoading } = useSWR(
    id ? `${API_URL}/posts/${id}` : null,
    fetcher,
  );

  return {
    data,
    error,
    isLoading,
  };
};
