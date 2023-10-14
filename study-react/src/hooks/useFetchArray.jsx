const { fetcher } = require("@/utils/fetcher");
const { default: useSWR } = require("swr");

const useFetchArray = (url) => {
  const { data, error, isLoading } = useSWR(url, fetcher);

  return {
    data,
    error,
    isLoading,
    isEmpty: data && data.length === 0,
  };
};

const API_URL = `https://jsonplaceholder.typicode.com`;

export const usePosts = () => {
  return useFetchArray(`${API_URL}/posts`);
};

export const useComments = () => {
  return useFetchArray(`${API_URL}/comments`);
};

export const useUsers = () => {
  return useFetchArray(`${API_URL}/users`);
};
