import { CommentsComponent } from "@/components/Comments";
import { Header } from "@/components/Header";
import { API_URL } from "@/utils/const";
import { fetcher } from "@/utils/fetcher";
import { SWRConfig } from "swr";

export const getStaticProps = async () => {
  const COMMENTS_API_URL = `${API_URL}/comments`;
  const commentsData = await fetcher(COMMENTS_API_URL);

  return {
    props: {
      fallback: {
        [COMMENTS_API_URL]: commentsData,
      },
    },
    revalidate: 1,
  };
};

const Comments = (props) => {
  const { fallback } = props;

  return (
    <>
      <SWRConfig value={{ fallback }}>
        <Header />
        <CommentsComponent />
      </SWRConfig>
    </>
  );
};

export default Comments;
