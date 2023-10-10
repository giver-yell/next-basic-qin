import { Header } from "@/components/Header";
import { Main } from "@/components/Main";
import { Post } from "@/components/Post";
import { UsePost } from "@/hooks/usePost";

const PostsId = () => {
  const { post, user, error, isLoading } = UsePost();
  console.log(user, error, isLoading);

  return (
    <>
      <Header />
      <Post />
      <Main page="index" />
    </>
  );
};

export default PostsId;
