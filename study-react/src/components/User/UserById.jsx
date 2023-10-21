import { API_URL } from "@/utils/const";
import { fetcher } from "@/utils/fetcher";
import useSWR from "swr";

export const UserById = (props) => {
  const { data, error, isLoading } = useSWR(
    props?.id ? `${API_URL}/users/${props.id}` : null,
    fetcher,
  );

  if (isLoading) {
    return <div>loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  if (!data || data.length === 0) {
    return <div>no user</div>;
  }

  return <div className="text-lg">Created by {data?.name}.</div>;
};
