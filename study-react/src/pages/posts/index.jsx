import { Header } from "@/components/Header";
import { Main } from "@/components/Main";
import { Posts as PostsComponent } from "@/components/Posts";

const Posts = () => {
  return (
    <>
      <Header />
      <PostsComponent />
      <Main page="Posts page" />
    </>
  );
};

export default Posts;
