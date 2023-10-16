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
