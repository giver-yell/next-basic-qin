import { Header } from "@/components/Header";
import { Main } from "@/components/Main";
import { Posts } from "@/components/Posts";

const Home = () => {
  return (
    <>
      <Header />
      <Posts />
      <Main page="index" />
    </>
  );
};

export default Home;
