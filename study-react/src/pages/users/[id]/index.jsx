import { UserDetail } from "@/components/User/UserDetail";
import { API_URL } from "@/utils/const";
import { fetcher } from "@/utils/fetcher";
import { SWRConfig } from "swr";

export const getServerSideProps = async (ctx) => {
  const { id } = ctx.query;
  const USER_API_URL = `${API_URL}/users/${id}`;
  const userData = await fetcher(USER_API_URL);
  const POSTS_API_URL = `${API_URL}/users/${id}/posts`;
  const postsData = await fetcher(POSTS_API_URL);

  return {
    props: {
      fallback: {
        [USER_API_URL]: userData,
        [POSTS_API_URL]: postsData,
      },
    },
  };
};

const UsersId = (fallback) => {
  return (
    <SWRConfig value={{ fallback }}>
      <UserDetail />
    </SWRConfig>
  );
};

export default UsersId;
