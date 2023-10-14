import { fetcher } from "@/utils/fetcher";
import useSWR from "swr";

export const UserById = (props) => {
  const { data, error, isLoading } = useSWR(
    props?.id ? `https://jsonplaceholder.typicode.com/users/${props.id}` : null,
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

  return <div>Created by {data?.name}</div>;
};
