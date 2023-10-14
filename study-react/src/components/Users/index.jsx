import { useUsers } from "@/hooks/useFetchArray";
import Link from "next/link";

export const UsersComponent = () => {
  const { data, error, isLoading, isEmpty } = useUsers();

  if (isLoading) {
    return <div>loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  if (isEmpty) {
    return <div>no users</div>;
  }

  return (
    <>
      <ol>
        {data.map((user) => {
          return (
            <li key={user.id}>
              <Link href={`/users/${user.id}`}>
                <p>{`${user.name} (${user.email})`}</p>
              </Link>
            </li>
          );
        })}
      </ol>
      <div>Users</div>
    </>
  );
};
