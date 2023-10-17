import { Header } from "@/components/Header";
import { UsersComponent } from "@/components/Users";
import { fetcher } from "@/utils/fetcher";
import { SWRConfig } from "swr";

export const getServerSideProps = async () => {
  const USERS_API_URL = `https://jsonplaceholder.typicode.com/users`;
  const usersData = await fetcher(USERS_API_URL);

  return {
    props: {
      fallback: {
        [USERS_API_URL]: usersData,
      },
    },
  };
};

const Users = (props) => {
  const { fallback } = props;
  return (
    <>
      <SWRConfig value={{ fallback }}>
        <Header />
        <UsersComponent />
      </SWRConfig>
    </>
  );
};

export default Users;
