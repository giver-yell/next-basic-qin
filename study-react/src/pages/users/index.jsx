import { UserList } from "@/components/User/UserList";
import { API_URL } from "@/utils/const";
import { fetcher } from "@/utils/fetcher";
import { SWRConfig } from "swr";

export const getServerSideProps = async () => {
  const USERS_API_URL = `${API_URL}/users`;
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
    <SWRConfig value={{ fallback }}>
      <UserList />
    </SWRConfig>
  );
};

export default Users;
