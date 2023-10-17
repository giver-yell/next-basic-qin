import { Header } from "@/components/Header";
import { UserComponent } from "@/components/User";
import { fetcher } from "@/utils/fetcher";
import { SWRConfig } from "swr";

export const getServerSideProps = async (ctx) => {
  const { id } = ctx.query;
  const USER_API_URL = `https://jsonplaceholder.typicode.com/users/${id}`;
  const userData = await fetcher(USER_API_URL);
  const POSTS_API_URL = `https://jsonplaceholder.typicode.com/posts?userId=${id}`;
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
      <Header />
      <UserComponent />
    </SWRConfig>
  );
};

export default UsersId;
