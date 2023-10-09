import { Header } from "@/components/Header";
import { Main } from "@/components/Main";
import { useRouter } from "next/router";

const PostId = () => {
  const router = useRouter();

  return (
    <>
      <Header />
      <div>{router.query.id}</div>
      <Main page="index" />
    </>
  );
};

export default PostId;
