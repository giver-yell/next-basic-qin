const { useUser } = require("@/hooks/useUser");

export const UserComponent = () => {
  const { data, error, isLoading, isEmpty } = useUser();

  if (isLoading) {
    return <div>loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  if (isEmpty || !data) {
    return <div>no user</div>;
  }

  return (
    <div>
      <h1>{data.name}</h1>
      <ul>
        <li>{data.email}</li>
        <li>{data.username}</li>
        <li>{data.address.city}</li>
        <li>{data.phone}</li>
        <li>{data.websight}</li>
        <li>{data.company.name}</li>
      </ul>
    </div>
  );
};
