import { UseFetch } from "@/hooks/useFetch";
import { API_URL } from "@/utils/const";

export const UserNameById = (props) => {
  const { data, error, isLoading } = UseFetch(
    props?.id ? `${API_URL}/users/${props.id}` : null,
  );

  if (isLoading) {
    return <div>loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return <div className="text-lg">Created by {data?.name}.</div>;
};
