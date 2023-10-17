import { Header } from "@/components/Header";
import { UserComponent } from "@/components/User";
import { fetcher } from "@/utils/fetcher";
import { SWRConfig } from "swr";

export const getServerSideProps = async (ctx) => {
  const { id } = ctx.query;
  const API_URL = `https://jsonplaceholder.typicode.com/users/${id}`;
  const data = await fetcher(API_URL);

  return {
    props: {
      fallback: {
        [API_URL]: data,
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
