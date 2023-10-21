import { useFetchArray, useUsers } from "@/hooks/useFetchArray";
import { API_URL } from "@/utils/const";
import Link from "next/link";

export const UserList = () => {
  const { data, error, isLoading, isEmpty } = useFetchArray(`${API_URL}/users`);

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
      <ul className="grid grid-cols-2 gap-6">
        {data.map((user) => {
          return (
            <li key={user.id}>
              <Link
                href={`/users/${user.id}`}
                className="block p-4 shadow rounded hover:bg-gray-100"
              >
                <h1 className="text-xl font-bold truncate">{user.name}</h1>
                <div className="text-lg truncate">{user.email}</div>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};
