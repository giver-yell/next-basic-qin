import { fetcher } from "@/utils/fetcher";
import useSWRImmutable from "swr/immutable";

export const UseFetch = (url) => {
  const { data, error, isLoading } = useSWRImmutable(url, fetcher);

  return {
    data,
    error,
    isLoading,
  };
};
